import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import {deleteCartItem } from '../redux/produtSlice';
import {increaseQty, decreaseQty} from '../redux/produtSlice';
import toast from 'react-hot-toast';



interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
  qty: number;
  total: number;

}

const CartProduct: React.FC<Props> = ({ id, name, image, price, category, qty, total }) => {

const dispatch = useDispatch();
 



  return (
    <div className="bg-orange-100 p-2 flex gap-4 py-6 rounded drop-shadow border-2 border-black">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} alt="" className="h-28 w-40 object-cover " />
      </div>
      
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between">

        
        <h3 className="font-medium text-slate-500 capitalize text-lg md:text-xl font-mono">{name}</h3>
       <div className="cursor-pointer hover:text-red-700"  onClick={()=>dispatch(deleteCartItem(id))}>
       <ImBin />
       </div>
       </div>
        <p className="font-medium text-slate-500  font-mono">{category}</p>
        <p className="font-bold  text-base"> <span className="text-red-500 font-mono">  Rs: </span><span>{price}.00</span></p>

        {/* total */}
        <div className="flex justify-between">

          <div className="flex gap-4 items-center">
            <button className=" bg-slate-400  rounded-lg    my-2 hover:bg-green-500 font-mono text-2xl p-1" onClick={()=>dispatch(increaseQty(id))}>
              <AiOutlinePlus />
            </button>
            <p className="font-semibold p-1">🍔 {qty}</p>
            <button className="bg-slate-400  rounded-lg   my-2 hover:bg-red-500 font-mono py-1 text-2xl p-1" onClick={()=>dispatch(decreaseQty(id))}>
              <FaMinus />
            </button>
          </div>
          <div className="flex items-center gap-3 font-mono">
            <p>💵 Total :Rs</p>
            <p>{total}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartProduct