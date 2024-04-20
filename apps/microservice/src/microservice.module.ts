import { Module } from '@nestjs/common';
import { MicroserviceController } from './microservice.controller';
import { MicroserviceService } from './microservice.service';
import { MicroResourceModule } from './micro-resource/micro-resource.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [MicroResourceModule, PostsModule],
  controllers: [MicroserviceController],
  providers: [MicroserviceService],
})
export class MicroserviceModule {}
