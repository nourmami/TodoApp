import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ReUtilisable } from './re-utilisable';


export enum TodoStatusEnum {
        'actif' = "En cours",
        'waiting' = "En attente",
        'done' = "Finalisé"
        }
@Entity('todo')
export class Todo extends ReUtilisable {
        @PrimaryGeneratedColumn()
        id : number ;

        @Column()
        name : string ;

        @Column()
        description : string ;

        @Column({ type: 'enum', enum: TodoStatusEnum , default: TodoStatusEnum.actif})
        statut: TodoStatusEnum ;


        
    
        
}

