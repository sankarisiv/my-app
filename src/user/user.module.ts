import {  Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { userschema } from './schema.user';

// export function active(req,res,next:NextFunction){
//     console.log("req sent...")
//     next()
// }

// } else {
//   res.status(HttpStatus.BAD_REQUEST).json({
//     message: "data incorrect.."
//   })
//   return ("data incorrect")

// }

//  if(req.body.username==Joi.string().required().pattern(/^[a-zA-Z0-9\s]+$/)){
//   console.log("data correct")
//   next()
//   }else{
//     console.log("username incorrect");
//     res.status(HttpStatus.BAD_REQUEST).json({
//        message:"data incorrect.."
//     })
//   }
// }

@Module({
  providers: [UserService],
  imports: [MongooseModule.forFeature([{ name: 'user', schema: userschema }]),],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //   .apply(validation)
  //   .exclude()
  //   .forRoutes('data')
  // }

}

