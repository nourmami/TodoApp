import { Injectable, NotFoundException } from '@nestjs/common';
import { addTodoDto } from './DTO/ajout-todo.dto';
import { updateTodoDto } from './DTO/update-todo.dto';
import { TodoModel } from './Model/TodoModel';

@Injectable()
export class TodoService {
     todos : TodoModel[] = [] ;

     getTodos() : TodoModel[] {
        return this.todos ;
     }

      //generel method to find a Todo by id
    findTodoById(_id): TodoModel {
        return(this.todos.find(   (todo) => (todo.id === _id)   ))
    }

    addTodo(todo:addTodoDto) : TodoModel[] {
        const {name,description}= todo;
        const newTodo = new TodoModel(name,description); 
        this.todos.push(newTodo);
        return this.todos ;
    }

    deleteTodo(id){
            let todo = this.findTodoById(id)
            if(todo){
                 const todoId = this.todos.indexOf(todo);
                 this.todos.splice(todoId, 1);
                 return this.todos;
             } else {
                 throw new NotFoundException("le todo n'existe pas ");
            }
     
         }

    updateTodo(newTodo:updateTodoDto){
            const {name,description,id,statut}= newTodo;
            let todo = this.findTodoById(id)
            
            if(todo){
                todo.name=name
                todo.description=description
                todo.statut = statut
                const todoId = this.todos.indexOf(todo);
                this.todos.splice(todoId, 1,todo);
            return this.todos;
            } else {
                throw new NotFoundException("le todo n'existe pas ");
       }
    }



    }
   


