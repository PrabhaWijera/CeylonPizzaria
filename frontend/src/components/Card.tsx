import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
    name: string;
    image: string;
    category: string;
    price: number;
    loading?: string;
    id:string;
}



const Card: React.FC<CardProps> = ({ name, image, category, price,loading ,id}) => {
    return (
        <div className="bg-white p-2 rounded drop-shadow-lg min-w-[150px]:">
            {
                name ? (
                    <>
                     <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:0 ,behavior: "smooth"})}>

                        <div className="w-40 min-h-[150px]">
                            <img src={image} alt="" className="h-full  w-full rounded drop-shadow" />
                        </div>
                        <h3 className="font-medium text-slate-500 text-center capitalize">{name}</h3>
                        <p className="font-medium text-slate-300 text-center">{category}</p>
                        <p className="text-center font-bold text-sm"> <span className="text-red-500">  Rs: </span><span>{price}.00</span></p>
                   </Link>
                    </>
                ):
                <div className="flex justify-center items-center h-full">
                   <p>{loading}</p>
                </div>
            }
        </div>
    )
}

export default Card;