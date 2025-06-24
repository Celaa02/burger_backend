import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: CreateOrderDto): Promise<Order> {
    return this.orderService.create(body);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}
