import { Module } from '@nestjs/common';
import { MicroserviceRedisController } from './microservice-redis.controller';
import { MicroserviceRedisService } from './microservice-redis.service';

@Module({
  imports: [],
  controllers: [MicroserviceRedisController],
  providers: [MicroserviceRedisService],
})
export class MicroserviceRedisModule {}
