import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addTodoDto } from './DTO/ajout-todo.dto';
import { updateTodoDto } from './DTO/update-todo.dto';
import { TodoModel } from './Model/TodoModel';
import {Todo} from '.././entities/Todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
     todos : TodoModel[] = [] ;

     constructor(
        @InjectRepository(Todo)
        private readonly repoTodo: Repository<Todo>,
        ) {}


     getTodos() : TodoModel[] {
        return this.todos ;
     }

      //generel method to find a Todo by id
    findTodoById(_id): TodoModel {
        return(this.todos.find(   (todo) => (todo.id === _id)   ))
    }

    async addTodo(todo:addTodoDto)  {
        const {name,description}= todo;
        const newTodo = new TodoModel(name,description); 
        this.todos.push(newTodo);
        return await this.repoTodo.save(newTodo);
    }

    async deleteTodo(id){
            let todo = this.findTodoById(id)
            if(todo){
                 const todoId = this.todos.indexOf(todo);
                 this.todos.splice(todoId, 1);
                 return await this.repoTodo.softDelete(id);
             } else {
                 throw new NotFoundException("le todo n'existe pas ");
            }
     
         }

    async updateTodo(newTodo:updateTodoDto){
            const {name,description,id,statut}= newTodo;
            let todo = this.findTodoById(id)
            
            if(todo){
                todo.name=name
                todo.description=description
                todo.statut = statut
                const todoId = this.todos.indexOf(todo);
                this.todos.splice(todoId, 1,todo);
            const newEntity = await this.repoTodo.preload({id, name, description});
            return await this.repoTodo.save({id,newEntity});
            } else {
                throw new NotFoundException("le todo n'existe pas ");
       }
    }



    }
   


