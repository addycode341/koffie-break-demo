import { motion } from "framer-motion";
import { Coffee, MapPin, Clock } from "lucide-react";


function about(){


return(

<section

id="about"

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


<div

className="
grid
lg:grid-cols-2
gap-12
items-center
"

>


{/* IMAGE */}

<motion.div

initial={{
opacity:0,
x:-60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true,
amount:0.2
}}

transition={{
duration:0.8,
ease:"easeOut"
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
blur-[100px]
opacity-20
rounded-3xl
"

/>



<div

className="
relative
rounded-3xl
overflow-hidden
border
border-[#00E5FF]/40
shadow-[0_0_40px_#00E5FF]
"

>


<img

src="/about.jpg"

alt="Koffie Break Cafe"

className="
w-full
h-[350px]
sm:h-[450px]
object-cover
"

/>


</div>


</motion.div>







{/* CONTENT */}


<motion.div

initial={{
opacity:0,
x:60
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true,
amount:0.2
}}

transition={{
duration:0.8,
ease:"easeOut"
}}

>



<p

className="
text-[#00E5FF]
tracking-[5px]
text-xs
sm:text-sm
mb-4
uppercase
"

>

ABOUT KOFFIE BREAK

</p>




<h2

className="
text-4xl
sm:text-5xl
font-bold
text-white
leading-tight
"

>

Where Coffee Meets

<span

className="
text-[#00E5FF]
drop-shadow-[0_0_20px_#00E5FF]
ml-3
"

>

Comfort

</span>


</h2>





<p

className="
text-gray-400
mt-6
leading-relaxed
text-base
sm:text-lg
"

>

Koffie Break is a premium cafe where every cup
is prepared with passion. From freshly brewed coffee
to delicious snacks, we create the perfect place
to relax, meet friends and enjoy memorable moments.

</p>







{/* FEATURES */}


<div

className="
grid
sm:grid-cols-2
gap-5
mt-8
"

>



<div

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
p-5
rounded-2xl
hover:border-[#00E5FF]
hover:-translate-y-2
transition
duration-300
"

>


<Coffee

size={30}

className="
text-[#00E5FF]
mb-3
"

/>



<h3

className="
text-white
font-bold
text-lg
"

>

Fresh Coffee

</h3>




<p

className="
text-gray-400
text-sm
mt-2
"

>

Premium beans & crafted flavours

</p>


</div>







<div

className="
bg-white/5
backdrop-blur-xl
border
border-white/10
p-5
rounded-2xl
hover:border-[#00E5FF]
hover:-translate-y-2
transition
duration-300
"

>


<MapPin

size={30}

className="
text-[#00E5FF]
mb-3
"

/>



<h3

className="
text-white
font-bold
text-lg
"

>

Prime Location

</h3>




<p

className="
text-gray-400
text-sm
mt-2
"

>

Visit our cozy cafe space

</p>


</div>


</div>








<div

className="
mt-6
flex
items-center
gap-3
text-gray-300
"

>


<Clock

className="
text-[#00E5FF]
"

/>


Open Everyday • 10 AM - 11 PM


</div>





</motion.div>



</div>


</div>


</section>


)

}


export default about;