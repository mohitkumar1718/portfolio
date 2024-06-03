
import { motion } from "framer-motion"
const Hero = () => {
  return (
    <>
    <div id="Hero" className=" w-[90%] md:w-4/5 mx-auto flex justify-center pt-48 flex-col lg:flex-row">
    <motion.div className="lg:w-3/5 sm:w-full  "
    initial={{opacity:0,x:'-10vw'}}
    whileInView={{x:0,opacity:1}}
    transition={{duration:1,type:"spring", delay:0.5}}    >
    <h1 className="text-3xl font-medium mb-2">👋Hi, I am</h1>
    <h1 className="text-5xl font-bold mb-2 text-green-700">Mohit Kumar</h1>
    <h1 className="text-3xl font-medium mb-2">I am a FrontEnd Developer</h1>
    <p className="text-2xl">
    I am a skilled FrontEnd  Developer proficient in JavaScript,
    React, Node.js, Express.js, and learning MongoDB. With a keen eye for 
    detail and a passion for crafting seamless user experiences, 
    I specialize in utilizing Tailwind CSS to create visually stunning and
    responsive web applications. My goal is to deliver high-quality solutions 
    that not only meet client needs but also elevate their online presence and drive growth.
    <br />
    <br />
    <div className="flex">
    <a href="https://www.instagram.com/mohitkumar1718/" target="_blank"><img className="h-10" src="instagram-icon-957.jpg" alt="" /></a>
    <a href="https://www.linkedin.com/in/mohit-kumar-34a944220/" target="_blank"><img  className="h-10" src="linkedin-logo-png-2026.png" alt="" /></a>
    <a href="https://x.com/mohitkumar1718" target="_blank"><img className="h-10" src="twitter.png" alt="" /></a>
    <a href="https://github.com/mohitkumar1718" target="_blank" ><img className="h-10" src="github-logo-icon-16158.png" alt="" /></a>
    </div>
    <br />
    <div>
    <a href="mailto:mohitkr7982@gmail.com.com" className="text-black py-2 px-3 mr-4 bg-green-600 rounded-lg" target="_blank">Contact </a>
    <a href="https://drive.google.com/file/d/1tOaCtOP2Fevg7KWgvcSBNr3Mo4MoLpSu/view?usp=drive_link" className="text-black py-2 px-3 bg-red-600 rounded-lg"  target="_blank">Resume</a>
    <br /><br />
    </div>
    </p>
    </motion.div>
    <motion.img   src="mohit-removebg-preview.png" className=" hidden lg:block lg:h-fit border-green-600 border-b-2" alt="" 

    initial={{opacity:0,x:'10vw'}}
    whileInView={{x:0, opacity:1}}
    transition={{duration:1,type:"spring", delay:0.8 , stiffness:100}}    
    />
    
    </div>
    
    

    </>
  )
}

export default Hero