import { motion } from "framer-motion";
import {
Coffee,
Sparkles,
Clock,
HeartHandshake
} from "lucide-react";


function WhyChoose(){


const features=[

{
icon:<Coffee size={26}/>,
title:"Premium Coffee",
text:"Handcrafted beverages made with selected coffee beans and rich flavours."
},

{
icon:<Sparkles size={26}/>,
title:"Fresh Ingredients",
text:"Freshly prepared food and drinks using quality ingredients."
},

{
icon:<Clock size={26}/>,
title:"Quick Service",
text:"Fast, friendly and smooth service for every customer."
},

{
icon:<HeartHandshake size={26}/>,
title:"Cozy Ambience",
text:"A comfortable cafe space to relax, meet and create memories."
}

];



return(

<section

id="why"

className="
py-24
bg-black
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
uppercase
tracking-[5px]
text-xs
sm:text-sm
"

>

WHY CHOOSE US

</p>



<h2

className="
text-4xl
sm:text-5xl
font-bold
mt-4
text-white
"

>

More Than A

<span

className="
text-[#00E5FF]
drop-shadow-[0_0_15px_#00E5FF]
"

>

 Cafe

</span>


</h2>



<p

className="
text-gray-400
mt-5
max-w-xl
mx-auto
"

>

Experience premium coffee, delicious flavours
and a place designed for special moments.

</p>



</motion.div>









{/* Cards */}


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

features.map((feature,index)=>(


<motion.div

key={feature.title}


initial={{

opacity:0,
y:50

}}

whileInView={{

opacity:1,
y:0

}}

viewport={{

once:true,
amount:0.2

}}


transition={{

duration:0.6,
delay:index*0.12

}}


whileHover={{

y:-10

}}


className="
group
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-7
hover:border-[#00E5FF]
transition
duration-300
"

>





<div

className="
w-14
h-14
rounded-2xl
bg-[#00E5FF]
text-black
flex
items-center
justify-center
mb-6
shadow-[0_0_25px_#00E5FF]
group-hover:scale-110
transition
"

>

{feature.icon}


</div>







<h3

className="
text-xl
font-bold
text-white
mb-3
"

>

{feature.title}

</h3>




<p

className="
text-gray-400
text-sm
leading-relaxed
"

>

{feature.text}

</p>



</motion.div>



))


}



</div>




</div>


</section>

)

}


export default WhyChoose;