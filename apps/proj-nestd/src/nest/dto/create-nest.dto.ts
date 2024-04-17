import { ApiProperty } from '@nestjs/swagger';
import { NestInterface } from '../interface/nest.Interface';
export class CreateNestDto implements NestInterface {
  @ApiProperty({
    example: 'rehmat.sayani@gmail.com',
    required: true,
  })
  name: string;
  @ApiProperty({
    example: 19,
    required: false,
  })
  age: number;
}
