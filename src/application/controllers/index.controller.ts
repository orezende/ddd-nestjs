import { Controller, Get } from '@nestjs/common';

@Controller()
export class IndexController {
  @Get('/')
  get(): string {
    return 'Hello World';
  }
}
