import { IsArray, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsNumber()
  burgerId: number;

  @IsArray()
  extras: string[];

  @IsArray()
  salsas: string[];

  @IsNumber()
  price: number;

  side: string;
  drink: string;
}

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsNumber()
  total: number;
}
