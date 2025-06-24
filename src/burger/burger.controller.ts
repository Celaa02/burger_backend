import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BurgerService } from './burger.service';
import { Burger } from './burger.entity';
import { CreateBurgerDto } from './dto/create-burger.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('burgers')
export class BurgerController {
  constructor(private burgerService: BurgerService) {}
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Burger[]> {
    return this.burgerService.findAll();
  }

  @Post()
  create(@Body() body: CreateBurgerDto): Promise<Burger> {
    return this.burgerService.create(body);
  }
}
