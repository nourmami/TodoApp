import { Controller, Delete, Get,Patch, Post, Put } from '@nestjs/common';
import {TodoModel} from './Model/TodoModel' ;
@Controller('todo')
export class TodoController {
    private todos :TodoModel[] = [];

    @Get()
    getTodos(): TodoModel[]{
        return this.todos ;
    }

    //generel method to find a Todo by id
    @Get('id')
    getTodoId(_id): TodoModel{
        return(this.todos.find(   (todo) => (todo.id === _id)   ))
    }

    @Post()
    AjoutTodo(_todo):TodoModel[]{
        this.todos.push(_todo);
        return this.todos;
    }

    @Delete()
    deleteTodo(id){
       let todo = this.getTodoId(id)
       if(todo){
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1);
            return this.todos;
        } else {
            return 'not found';
       }

    }

    @Put()
    updateTodo(id,newTodo){
       let todo = this.getTodoId(id)
       if(todo){
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1,newTodo);
            return this.todos;
        } else {
            return 'not found';
       }
    }

    }

