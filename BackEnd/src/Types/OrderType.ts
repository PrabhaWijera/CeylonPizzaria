import mangoose, {Document} from 'mongoose';

import { ObjectId } from 'mongoose';

export interface ProductCartItem extends Document{
    name: string;
    category: string;
    image: string;
    price: number;
    
    qty: number;
}

export interface OrderType extends Document {
    totalQty: number;
    totalPrice: number;
    productCartItem: ProductCartItem[];
}




