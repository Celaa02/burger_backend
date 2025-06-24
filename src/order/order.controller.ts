import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  create(@Body() body: CreateOrderDto): Promise<Order> {
    return this.orderService.create(body);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}
