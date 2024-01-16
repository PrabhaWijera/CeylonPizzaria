import {Schema, model,Document} from 'mongoose';
import { ProductType } from '../Types/ProductType';


const ProductModule=new Schema<ProductType>({
    name:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
})

const productModel=model("Product",ProductModule);
export default productModel;