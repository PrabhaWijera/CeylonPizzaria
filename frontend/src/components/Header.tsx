import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import '../PizzaShandow.css'



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();

  // save profile pic set on the header
  const userData = useSelector((state: any) => state.user)
  console.log(userData.email);

  // logout

  const handleLogout = () => {
    dispatch(logoutRedux(userData));
    toast.success("Logout Success");
  }

  const handleShoeMenu = () => {
    setShowMenu((prev) => !prev);
  };

  // No need for process.env, just use the variable directly this is for admin access email 
  console.log(import.meta.env.VITE_REACT_APP_ADMIN_EMAIL);

  let imge = localStorage.getItem("photo")

  // cart item count
  const cartItemNumber = useSelector((state: any) => state.product.cartItem)



// clear th e local storage
// Function to clear local storage before the window is unloaded
function clearLocalStorageBeforeUnload() {
  localStorage.clear();
}

// Attach the function to the beforeunload event
window.addEventListener('beforeunload', clearLocalStorageBeforeUnload);



  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50  pizza-box">
      {/* Add your header content here */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12">
            <img src={Logo} alt="" className="h-full" />
          </div>
        </Link>

        <div className=" flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg hidden md:flex  ">
            <Link to={""}>Home </Link>
            <Link to={"about"}>About </Link>
            <Link to={"menu/6589a89923af057583448f5b"}>Menu </Link>
            <Link to={"contact"}>Contact </Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <FaCartPlus />
              <div className="absolute -top-1 -right-1 text-cyan-50 rounded-full m-0 p-0 bg-red-500 h-4 w-4 text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>

          <div className="text-slate-600" onClick={handleShoeMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full  drop-shadow-md  ">
              {/* overflow-hidden */}
              {
                 userData.image ? <img src={userData.image}   className="h-full w-full" /> : <FaCircleUser />

              }

              {/* {
                userData.image ? (
                  <img src={userData.image} className="h-full w-full" alt="User Photo" />
                ) : (
                  imge ? (
                    <img src={localStorage.getItem("photo")} className="h-full w-full" alt="User Photo from Local Storage" />
                  ) : (
                    <FaCircleUser />
                  )
                )
              } */}


            </div>

            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex-col min-w-[120px] text-center">

                {/* // this is admin accesss email set */}
                {
                  userData.email === import.meta.env.VITE_REACT_APP_ADMIN_EMAIL && <Link to={"newProduct"}>
                    <p className="whitespace-nowrap cursor-pointer px-2">New Product 🎁</p>
                  </Link>
                
                }

                {
                  userData.email === import.meta.env.VITE_REACT_APP_ADMIN_EMAIL && <Link to={"Orders"}>
                    <p className="whitespace-nowrap cursor-pointer px-2">Orders</p>
                  </Link>
                
                }
                


                {
                  userData.image ? <p className="cursor-pointer text-white bg-red-400" onClick={handleLogout}> Logout 📤{(userData.firstName)}</p> : <Link to={"login"}>
                    <p className="whitespace-nowrap cursor-pointer  py-2 px-2">Login</p>
                  </Link>
                }


                <Link to={"signin"}>
                  <p className="whitespace-nowrap cursor-pointer px-2 py-2">Sign In 🆕</p>
                </Link>

                {/* // for mobile box */}
                <nav className=" text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">Home </Link>
                  <Link to={"about"} className="px-2 py-1">About </Link>
                  <Link to={"menu/6589a89923af057583448f5b"} className="px-2 py-1">Menu </Link>
                  <Link to={"contact"} className="px-2 py-1">Contact </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add your mobile content here */}
    </header>
  );
};

export default Header;
