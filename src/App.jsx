import Navbar from "./components/koffie/Navbar";
import Hero from "./components/koffie/Hero";
import about from "./components/koffie/About";
import Menu from "./components/koffie/Menu";
import WhyChoose from "./components/koffie/WhyChoose";
import Gallery from "./components/koffie/Gallery";
import Reviews from "./components/koffie/Reviews";
import Contact from "./components/koffie/Contact";
import Footer from "./components/koffie/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


function App(){

const About = about;

return(

<>

<Navbar/>

<Hero/>

<about/>

<Menu/>

<WhyChoose/>

<Gallery/>

<Reviews/>

<Contact/>

<Footer/>
<WhatsAppButton/> 
</>

)

}


export default App;