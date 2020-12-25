import { IsInt, IsString } from 'class-validator';

export class CreateFilmDto {
  
  @IsString()
  readonly name: string;

  @IsInt()
  readonly author: string;

  @IsString()
  readonly gender: string;

  @IsString()
  readonly title: string;
}