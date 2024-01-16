import { Schema, model, Document } from 'mongoose';
import { OrderType } from '../Types/OrderType';

const OrderSchema = new Schema<OrderType>({
    totalQty: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    productCartItem: [{
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
       
        qty: {
            type: Number,
            required: true
        }
    }]
});

const OrderModelSchema = model<OrderType>("Order", OrderSchema);
export default OrderModelSchema;
