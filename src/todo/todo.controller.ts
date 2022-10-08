import { Body, Controller, Delete, Get,NotFoundException,Param,Patch, Post, Put,ValidationPipe } from '@nestjs/common';
import bodyParser from 'body-parser';
import {TodoModel} from './Model/TodoModel' ;
import {addTodoDto} from './DTO/ajout-todo.dto';
import {updateTodoDto} from './DTO/update-todo.dto' ;
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor( private todoService:TodoService){}


    @Get()
    getTodos(): TodoModel[]{
        //return todos :TodoModel[] = this.todoService.getTodos; (doesn't work ?)
        return this.todoService.todos ;
    }


    @Get("/:id")
    getTodo(@Param('id') id
    ):TodoModel{
        return this.todoService.findTodoById(id) ;
    }

    @Post()
    addTodo(
        @Body(ValidationPipe) todo : addTodoDto
    ):TodoModel[]{
        return this.todoService.addTodo(todo);
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id:string){
       return(this.todoService.deleteTodo(id))

    }
    

    @Put()
    updateTodo(
        @Body(ValidationPipe) updatedTodo : updateTodoDto
    ){
       return(this.todoService.updateTodo(updatedTodo))
    }

}