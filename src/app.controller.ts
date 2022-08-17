import { Body, Controller, Patch, Post, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Usermodeldto } from './dto/usermodel.dto';


@Controller()
export class AppController {
  // constructor(private appService: AppService) {}

  
  // @Get()
  // fetch() {
  //   return this.appService.getuser();
    
  // }
  // @Post()
  // store(@Body() usermodeldto: Usermodeldto) {
  //   return this.appService.createuser(usermodeldto)
  // }

  // @Patch()

  //   update(
  //     @Body() usermodeldto: Usermodeldto){
  //     return this.appService.updateuser(usermodeldto)

  //   }

  //   @Delete()

  //   remove(
  //     @Body() usermodeldto:Usermodeldto){
  //       return this.appService.removeuser(usermodeldto)
  //     }
  }




