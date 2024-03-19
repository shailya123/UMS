import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';


@Controller()
export class AppController {
  constructor(
    
  ) {}

  @Get('demo')
  demo(){
    return 'hello'
  }
}
