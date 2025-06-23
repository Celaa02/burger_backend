import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'darlys0794@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '12345' })
  @MinLength(6)
  password: string;
}
