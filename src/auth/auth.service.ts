import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const existing = await this.userRepo.findOne({
      where: { email: data.email },
    });
    if (existing)
      throw new UnauthorizedException('The email is already registered');

    const hashed = await bcrypt.hash(data.password, 10);
    const user = this.userRepo.create({ ...data, password: hashed });
    await this.userRepo.save(user);
    return { message: 'User successfully registered' };
  }

  async login(data: LoginDto) {
    const user = await this.userRepo.findOne({ where: { email: data.email } });
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.jwtService.signAsync({ sub: user.id });
    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        access_token: token,
      },
    };
  }
}
