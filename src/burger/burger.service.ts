import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Burger } from './burger.entity';
import { CreateBurgerDto } from './dto/create-burger.dto';

@Injectable()
export class BurgerService {
  constructor(
    @InjectRepository(Burger)
    private burgerRepo: Repository<Burger>,
  ) {}

  create(data: CreateBurgerDto): Promise<Burger> {
    const burger = this.burgerRepo.create(data);
    return this.burgerRepo.save(burger);
  }

  findAll(): Promise<Burger[]> {
    return this.burgerRepo.find();
  }
}
