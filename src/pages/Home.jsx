import './Home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profileImage from "../assets/profile.png"
const MotionLink = motion(Link)
function Home() {
    return(
    <>
<section className="hero">
    <div className="hero-content">
        <p className="hero-small">Hello I'm</p>
        <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1}}
        className='hero-name'>Deepak</motion.h1>
        <motion.h2 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.3}}
        className='hero-role'>Aeronautical Engineering Student | Software Enthusiast</motion.h2>
        <motion.p
        initial={{opacity: 0, y:40}}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 1,delay:0.6 }}
        className='hero-text'>Welcome to my portfolio, where I share my projects, certifications, and journey as an aeronautical engineering student exploring software and technology. 
        </motion.p>
        <MotionLink to="/contact" 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1,delay:0.9}} 
        className='hero-button'>Contact Me</MotionLink>
</div>
 <div className="hero-image-wrapper">
    <img
      src={profileImage}
      alt="Portrait of Deepak"
      className="hero-image"
    />
  </div>
    </section>
<section className='about'>
    <h2>About me </h2>
    <p>I am an aeronautical engineering student with a strong interest in aviation, software development, and emerging technologies. I enjoy understanding how systems work, building practical applications, and continuously learning new tools. My goal is to combine my engineering background with computer science to create useful and meaningful solutions.</p>
<div className='skills'>
    <span>React</span>
    <span>Python</span>
    <span>Javascript</span>
    <span>C/C++</span>
</div>

</section>
    </>
)}
export default Home