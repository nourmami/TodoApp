import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // creer une app nest a laide de NestFactory a partir du module AppModule
  

  app.useGlobalPipes(new ValidationPipe({
    transform : true ,
    whitelist : true ,
    forbidNonWhitelisted : true
  })); 
  
  await app.listen(3000);}

bootstrap();
//appel de la fonction asynchrone