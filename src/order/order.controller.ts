import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: CreateOrderDto): Promise<Order> {
    console.log('🚀 ~ OrderController ~ create ~ body:', body);
    return this.orderService.create(body);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: Request): Promise<Order[]> {
    const userId = req.user['userId'];
    console.log('🧾 Usuario autenticado:', userId);
    return this.orderService.findAll(userId);
  }
}
