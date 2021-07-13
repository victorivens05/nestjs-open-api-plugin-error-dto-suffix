import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleDto } from './example.dto';
import { ExampleRo } from './example.ro';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postExample(@Body() body: ExampleDto) {
    console.log({ body });
    return {
      id: 1,
      name: 'example name',
    } as ExampleRo;
  }
}
