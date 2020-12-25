import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISendData } from 'src/interfaces/isend-data';
import { Film, FilmDocument } from 'src/schemas/film.schema';
// import { Cat } from '../../interfaces/cat.interface';
import { CreateFilmDto } from './dto/create-film.dto';

@Injectable()
export class FilmsService {

  constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>) {}

  async create(createFilmDto: CreateFilmDto): Promise<ISendData> {
    const createdCat:FilmDocument = new this.filmModel(createFilmDto);
      return createdCat.save().then(res=>{
      return this.helper(res)
    })
  }
  async update(createCatDto: CreateFilmDto): Promise<ISendData> {

    return this.filmModel.findOneAndUpdate({name:createCatDto.name},{$set: createCatDto}, {useFindAndModify: false})
          .then(res=>{
            return this.helper(res)
      })
    }


  async findAll(): Promise<ISendData> {
    return this.filmModel.find().exec().then(res=>{
      return this.helper(res)

    })
  }
  async findOne(name: string): Promise<ISendData> {
    return this.filmModel.findOne({name}).then(res=>{
      return this.helper(res)

    })
  }

  async delete(name): Promise<ISendData> {
   
    return this.filmModel.findOneAndDelete({name:name}).then(res=>{
      return this.helper(res)
    })
  }

  private helper(data):ISendData{
    if(!!data) {
      return {
          status: true,
          data: data
        } 
    } else {
      return {
        status: false,
        data: null
      } 
    }
  }
}