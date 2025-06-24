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

    // Enviar correo de confirmación
    const email = data.email; // asegúrate de que esté incluido en el DTO
    if (email) {
      await sendOrderConfirmationEmail(email, savedOrder.id, savedOrder.total);
    }

    return savedOrder;
  }

  findAll(): Promise<Order[]> {
    return this.orderRepo.find({ order: { createdAt: 'DESC' } });
  }
}
