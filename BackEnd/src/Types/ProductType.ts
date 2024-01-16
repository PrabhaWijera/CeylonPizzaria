import mongoose, { Document } from 'mongoose';
import { ObjectId } from 'mongoose';

export interface ProductType extends Document {
    name: string;
    category: string;
    image: string;
    price: number;
    description: string;

}