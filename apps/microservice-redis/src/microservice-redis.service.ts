import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceRedisService {
  getHello(): string {
    return 'Hello World!';
  }
}
