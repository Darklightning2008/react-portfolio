import "./Home.css"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import profileImage from "../assets/profile.png"

const MotionLink = motion(Link)

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <motion.p
            className="hero-small"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Deepak
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Aeronautical Engineering Student | Software Enthusiast
          </motion.h2>

          <motion.p
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Welcome to my portfolio, where I share my projects, certifications,
            and journey as an aeronautical engineering student exploring
            software and technology.
          </motion.p>

          <MotionLink
            to="/contact"
            className="hero-button"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </MotionLink>

          <div className="social-links">
            <motion.a
              href="https://github.com/Darklightning2008"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/deepak-s-a04a04434"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.25 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>

            <motion.a
              href="mailto:sdeepak.inbox@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
          </div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src={profileImage}
            alt="Portrait of Deepak"
            className="hero-image"
          />
        </motion.div>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <p>
          I am an aeronautical engineering student with a strong interest in
          aviation, software development, and emerging technologies. I enjoy
          understanding how systems work, building practical applications, and
          continuously learning new tools. My goal is to combine my engineering
          background with computer science to create useful and meaningful
          solutions.
        </p>

        <div className="skills">
          <span>React</span>
          <span>Python</span>
          <span>JavaScript</span>
          <span>C/C++</span>
        </div>
      </section>
    </>
  )
}

export default Home