import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'rehmat.sayani@gmail.com',
    required: true,
  })
  email: string;
  @ApiProperty({
    example: 'jim',
    required: false,
  })
  name: string;
}
