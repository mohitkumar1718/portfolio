
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className=' bg-[url("../public/background.svg")] bg-center bg-cover bg-no-repeat bg-fixed overflow-x-hidden '>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
