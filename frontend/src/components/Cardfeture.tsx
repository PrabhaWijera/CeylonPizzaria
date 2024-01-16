import React from 'react';
import { Link } from 'react-router-dom';
import { addCartItems } from '../redux/produtSlice';
import { useDispatch } from 'react-redux';



interface CardProps {
    id: string;
    name: string;
    image: string;
    category: string;
    price: number;
    loading?: string;

}



const Cardfeture: React.FC<CardProps> = ({ id, image, name, price, category, loading }) => {

    const dispatch = useDispatch();

    // go to cart- stop go to menu view
    const handleAddCartProduct = (e: any) => {
        // e.stopPropagation();

        // payload data
        dispatch(addCartItems({
            _id : id,
            name: name,
            image: image,
            price: price,
            category: category,

        }))
        
    }


    return (
        <div className="w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg  drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">

            {
                image ? <>
                    {/* animation to when click on card auto go on page top */}
                    <Link to={`/menu/${id}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>


                        <div className="h-14 flex flex-col justify-center items-center">
                            <img src={image} alt="" className="h-full" />
                        </div>
                        <h3 className="font-medium text-slate-500   capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">{name}</h3>
                        <p className="font-medium text-slate-300  ">{category}</p>
                        <p className="  font-bold text-sm"> <span className="text-red-500">  Rs: </span><span>{price}.00</span></p>
                    </Link>
                    <button className="bg-yellow-400  rounded-lg  py-1 my-2 hover:bg-orange-500 font-mono w-full"
                        onClick={handleAddCartProduct}

                    >Add Cart</button>

                </>

                    :
                    <div className="min-h-[150px] flex justify-center items-center">
                        <p>
                            {loading}
                        </p>
                    </div>
            }


        </div>

    );
};

export default Cardfeture;