import React from 'react';
import IMgesBG from '../assets/IMgesBG.png';
import Footer from '../components/Footer';



const About = () => {
    return (
        <div className="p-2 md:p-4">
            <div className="md:flex gap-4py-2">
                <div className="md:w-1/2 ">
                    <div className="flex gap-3  w-full px-1 items-center rounded-full drop-shadow ">
                        {/* <p className="text-sm font-medium text-slate-900 ">Bike Delivery</p> */}

                    </div>
                    <h1 className="text-4xl md:text-7xl font-bold  py-3 ">
                        SO, WHAT IS
                        <span className="text-red-500 text-justify "> PIZZARIA?</span>
                    </h1>
                    <p className="py-3 text-md overlay-text font-mono ">
                        {" "}
                        <strong>Ceylon Pizzaria ! 🍕</strong> Pizza is a culinary
                        marvel in its own league, and rightfully so. It represents
                        the epitome of flavor and satisfaction, offering a guilt-free
                        and irresistibly delicious experience with our carefully
                        crafted hand-kneaded crust. The secret lies in the 80% hydration
                        of our proprietary special blend of Italian flour, delivering a
                        crisp, light, easy-to-digest, healthier, and more delectable base!

                        At Ceylon Pizzaria,
                        we are on a mission to introduce our uniquely healthy yet
                        undeniably tasty menu to a community of thinkers, doers,
                        movers, shakers, and life enthusiasts. Founded in December
                        2023 as a Prabhas's concept,  our founders, <strong className="font-semibold hover:text-blue-400"> 
                        Prabhash Wijerathna
                           </strong> 
                         , dedicated countless hours to perfecting our signature
                        30-hour-fermented base, after extensive research and taste
                        testing in Rome.

                        We take pride in sourcing the finest ingredients,
                        from the best-cured meats like our bresaola and beef
                        spianata picante to authentic Italian tomatoes and
                        cheeses. Our mozzarella is locally produced by skilled
                        Italian craftsmen, and we prioritize locally sourced,
                        GMO-free vegetables and herbs for our toppings.
                        Since our humble beginnings
                        in Business Bay, Srilanka, in 2023,
                        Ceylon Pizzaria has successfully
                        expanded to six additional locations
                        across the Western, with a presence
                        in neighboring Southern. Between 2023 April
                        and 2023, we also operated two stores
                        in USA, UK. In 2024 , we extended
                        our reach to the Middle East, introducing
                        pop-up locations in Riyadh, Saudi Arabia,
                        operating for a 12-month duration.
                    </p>


                </div>
                {/* // 1 section os over here --------------------------------------------------------- */}
                <div className="md:w-1/2 flex flex-wrap gap-2 p-3 justify-center">
                    <img src={IMgesBG} alt="" className="w-46 h-30 rounded-lg shadow-2xl" />
                    <p className="py-3 text-md overlay-text font-mono ">

                   

                        Thriving in international markets,
                        Ceylon Pizzaria now sets its sights
                        on becoming a globally recognized brand.
                        In 2023, we marked further growth with our
                        first dine-in locations in Gate Avenue, DIFC,
                        Dubai, and Marina Mall, Abu Dhabi.

                        With a diverse range of tastes and flavors,
                        and the option of original or gluten-free
                        crusts, we assure you an exceptional
                        experience at Ceylon Pizzaria that will
                        keep you coming back for more.
                    </p>
                </div>
            </div>

        <Footer/>
            {/* // section 2 start here -------------------2023 12 25------------slider-------------------------- */}
        </div>
    )
}

export default About;