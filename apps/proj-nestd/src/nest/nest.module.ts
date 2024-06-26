import { Module } from '@nestjs/common';
import { NestController } from './nest.controller';
import { NestService } from './nest.service';

@Module({
  imports: [],
  controllers: [NestController],
  providers: [NestService],
  exports: [NestModule],
})
export class NestModule {}
