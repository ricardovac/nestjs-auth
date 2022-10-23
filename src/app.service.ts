import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findByEmail(arg0: string): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
