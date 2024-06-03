import { skills } from "../utils/skills"
import {  motion } from "framer-motion"

const AboutMe = () => {
  const variants={
    show:{opacity:1 ,x:0,
      
    transition:{duration:1 , type:'spring', stiffness:100 }},
    hidden:{opacity:0, x:'-10vh'},
    hidden2:{opacity:0, x:'10vh'},
    hover:{scale:1.3}
}
  return (
    <div id="About" className="w-[90%]  mx-auto mt-10 backdrop-blur-sm mt-40">
    <h1 className="text-3xl mb-10 underline">About Me</h1>
    <div className="flex w-full flex-col lg:flex-row" 
    >
        <motion.div className=" w-full lg:w-[48%] ml-[2%] shadow-2xl p-3 bg-opacity-85 mb-9"
        variants={variants}
        
        initial='hidden'
        whileInView='show'
        >
          <h1 className="text-2xl">Skills</h1>
          <div className="flex flex-wrap">
          {skills.map((skill,i)=>{return (
            <div className=" mx-14 my-10" key={skill.src}>
            <motion.img className="h-10 mx-auto " src={skill.src} alt="" 
              initial={{y:-10}}
              animate={{
                y:[10,-10],
                transition:{
                duration:2,
                delay:i,
                ease:'linear',
                repeat:Infinity,
                repeatType:"reverse"
              },
              }}
              
            /><br />
            <h1>{skill.title}</h1>
            </div>
          )
            
          })}
          </div>
        </motion.div>


        <motion.div className=" w-full lg:w-[48%]  shadow-2xl p-3  backdrop-blur-sm mb-9"
        whileInView="show"
        variants={variants}
        
        initial='hidden2'
        >
        <h1 className="text-2xl mb-4">More About Me</h1><br />
        <div className="mt-2 text-xl px-3">
            <p>Hello! I am Mohit Kumar, a passionate and dedicated Pre-Final year student persuing Computer Engineering student 
            at J.C Bose University of Science and Technology, YMCA Faridabad</p><br />
            <p>
            I am Frontend Developer and learning Backend in Node , i have good knowledge of React,Node JS , Express Js, HTML,CSS 
            Javascript 
            </p>
            <br />
            <p>
                I have also good knowledge of Data Structure and Algorithms(DSA) and practice Questions
                 on LeetCode in C++ and have solved 200+ questions overall and also give contest on CodeChef
                 <br />
                 2⭐ @Codechef
            </p>
        </div>
        </motion.div>
        </div>

    </div>
  )
}

export default AboutMe