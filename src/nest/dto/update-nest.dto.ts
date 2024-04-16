import { PartialType } from '@nestjs/mapped-types';
import { CreateNestDto } from './create-nest.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateNestDto extends PartialType(CreateNestDto) {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  phone: number;
}
