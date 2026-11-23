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
        className='hero-role'>Aeronautical Engineering Student & Tech Enthusiast</motion.h2>
        <motion.p
        initial={{opacity: 0, y:40}}
        animate={{opacity: 1, y: 0}}
        transition={{ duration: 1,delay:0.6 }}
        className='hero-text'>Here is a short and sweet introduction to my portfolio, Where you can find my projects, certificates, and the journey behind them.
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
    <p>I'm a passionate aeronautical engineering student with a keen interest in aviation and technology. I love exploring the intricacies of flight and the software that powers it. My journey in this field has been driven by curiosity and a desire to contribute to the world of aerospace. Other than this I have a huge interest in the field of Computer science as well.</p>
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