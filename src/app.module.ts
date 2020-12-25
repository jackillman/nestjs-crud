import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { FilmsModule } from './api/films/films.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FilmsModule,MongooseModule.forRoot('mongodb://jack:1234@localhost:27017/mydb')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
