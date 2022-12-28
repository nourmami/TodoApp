
import { updateTodoDto } from './update-todo.dto';
import { MinLength, MaxLength, IsNotEmpty, IsString,Length,IsOptional, IsIn } from 'class-validator';
import {TodoStatusEnum} from '../Model/TodoModel' ;


export class addTodoDto  {

        @IsNotEmpty()
        @Length(3, 10)
        name:string;

        @IsNotEmpty()
        @IsString()
        @MinLength(10, {
                message: 'Description is too short. Minimal length is $constraint1 characters, but actual is $value',
        })
        description:string;

        @IsIn(['en cours','en attente','finalisé'])
        statut:TodoStatusEnum;
}


