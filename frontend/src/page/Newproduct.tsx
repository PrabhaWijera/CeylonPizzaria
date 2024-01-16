import React from "react";
import { FiUploadCloud } from "react-icons/fi";
import { ImagetoBase64 } from "../utility/ImagetoBase64";
import { useState } from "react";
import toast from "react-hot-toast";

function Newproduct() {
  // save image data in state
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;

    //previos data
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadImage = async (e: any) => {
    const data = await ImagetoBase64(e.target.files[0]);

    //previos data image
    setData((preve: any) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  //submit all data from from
  const handleSubmit = async (e: any) => {
    // stop all typing, tagert errors
    e.preventDefault();
    console.log(data);

    //condition for empty data
    const { name, category, image, price } = data;
    if (name && category && image && price) {
      console.log("ok");
      //fech data from backend
      const fetchData = await fetch(
        `${import.meta.env.VITE_REACT_APP_SERVER_DOMAIN}/uploadProduct`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();
      console.log(fetchRes);
      //response messgae in toastt
      toast.success(fetchRes.message);

      // after save data in BD we need to clear data in the text inputs and image
      //clear data
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        }
      })
    } else {
      toast.error("Please Fill All Data");
    }
  }



  return (
    //give all inputs to name for we need key  for handleOnChange
    <div className="p-5 ">
   
      <form
        className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white"
        onSubmit={handleSubmit}
      >
           <h1 className="text-3xl flex justify-center items-center text-blue-600 font-mono capitalize drop-shadow p-2" >Admin Add New Product </h1>
        <label htmlFor="name">Name 🙍</label>
        <input
          type={"text"}
          name="name"
          className="bg-slate-200 p-1 my-1 shadow-md"
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor="category">Category 📦</label>

        <select
          className="bg-slate-200 p-1 my-1 shadow-md"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select The Category </option>
          <option value={"taco"}>Taco</option>
          <option value={"drink"}>Breverages</option>
          <option value={"IceCreame"}>IceCream</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"spagati"}>Spagati</option>
          <option value={"burger"}>Burgers</option>
          <option value={"Cake"}>Cake</option>
          <option value={"rice"}>Rice</option>
          <option value={"kottu"}>Kottu</option>
          <option value={"bbq"}>BBQ</option>
        </select>

        <label htmlFor="image" className="hover:cursor-pointer shadow-md mt-3" >
          Upload Small Size Image 📷
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center" >
            {/* //when we upload image show image */}
            {/* when save img in state and get that data to img tag */}
            {data.image ? (
              <img src={data.image} alt="" className="h-full"  />
            ) : (
              <span className="text-6xl">
                <FiUploadCloud />
              </span>
            )}

            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={handleUploadImage}
              className="hidden"
              
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price 💵
        </label>
        <input
          type={"text"}
          name="price"
          className="bg-slate-200 p-1 my-1 shadow-md"
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor="description">Description 📅</label>
        <textarea
          rows={3}
          className="bg-slate-200 p-1 my-1 resize-none shadow-md"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        />

        <button className="h-9 bg-blue-500 hover:bg-green-500 rounded text-teal-50 font-medium my-2 text-lg drop-shadow shadow-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default Newproduct;
