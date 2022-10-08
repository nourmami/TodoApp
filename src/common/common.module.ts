import { Global, Module } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
 
@Global()
@Module({
   // providers : uuidv4, 
})
export class CommonModule {
}
