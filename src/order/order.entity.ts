import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('json')
  items: any; // Aquí guardaremos un array de ítems personalizados (burgers, sides, bebidas)

  @Column('decimal', { precision: 6, scale: 2 })
  total: number;

  @CreateDateColumn()
  createdAt: Date;
}
