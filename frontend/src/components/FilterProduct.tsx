import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import '../FilterBg.css'


interface Props{
    category:string;
    isActive?:boolean;
    onClick : React.MouseEventHandler<HTMLDivElement>;
}



const FilterProduct:React.FC<Props> = ({category,onClick,isActive}) => {
    return (
        <div onClick={onClick}>
            <div>
                <div className={`text-4xl p-5 filter-box rounded cursor-pointer ${isActive && "bg-orange-400 text-white"}`}>
                    <IoFastFoodOutline />
                </div>
                <p className="text-center font-mono my-1 capitalize">{category}</p>
            </div>
        </div>
    )
}

export default FilterProduct;