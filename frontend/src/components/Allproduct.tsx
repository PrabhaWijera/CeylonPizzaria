import React from 'react'
import Cardfeture from './Cardfeture'
import FilterProduct from './FilterProduct'
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

interface Props {
  heading: string;
}


const AllProduct: React.FC<Props> = ({ heading }) => {
  const productData = useSelector((state: any) => state.product.productList);

  //filter categorys and get all
  const categoryList: any = [
    ...new Set(productData.map((el: any) => el.category)),
  ];

  console.log(categoryList);
  const [filterby, setFilterBy] = useState<any[]>([]);
  const [dataFilter, setDataFilter] = useState<any[]>([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterProduct = (category: any) => {
    setFilterBy(category)
    const filteredData = productData.filter(
      (el: any) => el.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filteredData];
    });
  };

  const loadingArryFetre = new Array(10).fill(null);

  return (
    <div className="my-5">
      <h2 className="font-bold font-mono  text-2xl text-slate-800 mb-4">
        {heading}🍽️
      </h2>
      {/* cut the element to make compnents */}

      <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ?
          categoryList.map((el: any, index: any) => {
            return (
              <FilterProduct
                key={index}
                category={el}
                isActive={el === filterby}
                onClick={() => {
                  console.log(el + "handleFilterProduct on click");
                  handleFilterProduct(el);

                }}
              />
            );
          })
          :
          <div className="min-h-[150px] flex justify-center item-center">
            <p>⌛⌛⌛⌛</p>
          </div>
        }
      </div>
      {/* display the filter data */}

      <div className="flex flex-wrap  justify-center items-center gap-3 my-4">
        {dataFilter[0] ? dataFilter.map((el: any) => {
          return (
            <Cardfeture
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              category={el.category}
              price={el.price}
            />
          );
        })
          : loadingArryFetre.map((el: any, index: any) => (
            <Cardfeture
              loading="Loading... ⌛⌛⌛"
              key={index}
              name=""
              price={0}
              category=""
              image={""}
              id="" />
          ))



        }
      </div>
    </div>
  )
}

export default AllProduct;