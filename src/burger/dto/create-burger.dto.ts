import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBurgerDto {
  @ApiProperty({
    example: 'Burger Doble Queso',
    description: 'Nombre de la hamburguesa',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Con carne de res, doble queso, vegetales frescos y salsas',
    description: 'Descripción de la hamburguesa',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 23000,
    description: 'Precio de la hamburguesa en pesos colombianos',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'https://i.imgur.com/xXZPZyZ.png',
    description: 'URL de la imagen de la hamburguesa',
  })
  @IsString()
  imageUrl: string;
}
