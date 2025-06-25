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

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column('int')
  user_id: number;

  @Column('json')
  items: any;

  @Column('decimal', { precision: 6, scale: 2 })
  total: number;

  @CreateDateColumn()
  createdAt: Date;
}
