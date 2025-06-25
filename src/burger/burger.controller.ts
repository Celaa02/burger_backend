import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
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

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOne(@Param('id') id: string) {
    const burger = await this.burgerService.findOne(Number(id));
    if (!burger) {
      throw new NotFoundException(`Burger con ID ${id} no encontrada`);
    }
    return burger;
  }
}
