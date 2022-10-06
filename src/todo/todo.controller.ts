import { Body, Controller, Delete, Get,NotFoundException,Param,Patch, Post, Put } from '@nestjs/common';
import bodyParser from 'body-parser';
import {TodoModel} from './Model/TodoModel' ;
import {AjoutTodoDto} from './DTO/ajout-todo.dto';
import {UpdateTodoDto} from './DTO/update-todo.dto' ;

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
    AjoutTodo(
        @Body() todo : AjoutTodoDto
        //@Body('name') name:string ,
        //@Body('description') description : string
    ):TodoModel[]{
        const {name,description}= todo;
        const newTodo = new TodoModel(name,description); 
        this.todos.push(newTodo);
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
    
    //version1 avant DTO
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

    //version 2 apres DTO

    @Put()
    updateTodo2(
        @Body() updatedTodo : UpdateTodoDto
    
    ){
       const {name,description,id}= updatedTodo;
       let todo = this.findTodoById(id)
                           //? :s'il y a un newtodo.name retourne le  // : sinon retourne le nom d'origine
       todo.name=name
       todo.description=description
       if(todo){
            const todoId = this.todos.indexOf(todo);
            this.todos.splice(todoId, 1,todo);
            return this.todos;
        } else {
            throw new NotFoundException("le todo n'existe pas ");
       }
    }
    }

