import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMError } from 'typeorm';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {Todo} from './entities/Todo.entity';



@Module({
  controllers: [TodoController],
  providers: [TodoService],
  imports: [ TypeOrmModule.forFeature([Todo])],
})
export class TodoModule {}
