import { motion } from "framer-motion";
import { ArrowRight, Coffee } from "lucide-react";


function Hero(){


return(

<section

id="home"

className="
relative
min-h-screen
flex
items-center
overflow-hidden
pt-28
md:pt-20
"

>


{/* BACKGROUND IMAGE */}

<div

className="
absolute
inset-0
bg-cover
bg-center
"

style={{

backgroundImage:
"url(https://images.unsplash.com/photo-1511081692775-05d0f180a065)"

}}

>


<div

className="
absolute
inset-0
bg-black/75
"

/>

</div>





{/* CYAN GLOW */}


<div

className="
absolute
top-32
left-0
w-72
h-72
bg-[#00E5FF]
rounded-full
blur-[140px]
opacity-20
"

/>



<div

className="
absolute
bottom-10
right-0
w-96
h-96
bg-[#00E5FF]
rounded-full
blur-[160px]
opacity-10
"

/>






<div

className="
relative
z-10
max-w-7xl
mx-auto
px-5
sm:px-6
w-full
"

>


<div

className="
grid
lg:grid-cols-2
gap-12
items-center
"

>







{/* CONTENT */}



<motion.div

initial={{

opacity:0,
x:-60

}}

animate={{

opacity:1,
x:0

}}

transition={{

duration:0.8,
ease:"easeOut"

}}

>



<div

className="
flex
items-center
gap-3
text-[#00E5FF]
mb-5
"

>


<Coffee size={25}/>


<span

className="
tracking-[4px]
text-xs
sm:text-sm
font-medium
"

>

PREMIUM CAFE

</span>


</div>








<h1

className="
text-4xl
sm:text-5xl
lg:text-7xl
font-extrabold
text-white
leading-[1.1]
"

>

Fresh Coffee.

<br/>


<span

className="
text-[#00E5FF]
drop-shadow-[0_0_25px_#00E5FF]
"

>

Perfect Moments

</span>


</h1>







<p

className="
mt-6
text-gray-300
text-base
sm:text-lg
max-w-xl
leading-relaxed
"

>

Experience handcrafted coffee, delicious snacks
and a cozy cafe atmosphere at Koffie Break.

</p>








<div

className="
flex
flex-col
sm:flex-row
gap-4
mt-8
"

>





<motion.button

whileHover={{

scale:1.05

}}

whileTap={{

scale:0.95

}}

className="
bg-[#00E5FF]
text-black
font-bold
px-8
py-4
rounded-full
flex
items-center
justify-center
gap-2
shadow-[0_0_35px_#00E5FF]
"

>

Order Now

<ArrowRight size={20}/>


</motion.button>








<motion.a

href="#menu"

whileHover={{

scale:1.05

}}

whileTap={{

scale:0.95

}}

className="
border
border-[#00E5FF]
text-[#00E5FF]
px-8
py-4
rounded-full
text-center
hover:bg-[#00E5FF]
hover:text-black
transition
"

>

View Menu


</motion.a>





</div>




</motion.div>









{/* IMAGE */}



<motion.div

initial={{

opacity:0,
scale:0.8

}}

animate={{

opacity:1,
scale:1

}}

transition={{

duration:1

}}

className="
flex
justify-center
"

>




<motion.div

animate={{

y:[0,-15,0]

}}

transition={{

duration:4,
repeat:Infinity,
ease:"easeInOut"

}}

className="
w-full
max-w-md
"

>



<div

className="
relative
rounded-3xl
overflow-hidden
border
border-[#00E5FF]/40
shadow-[0_0_50px_#00E5FF]
"

>


<img

src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"

alt="Koffie Break Coffee"

className="
w-full
h-[320px]
sm:h-[450px]
object-cover
"

/>




<div

className="
absolute
inset-0
bg-gradient-to-t
from-black/40
to-transparent
"

/>


</div>




</motion.div>




</motion.div>







</div>


</div>


</section>


)

}


export default Hero;