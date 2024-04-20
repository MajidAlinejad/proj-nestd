import { Test, TestingModule } from '@nestjs/testing';
import { MicroResourceController } from './micro-resource.controller';
import { MicroResourceService } from './micro-resource.service';

describe('MicroResourceController', () => {
  let controller: MicroResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MicroResourceController],
      providers: [MicroResourceService],
    }).compile();

    controller = module.get<MicroResourceController>(MicroResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
