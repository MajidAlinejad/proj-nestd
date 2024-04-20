import { Module } from '@nestjs/common';
import { MicroResourceService } from './micro-resource.service';
import { MicroResourceController } from './micro-resource.controller';

@Module({
  controllers: [MicroResourceController],
  providers: [MicroResourceService],
})
export class MicroResourceModule {}
