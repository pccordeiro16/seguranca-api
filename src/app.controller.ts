import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dados')
  getDados() {
    return this.appService.getDados()
  }

  @Get('epi/:id')
  getEpi(@Param('id') id:string){
    return this.appService.getEpiById(Number(id));
  }
}