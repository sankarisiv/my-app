import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Usermodeldto } from 'src/dto/usermodel.dto';
import { user, } from 'src/user/schema.user'

@Injectable()

export class UserService {
    constructor(@InjectModel('user') private usermodel: Model<user>) { }

   async createuser(usermodeldto: Usermodeldto) {
        
            const userdata = new this.usermodel();
            userdata.userid = usermodeldto.userid
            userdata.username = usermodeldto.username;
            userdata.email = usermodeldto.email;
            userdata.password = usermodeldto.password;
            const result1 = await userdata.save();
            // console.log("data created", result1);
            return result1;
            // return result.value
        }
    

    async updateuser(usermodeldto: Usermodeldto) {
        let filter = { "userid": usermodeldto.userid }
        let update = { "username": usermodeldto.username, "email": usermodeldto.email }
        const data1 = await this.usermodel.findOneAndUpdate(filter, update);

        return (data1)
    }

    async removeuser(userid:number,usermodeldto: Usermodeldto) {
        const data2 = this.usermodel.findOneAndDelete({userid},usermodeldto)
        // console.log("data deleted successfully")
        // const data1 = this.usermodel.findOneAndDelete(remove)
        // console.log(data2)
        return(data2)
    }

    findEmail(email: string) {
        // console.log(email)
        return this.usermodel.findOne({ email })
    }

    async getuser() {
        let fetch = { "userid": 1, "username": 1, "email": 1, "password": 1 }
        const data3 = this.usermodel.find({}, fetch);
        return data3

    }
}







