import {  motion } from "framer-motion"

const Project = () => {
  const variants={
    initial:{y:'10vh', opacity:0 },
    show:{opacity:1 ,y:0,
      
    transition:{duration:1.5 , type:'spring', stiffness:100 }},
    hidden:{opacity:0, y:'-100vh'},
    
}
  return (
    <>
    <motion.div className="flex flex-col lg:flex-row mx-auto p-2 shadow-xl mb-8 backdrop-blur-sm"
    variants={variants}
    initial='initial'
    whileInView='show'
    >
      <img className="w-full lg:w-1/2 mr-9 rounded-lg " src="netflix.png" alt="" />
      <div className="text-lg">
        <h1 className="text-2xl">NetFlix Gpt</h1>
        <p>I developed a frontend clone of Netflix, integrating the TMDB API
         to dynamically fetch and display movie information. A movie search
          feature using the OpenAI API allows natural language queries. Firebase
           ensures secure user authentication. The responsive user interface, 
           built with React and Tailwind CSS, offers a seamless experience. 
           The tech stack includes React, Tailwind CSS, TMDB API, OpenAI API,
            Firebase Authentication, and Redux Toolkit for efficient state management.</p>
            <div className="flex mx-auto "> 
          <div className="mr-10 px-3">
            <img className="h-10 mx-auto" src="github-logo-icon-16158.png" alt="source code" />
            <a href="https://github.com/mohitkumar1718/netflix-gpt" target="_blank" className="text-sm bg-green-600 p-2 rounded-xl cursor-pointer">Source Code</a>
          </div>
          <div>
            <img className="h-9 mb-1 mx-auto" src="website.png" alt="website" />
            <a href="https://netflix-gpt-ivory-mu.vercel.app/" target="_blank" className="text-sm p-2 px-4 rounded-xl bg-green-600 cursor-pointer">Live Project</a>
          </div>
          </div>
        </div>
    </motion.div>

    <motion.div className="flex flex-col lg:flex-row  mx-auto p-2  shadow-xl backdrop-blur-sm"
    variants={variants}
    initial='initial'
    whileInView='show'>
      <img className="w-full lg:w-1/2 mr-9 rounded-lg " src="Youtube.png" alt="" />
      <div className="text-lg">
        <h1 className="text-2xl">Youtube Clone</h1>
        <p>I developed a frontend clone of YouTube, incorporating advanced 
        features like nested comments and live chat. The search functionality,
         optimized with suggestions and debouncing, improves user experience,
          while an n-level nested comments system supports dynamic discussions.
           Using Redux Toolkit, I integrated a simulated live chat feature and 
           a suggested videos feature to enhance user engagement. The tech stack
            includes React, Tailwind CSS, Rapid API, and Redux Toolkit for efficient 
            state management and performance optimization.</p>
          <div className="flex mx-auto "> 
          <div className="mr-10 px-3">
            <img className="h-10 mx-auto" src="github-logo-icon-16158.png" alt="source code" />
            <a href="https://github.com/mohitkumar1718/youtube-clone" target="_blank" className="text-sm bg-green-600 p-2 rounded-xl cursor-pointer">Source Code</a>
          </div>
          <div>
            <img className="h-9 mb-1 mx-auto" src="website.png" alt="website" />
            <a href="https://youtube-clone-topaz-one.vercel.app/" target="_blank" className="text-sm p-2 px-4 rounded-xl bg-green-600 cursor-pointer">Live Project</a>
          </div>
          </div>
          
      </div>
    </motion.div>
    </>
  )
}

export default Project