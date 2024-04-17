import { Injectable } from '@nestjs/common';
import { CreateNestDto } from './dto/create-nest.dto';
import { UpdateNestDto } from './dto/update-nest.dto';

@Injectable()
export class NestService {
  create(createNestDto: CreateNestDto) {
    console.log(createNestDto);
    return 'This action adds a new nest';
  }

  findAll() {
    return `This action returns all nests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nest`;
  }

  update(id: number, updateNestDto: UpdateNestDto) {
    console.log(updateNestDto);
    return `This action updates a #${id} nest`;
  }

  remove(id: number) {
    return `This action removes a #${id} nest`;
  }
}
