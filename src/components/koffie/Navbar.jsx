import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";


function Navbar(){

const [open,setOpen]=useState(false);


const links=[
"Home",
"About",
"Menu",
"Gallery",
"Contact"
];


return(

<nav

className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-xl
bg-black/60
border-b
border-white/10
"

>


<div

className="
max-w-7xl
mx-auto
px-5
sm:px-6
py-4
flex
items-center
justify-between
"

>



{/* Logo */}


<motion.div

initial={{

opacity:0,
y:-30

}}

animate={{

opacity:1,
y:0

}}

transition={{

duration:0.6

}}

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

<Coffee size={24}/>

</div>




<div>

<h1

className="
text-white
text-lg
sm:text-xl
font-bold
tracking-wider
"

>

KOFFIE BREAK

</h1>


<p

className="
text-[#00E5FF]
text-[10px]
sm:text-xs
tracking-[4px]
"

>

COFFEE • CAFE

</p>


</div>



</motion.div>







{/* Desktop */}


<div

className="
hidden
md:flex
items-center
gap-8
"

>


{

links.map((item,index)=>(


<motion.a

key={item}

href={`#${item.toLowerCase()}`}

initial={{

opacity:0,
y:-20

}}

animate={{

opacity:1,
y:0

}}

transition={{

delay:index*0.1

}}

className="
text-gray-300
hover:text-[#00E5FF]
transition
duration-300
"

>

{item}

</motion.a>


))


}




<button

className="
bg-[#00E5FF]
text-black
font-bold
px-6
py-3
rounded-full
hover:bg-[#00B8D4]
transition
shadow-[0_0_25px_#00E5FF]
"

>

Order Now

</button>



</div>







{/* Mobile Button */}


<button

onClick={()=>setOpen(!open)}

className="
md:hidden
text-white
"

>

{

open ?

<X size={28}/>

:

<MenuIcon size={28}/>

}


</button>



</div>








{/* Mobile Menu */}



<AnimatePresence>


{

open &&

<motion.div

initial={{

opacity:0,
height:0

}}

animate={{

opacity:1,
height:"auto"

}}

exit={{

opacity:0,
height:0

}}

transition={{

duration:0.3

}}

className="
md:hidden
bg-black/95
border-t
border-white/10
overflow-hidden
"

>


<div

className="
px-6
py-5
"

>


{

links.map((item)=>(


<a

key={item}

href={`#${item.toLowerCase()}`}

onClick={()=>setOpen(false)}

className="
block
py-3
text-gray-300
hover:text-[#00E5FF]
transition
"

>

{item}

</a>


))

}




<button

className="
mt-4
w-full
bg-[#00E5FF]
text-black
font-bold
py-3
rounded-full
shadow-[0_0_20px_#00E5FF]
"

>

Order Now

</button>



</div>


</motion.div>


}


</AnimatePresence>



</nav>


)

}


export default Navbar;