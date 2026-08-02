import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";


function WhatsAppButton(){


return(

<motion.a

href="https://wa.me/919999999999"

target="_blank"

rel="noopener noreferrer"

initial={{
scale:0,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

transition={{
duration:0.5
}}

className="
fixed
bottom-6
right-6
z-50
flex
items-center
justify-center
w-16
h-16
rounded-full
bg-[#25D366]
text-white
shadow-[0_0_30px_#25D366]
hover:scale-110
transition
duration-300
"

>


<MessageCircle

size={32}

/>


</motion.a>


)

}


export default WhatsAppButton;