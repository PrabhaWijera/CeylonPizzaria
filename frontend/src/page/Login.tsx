import React, { useState } from "react";
import loginSignupImage from "../assets/login-animation.gif";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice"
import loginImageGoogle from "../assets/Google__G__logo.png";
import Footer from "../components/Footer";

import { signInWithGoogle } from '../firebase';

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 

  const navigate = useNavigate();

  const userData: any = useSelector(state => state)


  const dispatch = useDispatch();

  // spreade method
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      alert("Success");
      const fetchData = await fetch(
        `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const dataRes = await fetchData.json();

      console.log(dataRes);

      toast(dataRes.message);


      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);

      }
      console.log(userData);

    } else {
      alert("please fill the form");
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handlerSowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto  justify-center items-center flex flex-col p-4">
        {/* <h1 className="text-center text-2xl font-bold">Sign up</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={loginSignupImage} alt="signupanimation gif" className="" />
        </div>
        <form className=" flex flex-col w-full py-4" onSubmit={handleSubmit}>
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

          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              className="w-full max-w-[180px] bg bg-blue-600 hover:bg-teal-500  mt-4 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full"
            >
              Login
            </button>

          </div>
          <div className="flex justify-center  items-center gap-3">

            <button onClick={signInWithGoogle} className="w-full max-w-[50px] bg     mt-4 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full">
              <img src={loginImageGoogle} alt="Description of the image" />
            </button>

          </div>


        </form>

        <p className="py-3 text-sm mt-3">
          Don't Have Account ?{" "}
          <Link to={"/signin"} className="text-blue-400 font-bold underline">
            SignUp{" "}
          </Link>{" "}
        </p>
      </div>
      <Footer/>
    </div>
  );
};
export default Login;
