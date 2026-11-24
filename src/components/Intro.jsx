import "./Intro.css"
import { Button } from "@mui/material"
import { motion } from "framer-motion"
import profileImage from "../assets/profile.png"

function Intro({ onFinish }) {
  return (
    <motion.div
      className="intro"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={profileImage}
        alt="Portrait of Deepak"
        className="intro-image"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Hi 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        I'm Deepak, an aeronautical engineering student passionate about
        software, technology, and aviation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <Button
          variant="contained"
          onClick={onFinish}
          className="intro-button"
        >
          Enter Portfolio
        </Button>
      </motion.div>
    </motion.div>
  )
}

export default Intro