import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://0.0.0.0:27017/nest"),
    forwardRef(() => UserModule),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {
}


