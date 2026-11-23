import './Intro.css'
import {Button} from '@mui/material'
import { motion } from 'framer-motion'
function Intro({onFinish}) {
  return (
    <motion.div exit ={{opacity: 0}}
    transition={{duration: 0.5}}  
     className="intro">
      <motion.h1 
      initial ={{opacity: 0, y: 40}}
      animate ={{opacity: 1, y: 0}}
      transition={{duration: 1}}>Hi 👋</motion.h1>

      <motion.p
      initial ={{opacity: 0}}
      animate ={{opacity: 1}}
      transition={{duration: 1, delay: 0.5}}>I'm Deepak. An Aeronautical Engineering Student with a huge interset in Computer Science</motion.p>
   <Button
  variant="contained"
  onClick={onFinish}
  className="intro-button"
>
  Enter Portfolio
</Button>
    </motion.div>
  )
}

export default Intro
