import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { FilmsService } from './films.service';
import { Film } from '../../interfaces/film.interface';
import { ISendData } from 'src/interfaces/isend-data';


@Controller('api/films')
export class FilmsController {
  constructor(private filmsService: FilmsService) {}

  @Post()
  async create(@Body() createCatDto: CreateFilmDto) {

   return this.filmsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Object> {
    // const sendData:ISendData = {
    //   status:true,
    //   data: await this.filmsService.findAll()
    // }
    return this.filmsService.findAll()
  }

  @Get('name')
  async findOne(name: string): Promise<any> {
    // const sendData:ISendData = {
    //   status: true,
    //   data: await this.filmsService.findOne(name)
    // }
    return this.filmsService.findOne(name)
  }

  @Put()
  async update(@Body() createCatDto: CreateFilmDto): Promise<any> {
    return this.filmsService.update(createCatDto);
  }

  @Delete(':name')
  async delete(@Param('name') name): Promise<ISendData> {
    return this.filmsService.delete(name);
      
    
  }
}