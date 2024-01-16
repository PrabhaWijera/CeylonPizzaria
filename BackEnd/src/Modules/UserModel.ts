import {Schema, model,Document} from 'mongoose';
import { UserType } from '../Types/UserType';


const UserModule=new Schema<UserType>({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    conformedPassword:{type:String,required:false},
    image:{type:String,required:true},
})

const UserSchemModel=model("User",UserModule);
export default UserSchemModel;