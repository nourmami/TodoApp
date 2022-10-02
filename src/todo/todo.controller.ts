import { Body, Controller, Delete, Get,NotFoundException,Param,Patch, Post, Put } from '@nestjs/common';
import bodyParser from 'body-parser';
import {TodoModel} from './Model/TodoModel' ;
@Controller('todo')
export class TodoController {
    private todos :TodoModel[] = [];

    @Get()
    getTodos(): TodoModel[]{
        return this.todos ;
    }


    @Get("/:id")
    getTodo(@Param('id') id
    ):TodoModel{
        console.log(id);
        return this.findTodoById(id) ;
    }

    //generel method to find a Todo by id
    findTodoById(_id): TodoModel{
        return(this.todos.find(   (todo) => (todo.id === _id)   ))
    }

    @Post()
    AjoutTodo(@Body('name') name:string ,
    @Body('description') description : string
    ):TodoModel[]{
        const _todo = new TodoModel(name,description); 
        this.todos.push(_todo);
        return this.todos;
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id:string){
       let todo = this.findTodoById(id)
       if(todo){
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1);
            return this.todos;
        } else {
            throw new NotFoundException("le todo n'existe pas ");
       }

    }

    @Put('/:id')
    updateTodo(@Param('id') id:string,
    @Body() Newtodo : Partial<TodoModel>
    //@Body('name') name:string ,
    //@Body('description') description : string
    
    ){
       let todo = this.findTodoById(id)
                           //? :s'il y a un newtodo.name retourne le  // : sinon retourne le nom d'origine
       todo.name=Newtodo.name? Newtodo.name : todo.name
       todo.description=Newtodo.description? Newtodo.description : todo.description
       if(todo){
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1,todo);
            return this.todos;
        } else {
            throw new NotFoundException("le todo n'existe pas ");
       }
    }

    }

