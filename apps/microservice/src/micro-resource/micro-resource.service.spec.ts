import { Test, TestingModule } from '@nestjs/testing';
import { MicroResourceService } from './micro-resource.service';

describe('MicroResourceService', () => {
  let service: MicroResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MicroResourceService],
    }).compile();

    service = module.get<MicroResourceService>(MicroResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
