import { Injectable } from '@nestjs/common';
import { EpiRepository } from './repository/epi.repository';
// import * as fs from 'fs';

@Injectable()
export class AppService {
  private repository = new EpiRepository();

  getHello(): string {
    return 'Jesus Saves';
  }

  getEpiById(id:number){

    return this.repository.findById(id);

  }

  getDados() {
    // const dados = fs.readFileSync('./bd/database.json', 'utf8');
    // return JSON.parse(dados);
    return this.repository.findAll();
  }

}