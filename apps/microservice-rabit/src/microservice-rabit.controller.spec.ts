import { Test, TestingModule } from '@nestjs/testing';
import { MicroserviceRabitController } from './microservice-rabit.controller';
import { MicroserviceRabitService } from './microservice-rabit.service';

describe('MicroserviceRabitController', () => {
  let microserviceRabitController: MicroserviceRabitController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroserviceRabitController],
      providers: [MicroserviceRabitService],
    }).compile();

    microserviceRabitController = app.get<MicroserviceRabitController>(MicroserviceRabitController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microserviceRabitController.getHello()).toBe('Hello World!');
    });
  });
});
