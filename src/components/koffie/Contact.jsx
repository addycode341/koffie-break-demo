import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";


function Contact(){


const details=[

{
icon:<MapPin size={30}/>,
title:"Location",
text:"Your Cafe Address Here"
},

{
icon:<Phone size={30}/>,
title:"Call Us",
text:"+91 XXXXX XXXXX"
},

{
icon:<Clock size={30}/>,
title:"Opening Hours",
text:"10:00 AM - 11:00 PM"
}

];



return(

<section

id="contact"

className="
bg-black
py-20
sm:py-24
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




{/* Heading */}



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

once:true,
amount:0.3

}}

transition={{

duration:0.7

}}

className="
text-center
mb-14
"

>


<p

className="
text-[#00E5FF]
tracking-[5px]
uppercase
text-xs
sm:text-sm
"

>

CONTACT US

</p>




<h2

className="
text-4xl
sm:text-5xl
font-bold
text-white
mt-4
"

>

Visit

<span

className="
text-[#00E5FF]
drop-shadow-[0_0_20px_#00E5FF]
"

>

 Koffie Break

</span>


</h2>




<p

className="
text-gray-400
mt-4
"

>

Come enjoy your favourite coffee with us.

</p>


</motion.div>








<div

className="
grid
lg:grid-cols-2
gap-10
items-center
"

>







{/* Details */}



<motion.div

initial={{

opacity:0,
x:-50

}}

whileInView={{

opacity:1,
x:0

}}

viewport={{

once:true

}}

transition={{

duration:0.8

}}

className="
space-y-5
"

>



{

details.map((item,index)=>(


<motion.div

key={item.title}

whileHover={{

x:8

}}

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-2xl
p-6
flex
gap-5
hover:border-[#00E5FF]
transition
duration-300
"

>


<div

className="
text-[#00E5FF]
"

>

{item.icon}

</div>




<div>


<h3

className="
text-white
font-bold
text-lg
"

>

{item.title}

</h3>




<p

className="
text-gray-400
mt-1
text-sm
"

>

{item.text}

</p>



</div>



</motion.div>



))


}




</motion.div>









{/* WhatsApp CTA */}



<motion.div

initial={{

opacity:0,
x:50

}}

whileInView={{

opacity:1,
x:0

}}

viewport={{

once:true

}}

transition={{

duration:0.8

}}

className="
relative
"

>


<div

className="
absolute
inset-0
bg-[#00E5FF]
blur-[120px]
opacity-20
rounded-3xl
"

></div>





<div

className="
relative
bg-white/5
backdrop-blur-xl
border
border-[#00E5FF]/40
rounded-3xl
p-8
sm:p-10
text-center
"

>



<MessageCircle

size={55}

className="
mx-auto
text-[#00E5FF]
mb-5
"

/>





<h3

className="
text-2xl
sm:text-3xl
font-bold
text-white
"

>

Order Your Favourite Coffee

</h3>





<p

className="
text-gray-400
mt-4
leading-relaxed
"

>

Message us on WhatsApp and enjoy fresh coffee instantly.

</p>







<motion.button

whileHover={{

scale:1.05

}}

whileTap={{

scale:0.95

}}

className="
mt-8
bg-[#00E5FF]
text-black
font-bold
px-8
py-4
rounded-full
shadow-[0_0_35px_#00E5FF]
hover:bg-[#00B8D4]
transition
"

>

WhatsApp Order

</motion.button>



</div>




</motion.div>





</div>





</div>


</section>


)

}


export default Contact;