import { MinLength, MaxLength, IsNotEmpty, IsString,Length,IsOptional,IsIn } from 'class-validator';
import {TodoStatusEnum} from '../Model/TodoModel' ;
export class updateTodoDto {

        @IsOptional()
        id:string;

        @IsOptional()
        @Length(2, 10)
        name:string;

        @IsOptional()
        @IsString()
        @MinLength(10, {
                // here, $constraint1 will be replaced with "10", and $value with actual supplied value
                message: 'description is too short. Minimal length is $constraint1 characters, but actual is $value',
              })
        description:string;

        @IsOptional()
        @IsIn(['en cours','en attente','finalisé'])
        statut:TodoStatusEnum;
   
    
}
