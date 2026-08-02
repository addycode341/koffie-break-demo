import { motion } from "framer-motion";
import { Coffee, ArrowUp } from "lucide-react";

import {
FaInstagram,
FaFacebookF,
FaTwitter
} from "react-icons/fa";



function Footer(){


const scrollTop=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};



const links=[

"Home",
"About",
"Menu",
"Gallery",
"Contact"

];



const socials=[

{
icon:FaInstagram,
link:"#"
},

{
icon:FaFacebookF,
link:"#"
},

{
icon:FaTwitter,
link:"#"
}

];





return(

<footer

className="
bg-black
border-t
border-white/10
pt-16
pb-8
overflow-hidden
"

>


<div

className="
max-w-7xl
mx-auto
px-5
sm:px-6
"

>


<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-10
"

>







{/* BRAND */}


<motion.div

initial={{

opacity:0,
y:40

}}

whileInView={{

opacity:1,
y:0

}}

viewport={{

once:true

}}

transition={{

duration:0.7

}}

>



<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-12
h-12
rounded-full
bg-[#00E5FF]
text-black
flex
items-center
justify-center
shadow-[0_0_30px_#00E5FF]
"

>

<Coffee size={26}/>

</div>




<div>


<h2

className="
text-xl
font-bold
text-white
tracking-wider
"

>

KOFFIE BREAK

</h2>



<p

className="
text-[#00E5FF]
text-xs
tracking-[4px]
"

>

COFFEE • CAFE

</p>


</div>



</div>






<p

className="
mt-5
text-gray-400
leading-relaxed
"

>

Premium coffee, delicious snacks and
a relaxing cafe experience made with passion.

</p>



</motion.div>








{/* LINKS */}



<div>


<h3

className="
text-white
font-bold
text-xl
mb-5
"

>

Quick Links

</h3>




<div

className="
space-y-3
"

>


{

links.map((item)=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

className="
block
text-gray-400
hover:text-[#00E5FF]
transition
"

>

{item}

</a>


))


}



</div>


</div>








{/* SOCIAL */}



<div>


<h3

className="
text-white
font-bold
text-xl
mb-5
"

>

Follow Us

</h3>




<div

className="
flex
gap-4
"

>


{

socials.map((item,index)=>{


const Icon=item.icon;


return(


<motion.a

key={index}

href={item.link}

whileHover={{

scale:1.15,
y:-5

}}

whileTap={{

scale:0.95

}}

className="
w-12
h-12
rounded-full
bg-white/5
border
border-white/10
flex
items-center
justify-center
text-gray-300
hover:text-[#00E5FF]
hover:border-[#00E5FF]
transition
"

>


<Icon size={22}/>


</motion.a>


)


})


}



</div>







<motion.button

onClick={scrollTop}

whileHover={{

x:5

}}

className="
mt-8
flex
items-center
gap-2
text-[#00E5FF]
hover:text-white
transition
"

>

Back To Top

<ArrowUp size={18}/>

</motion.button>




</div>





</div>









{/* Bottom */}



<div

className="
border-t
border-white/10
mt-12
pt-6
text-center
text-gray-500
text-sm
"

>

© {new Date().getFullYear()} Koffie Break. All Rights Reserved.

</div>



</div>


</footer>


)

}


export default Footer;