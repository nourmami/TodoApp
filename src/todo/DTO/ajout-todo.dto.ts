import { OmitType } from '@nestjs/mapped-types' ;
import { UpdateTodoDto } from './update-todo.dto';
export class AjoutTodoDto extends OmitType(UpdateTodoDto, ['id']) {

        //name: string;
        //description: string;
}

