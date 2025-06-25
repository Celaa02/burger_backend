import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Darly', description: 'Nombre del usuario' })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'darlys@gmail.com',
    description: 'Correo electrónico válido',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña mínima de 6 caracteres',
  })
  @MinLength(6)
  password: string;
}
