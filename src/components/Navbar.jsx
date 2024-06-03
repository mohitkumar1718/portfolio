import {  motion } from "framer-motion"
import { Link } from 'react-scroll';
const Navbar = () => {
const variants={
    show:{opacity:1 ,y:0,
      
    transition:{duration:0.5 , type:'spring', stiffness:50 }},
    hidden:{opacity:0, y:'-100vh'},
    hover:{scale:1.3}
}
     


  return (
    <nav className="  flex py-6 px-8  border-b-2 justify-between font-semibold fixed w-full bg-white  z-10">
     <motion.h1 className=" text-2xl my-auto"
     variants={variants}
     animate='show'
     initial='hidden'
     whileHover='hover'
    
 
     >MOHIT KUMAR</motion.h1>
     <motion.navItems className=" hidden lg:inline-flex ml-7 text-lg flex w-1/4  align-top my-auto "
     variants={variants}
     animate='show'
     initial='hidden'
     >
       <Link to="#" smooth={true} offset={50} duration={500} className="mr-5 cursor-pointer "   >HOME</Link>
       <Link to="About" smooth={true} offset={50} duration={500} className="mr-5 cursor-pointer">ABOUT</Link>
       <Link to="Project" smooth={true} offset={50} duration={500} className="mr-5 cursor-pointer" >PROJECT</Link>
       <Link to="Contact" smooth={true} offset={50} duration={500} className="mr-5 cursor-pointer"  >CONTACT</Link>
     </motion.navItems>
     <motion.h1 className="mr-4 text-lg bg-green-700 p-2 rounded-lg text-white cursor-pointer"
     variants={variants}
     animate='show'
     initial='hidden'
     whileHover='hover'
     >💼Hire Me</motion.h1>
    </nav>
  )
}

export default Navbar