import { NestFactory } from '@nestjs/core';
import { MicroserviceModule } from './microservice.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(MicroserviceModule);
  const config = new DocumentBuilder()
    .setTitle('Nest Api')
    .setDescription('The Nest API description')
    .setVersion('1.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(9002);
}
bootstrap();
