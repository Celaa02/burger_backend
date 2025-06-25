import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { sendOrderConfirmationEmail } from '../common/utils/send-confirmation-email'; // ajusta ruta

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
  ) {}

  async create(data: CreateOrderDto): Promise<Order> {
    const order = this.orderRepo.create(data);
    const savedOrder = await this.orderRepo.save(order);

    const email = data.email;
    if (email) {
      await sendOrderConfirmationEmail(email, savedOrder.id, savedOrder.total);
    }

    return savedOrder;
  }

  findAll(userId: number): Promise<Order[]> {
    return this.orderRepo.find({
      where: { user_id: userId },
      order: { createdAt: 'DESC' },
    });
  }
}
