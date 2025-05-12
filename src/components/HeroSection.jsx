"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import "./HeroSection.css"

function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="hero-section">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-content"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="logo-wrapper"
          >
            <img
              src="./image.png"
              alt="Person with blue shirt"
              className="person-image"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="features"
          >
            <p className="feature">
              Watch <span className="highlight">Free</span> Soft Skills Courses
            </p>
            <p className="feature">
              Gain <span className="highlight">Points</span> for Learning
            </p>
            <p className="feature">
              Access <span className="highlight">Advanced</span> Courses
            </p>
          </motion.div>
        </motion.div>

      
           
           </div>
           

           
    </section>
  );
};

export default HeroSection;
