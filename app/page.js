import PriceList from "@/app/price/page";
import Client from "@/app/client/page";
import Faq from "@/app/faq/page";
import Contact from "@/app/contact/page";
import {Footer} from "@/components/ui/Footer";


export default function Home() {
  return (
    <div className={''}>

     <PriceList/>
      <Client/>
       <Faq/>
        <Contact/>



    </div>
  );
}
