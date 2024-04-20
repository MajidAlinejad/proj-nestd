import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroserviceRabitService {
  getHello(): string {
    return 'Hello World!';
  }
}
