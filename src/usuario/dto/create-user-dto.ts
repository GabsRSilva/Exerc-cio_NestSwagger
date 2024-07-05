/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'E-mail' })
  email: string;

  @ApiProperty({ description: 'Senha' })
  password: string;
}