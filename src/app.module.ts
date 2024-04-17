import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestModule } from './nest/nest.module';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [NestModule, UserModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [PrismaService, AppService],
})
export class AppModule {}
