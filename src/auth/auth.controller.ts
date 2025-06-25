import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: RegisterDto) {
    console.log('📩 Datos recibidos en registro:', body);
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: LoginDto) {
    console.log('🔐 Datos recibidos en login:', body);
    return this.authService.login(body);
  }
}
