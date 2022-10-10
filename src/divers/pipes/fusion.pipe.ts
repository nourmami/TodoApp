import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FusionPipe implements PipeTransform {
  transform(divers: {skills:string[]}, metadata: ArgumentMetadata) {

    //console.log(metadata);
    if (metadata.type==='body'){
      if (divers.skills.length === 0){          
        return(divers.skills.map((element)=>element.toUpperCase()).join('-'));
      } else {
        throw BadRequestException ;
      }
    }
  }
}
