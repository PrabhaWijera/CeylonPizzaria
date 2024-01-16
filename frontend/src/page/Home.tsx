import React, { useEffect, useRef, useState } from "react";
import Bike from "../assets/bike.png";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import "../FilterBg.css";
import YellowB from "../assets/yrt.png";
import Cardfeture from "../components/Cardfeture";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import FilterProduct from "../components/FilterProduct";
import AllProduct from "../components/Allproduct";
import { toast } from "react-hot-toast";
// // npm scroll bar
// npm i tailwind-scrollbar

const Home = () => {
  //  this data get from card arguments and return to Card components
  const productData = useSelector((state: any) => state.product.productList);
  console.log(productData);
  const homeProductCartList = productData.slice(5, 10);
  // home scroll bar pizza and items
  const homeProductCartListPizzas = productData.filter(
    (el: any) => el.category === "rice" || "pizza",
    []
  );
  console.log(homeProductCartListPizzas);

  // load home product pizza to arry
  const loadingArry = new Array(3).fill(null);
  // scrolling bar
  const loadingArryFetre = new Array(10).fill(null);

  // scroll button get product by product
  // const slideProductRef= useRef(null)-> target to scrooll items
  const slideProductRef = useRef<HTMLDivElement | null>(null);
  const nextProduct = () => {
    // Use the non-null assertion (!) to tell TypeScript that slideProductRef.current is not null
    slideProductRef.current!.scrollLeft += 200;
  };

  // call back function for scroll button
  const prevProduct = () => {
    // Use the non-null assertion (!) to tell TypeScript that slideProductRef.current is not null
    slideProductRef.current!.scrollLeft -= 200;
  };

  //filter categorys and get all
  const categoryList: any = [
    ...new Set(productData.map((el: any) => el.category)),
  ];

  console.log(categoryList);

  // filtering and get all data for the display-, by dfault show all data

  // get alldata use filterby and store heree
  

  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4py-2">
        <div className="md:w-1/2 ">
          <div className="flex gap-3 bg-slate-200 w-36 px-1 items-center rounded-full drop-shadow cursor-pointer filter-box">
            <p className="text-sm font-medium text-slate-900 ">Bike Delivery</p>
            <img src={Bike} alt="" className="h-8" />
          </div>
          <h1 className="text-4xl md:text-7xl font-bold  py-3 ">
            Handmade With an Extra Pinch Of{" "}
            <span className="text-red-500 text-">Love.</span>
          </h1>
          <p className="py-3 text-sm overlay-text">
            {" "}
            <strong>Ceylon Pizzaria</strong> Your go-to for global flavors
            delivered to your door! Indulge in a variety of mouthwatering
            pizzas, burgers, and international fast foods, blending the best of
            Sri Lanka, Japan, Thailand, China, and Italy. Our commitment to
            quality ensures fresh, top-notch ingredients in every dish. Enjoy a
            prompt and reliable delivery experience, whether you're craving a
            classic Margherita pizza, a hearty burger, or an international
            culinary adventure. Taste the world with Ceylon Pizzaria where
            global cuisine meets doorstep convenience!
          </p>

          <button className="font-bold bg-red-500 text-slate-300 px-3 py-2 rounded hover:text-black">
            Order Now
          </button>
        </div>
   
    
    
        <div className="md:w-1/2 flex flex-wrap gap-2 p-4 justify-center">
          {/* //import card form components */}
        
          {homeProductCartList[0]
            ? homeProductCartList.map((el: any) => {
                return (
                  <Card
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArry.map((el: any, index: any) => {
                return (
                  <Card
                    key={index}
                    id={""}
                    loading={"loading.."}
                    name=""
                    price={0}
                    category=""
                    image={""}
                  />
                );
              })}
        </div>
        {/* // 1 section os over here --------------------------------------------------------- */}
      </div>

      {/* // section 2 start here -------------------2023 12 25------------slider-------------------------- */}

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-700 font-mono mb-4 pt-10">
            Fresh Italiana Pizza 🍕
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={prevProduct}
              className="bg-slate-400 hover:bg-slate-600 text-lg p-1 rounded-md"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-400 hover:bg-slate-600 text-lg p-1 rounded-md"
            >
              <GrNext />
            </button>
          </div>
        </div>

        <div
          className="flex gap-3 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        
        >
          
          {homeProductCartListPizzas[0]
            ? homeProductCartListPizzas.map((el: any) => {
                return (
                  <Cardfeture
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                    
                  />
                );
              })
            : loadingArryFetre.map((el: any, index: any) => {
                return (
                  <Cardfeture
                    loading="Loading..."
                    key={index}
                    name=""
                    price={0}
                    category=""
                    image={""}
                    id=""
                  />
                );
              })}
        </div>
      </div>
      {/* display all product and user can filter need item*/}
     <AllProduct heading={"Your Product"}/>
    </div>
  );
};
export default Home;
