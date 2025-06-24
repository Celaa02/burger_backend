import { IsString, IsNumber } from 'class-validator';

export class CreateBurgerDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  imageUrl: string;
}
