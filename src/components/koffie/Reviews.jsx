import { motion } from "framer-motion";
import { Star } from "lucide-react";


function Reviews(){


const reviews=[

{
name:"Palak Manchanda",
text:"Too good food and service. Amazing experience!",
rating:5
},

{
name:"Shreya Sharma",
text:"Amazing sandwiches must visit. Pesto hummus sandwich is a must try.",
rating:5
},

{
name:"Key Log",
text:"Prices are reasonable and staff behaviour is also good.",
rating:5
}

];



return(

<section

id="reviews"

className="
py-24
bg-[#050505]
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

CUSTOMER LOVE

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

What Our

<span

className="
text-[#00E5FF]
drop-shadow-[0_0_20px_#00E5FF]
"

>

 Customers Say

</span>


</h2>






{/* Rating */}


<div

className="
mt-6
inline-flex
items-center
gap-3
bg-white/5
border
border-white/10
px-6
py-3
rounded-full
"

>


<span

className="
text-2xl
font-bold
text-white
"

>

4.9

</span>




<div

className="
flex
gap-1
"

>


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={18}

fill="currentColor"

className="
text-[#00E5FF]
"

/>


))


}


</div>



<span

className="
text-gray-400
text-sm
"

>

Google Rating

</span>


</div>




</motion.div>









{/* Reviews Cards */}


<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-6
"

>


{

reviews.map((review,index)=>(


<motion.div

key={review.name}


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
delay:index*0.15

}}



whileHover={{

y:-10

}}



className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
hover:border-[#00E5FF]
transition
duration-300
"

>





<div

className="
flex
gap-1
mb-5
"

>


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={18}

fill="currentColor"

className="
text-[#00E5FF]
"

/>


))


}


</div>







<p

className="
text-gray-300
leading-relaxed
mb-6
"

>

"{review.text}"

</p>







<h3

className="
text-white
font-bold
"

>

{review.name}

</h3>




<p

className="
text-sm
text-gray-500
mt-1
"

>

Google Review

</p>



</motion.div>



))


}



</div>




</div>


</section>


)

}


export default Reviews;