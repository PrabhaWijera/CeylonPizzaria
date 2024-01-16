import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AllProduct from '../components/Allproduct';
import { useDispatch } from 'react-redux';
import { addCartItems } from '../redux/produtSlice';
 


const Menu = () => {

    // filter by item and create pages for item get page end address
    const { filterby } = useParams();

    const navigate= useNavigate();

    //dispatch
    const dispatch = useDispatch();

    const productData = useSelector((state: any) => state.product.productList)
    console.log(productData)

    //display filter product
    const productDisplay = productData.filter((el: any) => el._id === filterby)[0]
    console.log(productDisplay);


    const handleAddCartProduct = (e: any) => {
        // e.stopPropagation();

        // payload data
        dispatch(addCartItems(productDisplay))

    }
    const handleBuy = () => {
        console.log("buy")
        dispatch(addCartItems(productDisplay))
        navigate("/cart")
    }

    return (
        <div className=" p-3 md:p-12 ">
            <div className="w-full max-w-4xl bg-white  m-auto md:flex">
                <div className="max-w-sm   overflow-hidden w-full p-5" >
                    <img src={productDisplay.image} alt="" className="hover:scale-90 transition-all h-full" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-slate-500 capitalize text-2xl md:4xl font-mono">{productDisplay.name}</h3>
                    <p className="font-medium text-slate-300 text-2xl font-mono">{productDisplay.category}</p>
                    <p className="font-bold md:text2xl"> <span className="text-red-500 font-mono">  Rs: </span><span>{productDisplay.price}.00</span></p>
                    <div className="flex gap-4">
                        <button className="bg-yellow-400  rounded-lg    my-2 hover:bg-orange-500 font-mono min-w-[100px] "
                        
                        onClick={handleBuy}
                    >Buy 💵</button>
                        <button onClick={handleAddCartProduct} className="bg-yellow-400  rounded-lg   my-2 hover:bg-orange-500 font-mono py-1 min-w-[100px]  ">Add Cart🛒</button>
                    </div>
                    <div className="flex">
                        <p className="text-slate-600 font-medium">Description :</p>
                        <p>{productDisplay.description}</p>
                    </div>
                </div>
            </div>
            <AllProduct heading={"Related Product"} />
           
        </div>
    )
}
export default Menu;