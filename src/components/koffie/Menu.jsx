import { motion } from "framer-motion";
import { Coffee } from "lucide-react";


function Menu(){


const items=[

{
name:"Classic Cappuccino",
price:"₹149",
image:"https://images.unsplash.com/photo-1572449043416-55f4685c9bb7"
},

{
name:"Cold Coffee",
price:"₹179",
image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
},

{
name:"Cafe Latte",
price:"₹159",
image:"https://images.unsplash.com/photo-1561882468-9110e03e0f78"
},

{
name:"Chocolate Mocha",
price:"₹199",
image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c"
},

{
name:"Premium Espresso",
price:"₹129",
image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
},

{
name:"Brownie With Coffee",
price:"₹229",
image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
}

];



return(

<section

id="menu"

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
mb-12
sm:mb-16
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

OUR MENU

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

Signature

<span

className="
text-[#00E5FF]
drop-shadow-[0_0_20px_#00E5FF]
"

>

 Coffee

</span>


</h2>



<p

className="
text-gray-400
mt-4
max-w-xl
mx-auto
"

>

Handcrafted drinks prepared with premium ingredients.

</p>



</motion.div>









{/* Cards */}


<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-7
"

>


{

items.map((item,index)=>(


<motion.div


key={item.name}


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

duration:0.5,
delay:index*0.1

}}


whileHover={{

y:-12

}}



className="
group
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-[#00E5FF]
transition
duration-300
"

>







{/* Image */}



<div

className="
relative
overflow-hidden
"

>


<img

src={item.image}

alt={item.name}

className="
w-full
h-60
sm:h-64
object-cover
group-hover:scale-110
transition
duration-700
"

/>



<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/60
to-transparent
"

></div>





<div

className="
absolute
top-4
right-4
bg-[#00E5FF]
text-black
font-bold
px-4
py-2
rounded-full
shadow-[0_0_20px_#00E5FF]
"

>

{item.price}

</div>



</div>









{/* Content */}



<div

className="
p-6
"

>


<div

className="
flex
items-center
gap-3
mb-3
"

>


<Coffee

size={22}

className="
text-[#00E5FF]
"

/>




<h3

className="
text-lg
sm:text-xl
font-bold
text-white
"

>

{item.name}

</h3>



</div>





<p

className="
text-gray-400
text-sm
leading-relaxed
"

>

Freshly prepared with rich flavour
and premium cafe quality.

</p>







<motion.button

whileHover={{

scale:1.03

}}

whileTap={{

scale:0.95

}}

className="
mt-6
w-full
py-3
rounded-full
bg-[#00E5FF]
text-black
font-bold
shadow-[0_0_20px_#00E5FF]
hover:bg-[#00B8D4]
transition
"

>

Order Now

</motion.button>



</div>






</motion.div>



))


}



</div>




</div>


</section>

)

}


export default Menu;