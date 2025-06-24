import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Burger } from './burger.entity';
import { BurgerService } from './burger.service';
import { BurgerController } from './burger.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Burger])], // 👈 OBLIGATORIO
  controllers: [BurgerController],
  providers: [BurgerService],
})
export class BurgerModule {}
