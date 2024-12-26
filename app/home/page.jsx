import React from 'react'
import PriceList from "@/app/price/page";
import Client from "@/app/client/page";
import Faq from "@/app/faq/page";
import Contact from "@/app/contact/page";


const Home = () => {
    return (
        <div>
            <div>
               <PriceList/>
                <Client/>
                <Faq/>
                <Contact/>


            </div>
        </div>
    )
}
export default Home
