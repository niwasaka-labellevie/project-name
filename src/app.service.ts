import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'こんにちは！！！！！！！！';
  }

  getPost(): string {
    return 'Hello Post';
  }

  getPut(): string {
    return 'Hello Put';
  }

  getDelete(): string {
    return 'Hello Delete';
  }
}
