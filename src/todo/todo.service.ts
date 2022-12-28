import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { addTodoDto } from './DTO/ajout-todo.dto';
import { updateTodoDto } from './DTO/update-todo.dto';
import { TodoModel } from './Model/TodoModel';
import {Todo} from './entities/Todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {

     constructor(
        @InjectRepository(Todo)
        private  todoRepo: Repository<Todo>,
        ) {}


     async getTodos() : Promise<Todo[]> {
        return await this.todoRepo.find();
     }

    async findTodoById(id:number) {
        const todo = await this.todoRepo.findOne({where : { id : id}});
        if (!todo) {
            throw new NotFoundException(`Todo #${id} not found`);
        }
        return todo;
    }

    async addTodo(todo:addTodoDto): Promise<Todo> {
        return await this.todoRepo.save(todo);
    }

    
    async updateTodo(id:number,newTodo:updateTodoDto): Promise<Todo>{
            const newEntity = await this.todoRepo.preload({id, ...newTodo});
            if (!newEntity) {
                throw new NotFoundException(`Todo #${id} not found`);
            }
            return await this.todoRepo.save(newEntity);
           
    }


    updateTodo2(updateCriteria, newTodo:updateTodoDto) {
        return  this.todoRepo.update(updateCriteria, newTodo);
    }


    async removeTodo(id:number){
        const todotoRemove = await this.findTodoById(id);
        // remove prend en parametre l'entité à supprimer ou un tableau d'entité
        return await this.todoRepo.remove(todotoRemove);
    }


    async deleteTodo(id:number){
        //delete prend en parametres condition et un tableau de valeurs
        return await this.todoRepo.delete(id);
    }


    async softRemoveTodo(id: number){
        const todotoRemove = await this.findTodoById(id);
        return this.todoRepo.remove(todotoRemove);
    }

    async softDeleteTodo (id: number){
        return await this.todoRepo.softDelete(id);
    }


    async restoreTodo (id: number){
        return await this.todoRepo.restore(id);
    }

    
    async todoNumberByName() {
        // Créer un queryBuilder
        const qb = this.todoRepo.createQueryBuilder("Todo");
        // Chercher le nombre de Todo par statut 
          qb.select("Todo.statut, count(Todo.id) as nombreDeTodo")
          .groupBy("Todo.statut");
          console.log(qb.getSql());
          return await qb.getRawMany();
      }


    }
   


