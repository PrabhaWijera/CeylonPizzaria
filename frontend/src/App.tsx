import React ,{useEffect}from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {setDataProduct} from "./redux/produtSlice"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function App() {
  // grab all product details to app.js and get it through REDUX
const dispatch= useDispatch();
// ceck product pay load
const productData=useSelector((state:any)=>state.product)


useEffect(()=>{

(async()=>{
  const res = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/product`)

  const resData= await res.json()
  console.log(resData)
  dispatch(setDataProduct(resData))
})()


},[])


console.log(productData);
  return (
    <>
    <Toaster />
      <div>
        <Header />
        <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
