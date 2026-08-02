import Navbar from "../components/koffie/Navbar";
import Hero from "../components/koffie/Hero";
import about from "../components/koffie/about";
import Menu from "../components/koffie/Menu";
import Gallery from "../components/koffie/Gallery";
import WhyChoose from "../components/koffie/WhyChoose";
import Reviews from "../components/koffie/Reviews";
import Contact from "../components/koffie/Contact";
import Footer from "../components/koffie/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

function KoffieBreakDemo(){

return(

<div className="bg-[#0B0B0B] text-white overflow-hidden">

<Navbar/>

<Hero/>

<about/>

<Menu/>

<Gallery/>

<WhyChoose/>

<Reviews/>

< Contact/>

<Footer/>
<WhatsAppButton/>
</div>

)

}

export default KoffieBreakDemo;