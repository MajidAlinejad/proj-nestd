import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(public prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        name: createUserDto.name,
      },
    });
    // return 'This action adds a new user';
  }

  async findAll() {
    return this.prisma.user.findMany();
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
