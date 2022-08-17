import { ApiTags } from "@nestjs/swagger"
import {   IsNumber, IsString, Length, Matches} from "class-validator"
@ApiTags('userDTO')
export class Usermodeldto {
  @IsNumber()
  userid: number
  @Matches(new RegExp(/^[a-zA-z0-9\s]+$/))
  username: string
  // @IsEmail()
  @Matches(new RegExp(/^[\w-\.]+@([a-z]+\.)+[a-z]{2,3}$/ ))
  email: string
  @IsString()
  @Length(3,5)
  password: string
}
// export function validation(){
//     const schema=Joi.object({
//         userid:Joi.number(),
//         usename:Joi.string().min(3).max(20).pattern(/[a-zA-Z\s]/),
//         email:Joi.string().email(),
//         password:Joi.string().alphanum().max(8)
//     })
// }








