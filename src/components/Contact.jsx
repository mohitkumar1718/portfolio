import { motion } from "framer-motion"

const Contact = () => {
  const variants={
    
    show:{opacity:1 ,x:0,
      
    transition:{duration:1.5 , type:'spring', stiffness:100 }
  },
    hidden:{opacity:0, x:'-50vh'},
    hidden2:{opacity:0, x:'50vh'},
    
}
  return (
    <div id="Contact" className="w-[90%] mx-auto ">
    <h1 className="text-3xl mt-10 underline">Contact</h1>
    <div className="flex ">
     <motion.img className="hidden lg:inline-flex w-96" src="email.svg " alt="" 
      variants={variants}
      initial='hidden'
      whileInView='show'
     />
     <motion.form action="" className=" w-full lg:w-3/5 backdrop-blur-md mx-auto lg:ml-auto p-7 shadow-xl "
     variants={variants}
     initial='hidden2'
     whileInView='show'
     >
        <h1 className="text-lg ml-3 ">Name</h1>
        <input className=" mb-3 w-full bg-opacity-80 h-9 rounded-lg bg-slate-100 px-3" type="text" placeholder="Enter Your Name here" />
        <h1 className="text-lg ml-3">Email</h1>
        <input className="mb-3 w-full bg-opacity-80 h-9 rounded-lg bg-slate-100 px-3" type="email" name="" id="" placeholder="Enter Your Email here" />
        <h1 className="text-lg ml-3">Your Messege</h1>
        <textarea className="mb-3 w-full bg-opacity-80 h-36 rounded-lg bg-slate-100 px-3 " type="text" name="" id="" placeholder="Enter your Message here" />
        <a href="mailto:mohitkr7982@gmail.com" className="text-lg ml-3 py-2 px-3 bg-green-600 w-24 rounded-2xl text-center">Submit</a>
     </motion.form>
        
    </div>
    </div>
  )
}

export default Contact