import { Controller, Get } from '@nestjs/common';
import { MicroserviceRedisService } from './microservice-redis.service';

@Controller()
export class MicroserviceRedisController {
  constructor(private readonly microserviceRedisService: MicroserviceRedisService) {}

  @Get()
  getHello(): string {
    return this.microserviceRedisService.getHello();
  }
}
