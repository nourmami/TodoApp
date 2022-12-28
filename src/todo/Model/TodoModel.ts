import { v4 as uuidv4 } from 'uuid';

export enum TodoStatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
    }


export class TodoModel {
    id : string ;
    name : string ;
    description : string ;
    date : Date;
    statut: TodoStatusEnum;

    constructor(_name: string , _description : string){
        this.statut = TodoStatusEnum.waiting;
        // this.id = uuidv4();
        this.description = _description;
        this.name = _name ;
        this.date= new Date();
    }



}