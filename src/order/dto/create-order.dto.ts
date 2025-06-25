import {
  IsArray,
  IsEmail,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class OrderItemDto {
  @ApiProperty({ example: 1, description: 'ID de la hamburguesa seleccionada' })
  @IsNumber()
  burgerId: number;

  @ApiProperty({
    example: ['queso', 'tocineta'],
    description: 'Lista de extras',
  })
  @IsArray()
  extras: string[];

  @ApiProperty({ example: ['mayonesa', 'bbq'], description: 'Lista de salsas' })
  @IsArray()
  salsas: string[];

  @ApiProperty({ example: 23000, description: 'Precio del ítem' })
  @IsNumber()
  price: number;

  @ApiProperty({ example: 'papas', description: 'Acompañamiento seleccionado' })
  @IsString()
  side: string;

  @ApiProperty({ example: 'coca-cola', description: 'Bebida seleccionada' })
  @IsString()
  drink: string;
}

export class CreateOrderDto {
  @ApiProperty({
    type: [OrderItemDto],
    description: 'Lista de hamburguesas y sus configuraciones',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @ApiProperty({
    example: 'cliente@gmail.com',
    description: 'Correo del cliente',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 23000, description: 'Total del pedido' })
  @IsNumber()
  total: number;

  @ApiProperty({ example: 8, description: 'ID del usuario que hace el pedido' })
  @IsNumber()
  user_id: number;
}
