import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usermodeldto } from './dto/usermodel.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! my first nest';
  }
 
}


