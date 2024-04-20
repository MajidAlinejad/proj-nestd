import { Controller, Get } from '@nestjs/common';
import { MicroserviceRabitService } from './microservice-rabit.service';

@Controller()
export class MicroserviceRabitController {
  constructor(private readonly microserviceRabitService: MicroserviceRabitService) {}

  @Get()
  getHello(): string {
    return this.microserviceRabitService.getHello();
  }
}
