import React from 'react';
import IMgesBG from '../assets/logo.png';
import IMgesBG1 from '../assets/IMgesBG1.jpg';
import IMgesB2 from '../assets/IMgesB2.jpg';
import IMgesB3 from '../assets/IMgesB3.jpg';
import IMgesB4 from '../assets/IMgesB4.jpg';
import socail from '../assets/socail.png';
import contact from '../assets/sss.jpg';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4py-2">
        <div className="md:w-1/2 ">
          <div className="flex gap-3  w-full px-1 items-center rounded-full drop-shadow ">
            {/* <p className="text-sm font-medium text-slate-900 ">Bike Delivery</p> */}

          </div>
          <h1 className="text-4xl md:text-7xl font-bold  py-3 ">
            SUBSCRIBE & GET
            <span className="text-red-500 text-justify ">10%</span>
            DISCOUNT
          </h1>
          <p className="py-3 text-md overlay-text font-mono ">
            <form className="p-4">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder='🍕 Enter Your Email Address. '
                  className="w-full border font-bold border-orange-500 bg-orange-100 text-orange-800 px-4 py-2 rounded-md focus:outline-none focus:border-orange-700 focus:ring focus:ring-orange-200 mt-2"
                />
                <input
                  type="text"
                  placeholder='🍔 Enter Your Details. '
                  className="w-full border font-bold border-orange-500 bg-orange-100 text-orange-800 px-4 py-2 rounded-md focus:outline-none focus:border-orange-700 focus:ring focus:ring-orange-200 mt-2"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md mt-2"
                >
                  Subscribe 🍇
                </button>
                
              </div>
            </form>
          
          </p>
          <img src={socail} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />

        </div>
        {/* // 1 section os over here --------------------------------------------------------- */}
        <div className="md:w-1/2 flex flex-wrap gap-1 p-3 justify-center">
          <div className="md:w-1/3 flex flex-wrap gap-2 p-3 justify-center">
            <img src={IMgesBG1} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />

          </div>
          <div className="md:w-1/3 flex flex-wrap gap-2 p-3 justify-center">
            <img src={IMgesB2} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />

          </div>
          <div className="md:w-1/3 flex flex-wrap gap-2 p-3 justify-center">
            <img src={IMgesB3} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />

          </div>
          <div className="md:w-1/3 flex flex-wrap gap-2 p-3 justify-center">
            <img src={IMgesB4} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />

          </div>
          <div className="md:w-1/3 flex flex-wrap gap-2 p-3 justify-center">
          <img src={contact} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />

          </div>
        </div>
      </div>

      <Footer/>
      {/* // section 2 start here -------------------2023 12 25------------slider-------------------------- */}
    </div>
  )
}

export default Contact;