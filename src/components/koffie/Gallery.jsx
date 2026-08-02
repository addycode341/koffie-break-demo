import { motion } from "framer-motion";



function Gallery(){


const images=[

{
src:"https://images.unsplash.com/photo-1554118811-1e0d58224f24",
title:"Cafe Interior"
},

{
src:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
title:"Fresh Coffee"
},

{
src:"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
title:"Cafe Moments"
},

{
src:"https://images.unsplash.com/photo-1511920170033-f8396924c348",
title:"Premium Drinks"
},

{
src:"https://images.unsplash.com/photo-1445116572660-236099ec97a0",
title:"Relaxing Space"
},

{
src:"https://images.unsplash.com/photo-1511081692775-05d0f180a065",
title:"Coffee Experience"
}

];



return(

<section

id="gallery"

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

once:true

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
text-xs
sm:text-sm
uppercase
"

>

GALLERY

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

Inside{" "}

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

A glimpse of our premium cafe experience

</p>




</motion.div>









{/* Images */}



<div

className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
"

>


{

images.map((image,index)=>(


<motion.div


key={image.title}


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
delay:index*0.1

}}



whileHover={{

y:-10

}}


className="
group
relative
rounded-3xl
overflow-hidden
border
border-white/10
hover:border-[#00E5FF]
transition
duration-300
"

>





<img

src={image.src}

alt={image.title}

className="
w-full
h-72
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
from-black/80
via-transparent
to-transparent
opacity-0
group-hover:opacity-100
transition
duration-500
"

></div>






<div

className="
absolute
bottom-5
left-5
opacity-0
group-hover:opacity-100
transition
duration-500
"

>


<h3

className="
text-white
font-bold
text-lg
"

>

{image.title}

</h3>



<p

className="
text-[#00E5FF]
text-sm
"

>

Koffie Break Cafe

</p>


</div>




</motion.div>


))


}



</div>





</div>


</section>


)

}


export default Gallery;