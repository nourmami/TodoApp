import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, CreateDateColumn } from 'typeorm';
import { ReUtilisable } from './re-utilisable';

@Entity('todDB')
export class Todo extends ReUtilisable {
    
    
    
        @PrimaryGeneratedColumn()
        id : string ;
        @Column()
        name : string ;

        @Column()
        description : string ;


        @Column()
        statut: TodoStatusEnum;

        
    
        
}

export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
    }