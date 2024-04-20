import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceRedisController } from './microservice-redis.controller';
import { MicroserviceRedisService } from './microservice-redis.service';

describe('MicroserviceRedisController', () => {
  let microserviceRedisController: MicroserviceRedisController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceRedisController],
      providers: [MicroserviceRedisService],
    }).compile();

    microserviceRedisController = app.get<MicroserviceRedisController>(MicroserviceRedisController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceRedisController.getHello()).toBe('Hello World!');
    });
  });
});
