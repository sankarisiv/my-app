
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// export interface IUsedata {
//   userid: number;
//   username: string;
//   email: string;
//   password: string
// }


@Schema()
export class user{
  @Prop()
  userid: number;

  @Prop()
  username: string;

  @Prop({required:true})
  email: string;

  @Prop({required:true} )
  password: string;

}
export const userschema = SchemaFactory.createForClass(user);

//  export const Userdata = (data: IUsedata)=>{
//   const schema =new mongoose.Schema({
//     userid: Joi.number(),
//     username: Joi.string().min(5).max(8).pattern(/[a-zA-Z0-9/s]/),
//     email: Joi.string().email(),
//     password: Joi.string()
//   })
// return Joi.valid(data,schema)
// }
// module.exports=mongoose.model("user",userschema);
// console.log(regex)
// export const userschema1=new mongoose.Schema({
//       userid: Joi.number().min(5),
//       username:Joi.string().alphanum().min(3).max(20).pattern(/^[a-zA-Z\s]+$/),
//       email:Joi.string().email(),
//       password:Joi.string().min(5).max(8)
// })
// export const user1 = mongoose.model("user",userschema)