import mongoose,{Document} from 'mongoose';
import { ObjectId } from 'mongoose';

export interface UserType extends Document{
firstName:string;
lastName:string;
email:string;
password:string;
conformedPassword?: string | undefined;
image:string;
}