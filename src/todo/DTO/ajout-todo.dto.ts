
import { updateTodoDto } from './update-todo.dto';
import { MinLength, MaxLength, IsNotEmpty, IsString,Length,IsOptional } from 'class-validator';


export class addTodoDto  {

        @IsNotEmpty()
        @Length(2, 10)
        name:string;

        @IsNotEmpty()
        @IsString()
        @MinLength(10, {
                // here, $constraint1 will be replaced with "10", and $value with actual supplied value
                message: 'Title is too short. Minimal length is $constraint1 characters, but actual is $value',
              })
        description:string;
}

