import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestModule } from './nest/nest.module';

@Module({
  imports: [NestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
