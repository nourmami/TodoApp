import { Body, Controller, Delete, Get,NotFoundException,Param,ParseIntPipe,Patch, Post, Put,ValidationPipe } from '@nestjs/common';
import bodyParser from 'body-parser';
import {TodoModel} from './Model/TodoModel' ;
import {addTodoDto} from './DTO/ajout-todo.dto';
import {updateTodoDto} from './DTO/update-todo.dto' ;
import { TodoService } from './todo.service';
import {Todo} from './entities/Todo.entity';


@Controller('todo')
export class TodoController {

    constructor( private todoService:TodoService){}

    @Get()
    async getTodos(): Promise<Todo[]>{
        //return todos :TodoModel[] = this.todoService.getTodos; (doesn't work ?)
        return await this.todoService.getTodos() ;
    }

    /*@Get("/:id")
    getTodo(@Param('id') id
    ):TodoModel{
        return this.todoService.findTodoById(id) ;
    }*/

    @Post()
    async addTodo(
        @Body() todo : addTodoDto
        ):Promise<Todo>{
        return await this.todoService.addTodo(todo);
        }

    @Put(':id')
    updateTodo(
        @Body() updatedTodo: updateTodoDto,
        @Param('id',ParseIntPipe) id: number
        ): Promise<Todo> {
            return this.todoService.updateTodo(id, updatedTodo);
       }
    
    @Patch()
    updateTodo2(@Body() updatedObject){
        const {updateCriteria, updatedTodo} = updatedObject;
        return this.todoService.updateTodo2(updateCriteria, updatedTodo);
      }
    
    @Delete('/remove/:id')
    removeTodo(@Param('id',ParseIntPipe) id:number){
        return this.todoService.removeTodo(id);
    }

    @Delete('/:id')
    async deleteTodo(@Param('id',ParseIntPipe) id:number){
       return(this.todoService.deleteTodo(id))
    }
    @Delete('/softDelete/:id')
    async softDeleteTodo(@Param('id',ParseIntPipe) id:number){
       return(this.todoService.softDeleteTodo(id))
    }
    @Get('/recover/:id')
    async recoverTodo(@Param('id',ParseIntPipe) id:number){
        return await this.todoService.restoreTodo(id);
    }

     // Chercher le nombre de cv par age
    @Get('stats')
    async statsCvNumberByAge() {
     return await this.todoService.todoNumberByName();
    }
   
    



    

}