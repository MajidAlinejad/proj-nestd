import { Module } from '@nestjs/common';
import { MicroserviceRabitController } from './microservice-rabit.controller';
import { MicroserviceRabitService } from './microservice-rabit.service';
import { PayModule } from './pay/pay.module';

@Module({
  imports: [PayModule],
  controllers: [MicroserviceRabitController],
  providers: [MicroserviceRabitService],
})
export class MicroserviceRabitModule {}
