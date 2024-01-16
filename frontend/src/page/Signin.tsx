import React, { useState } from "react";
import loginSignupImage from "../assets/login-animation.gif";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
 import {toast} from "react-hot-toast"
import Footer from "../components/Footer";

 

function Signin() {
  const navigate = useNavigate();
 
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conformPassword: "",
    image: "",
  });
  console.log(data);

 localStorage.setItem("user",JSON.stringify(data));
 const clearLocalStorage = () => {
  localStorage.removeItem('user');
};
window.addEventListener('beforeunload', clearLocalStorage);
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

// No need for process.env, just use the variable directly
console.log(import.meta.env.VITE_REACT_APP_SERVER_DOMAIN);



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { firstName, email, password, conformPassword } = data;
    if (firstName && email && password && conformPassword) {
      if (password === conformPassword) {
      
        const fetchData=await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/signin`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data)
        });
        const responseData=await fetchData.json();

    console.log(responseData);
      
        // alert(responseData.message);
        toast(responseData.message)
        if(responseData.alert){
          navigate("/login");
        }
        // navigate("/login");
      } else {
 
        alert("password not match");
      }
    } else {
      alert("please fill the form");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlerSowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const [showconformedPassword, setShowconformedPassword] = useState(false);
  const handleShoeConformedPassword = () => {
    setShowconformedPassword((prev) => !prev);
  };

  const handleUploadProfileImage = async (e: any) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
    setData((preve: any) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto  justify-center items-center flex flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Sign up</h1> */}
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img
            src={data.image ? data.image : loginSignupImage}
            alt="signupanimation gif"
            className="w-full h-full"
          />

          {/* //upload profile image */}
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer bg-opacity-50">
              <p className="text-sm p-1 text-cyan-50">Upload</p>
            </div>
            <input
              type="file"
              id="profileImage"
              className="hidden"
              onChange={handleUploadProfileImage}
              accept="image/*"
            />
          </label>
        </div>

        <form className=" flex flex-col w-full py-4" onSubmit={handleSubmit}>
          <label htmlFor="firstName">FirstName</label>
          <input
            type={"text"}
            name="firstName"
            id="firstName"
            className="bg-slate-200 mt-1 mb-4 w-full border-2 focus-within:outline-blue-600 p-2 rounded-md  "
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">LastName</label>
          <input
            type={"text"}
            name="lastName"
            id="lastName"
            className="bg-slate-200 mt-1 mb-4 w-full border-2 border-gray-300 p-2 rounded-md  focus-within:outline-blue-600 "
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            name="email"
            id="email"
            className="bg-slate-200 mt-1 mb-4 w-full border-2 border-gray-300 p-2 rounded-md  focus-within:outline-blue-600 "
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-600 ">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              className="bg-slate-200 w-full border-2 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handlerSowPassword}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <label htmlFor="conformPassword">Conformed Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-600 ">
            <input
              type={showconformedPassword ? "text" : "password"}
              name="conformPassword"
              id="conformPassword"
              className="bg-slate-200 w-full border-2 border-none outline-none"
              value={data.conformPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl"
              onClick={handleShoeConformedPassword}
            >
              {showconformedPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="w-full max-w-[180px] bg bg-blue-600 hover:bg-teal-500  mt-4 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="py-3 text-sm mt-3">
          Already Have Account ?{" "}
          <Link to={"/login"} className="text-blue-400 font-bold underline">
            Login
          </Link>{" "}
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default Signin;
