import { Body, Controller, Post } from '@nestjs/common';
import {diversDTO} from './DTO/divers-dto';
import { FusionPipe } from './pipes/fusion.pipe';

@Controller('divers')
export class DiversController {



@Post('skills')
postSkill(@Body(FusionPipe) divers  ){
return(divers)
    
}
}
