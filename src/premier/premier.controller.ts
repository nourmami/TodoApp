import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {


 @Get()
get() {
    console.log('la methode Get')
    return('Get method')
    }


@Post()
Post() {
    console.log('la methode Post')
    return('Post method')
    }


@Delete()
Delete() {
    console.log('la methode Delete')
    return('Delete method')
    }


 @Put()
Put() {
    console.log('la methode Put')
    return('Put method')
    }
@Patch()
Patch() {
        console.log('la methode Patch')
        return('Patch method')
        }

}


