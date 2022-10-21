
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, CreateDateColumn } from 'typeorm';


export class ReUtilisable {


        @CreateDateColumn()
        createdAt : Date;

        @UpdateDateColumn()
        updatedAt:Date ;

        @DeleteDateColumn()
        deletedAt: Date ;
}
