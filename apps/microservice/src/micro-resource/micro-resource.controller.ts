import { Controller } from '@nestjs/common';
import { MicroResourceService } from './micro-resource.service';

@Controller()
export class MicroResourceController {
  constructor(private readonly microResourceService: MicroResourceService) {}
}
