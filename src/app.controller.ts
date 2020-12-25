
  import { Get, Controller, Res,Req,Next, Render } from '@nestjs/common';
  import { Response, NextFunction, Request  } from 'express';
  import { AppService } from './app.service';

  @Controller()
  export class AppController {
    constructor(private appService: AppService) {}
    @Get()
    @Render('index.hbs')
    root() {
      return { titleFirst: 'Films',titleSecond:'Music' };
    }

  

}
