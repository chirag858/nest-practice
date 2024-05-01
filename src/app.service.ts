import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log("hello world testing area");
    return 'Hello World!';
  }
}
