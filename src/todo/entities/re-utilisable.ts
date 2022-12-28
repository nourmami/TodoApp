
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, CreateDateColumn } from 'typeorm';


export class ReUtilisable {


        @CreateDateColumn(
               { update : false,} 
        )
        createdAt : Date;



        @UpdateDateColumn()
        updatedAt:Date ;

        @DeleteDateColumn()
        deletedAt: Date ;
}

//how can we make createdAT should not be modified?




