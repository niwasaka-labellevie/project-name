import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getPost(): string {
    return this.appService.getPost();
  }

  @Put()
  getPut(): string {
    return this.appService.getPut();
  }

  @Delete()
  getDelete(): string {
    return this.appService.getDelete();
  }
}
