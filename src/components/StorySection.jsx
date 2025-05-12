"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import "./StorySection.css"

function StorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="story-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="story-header"
      >
        <h2 className="story-title">The SkillZone Story</h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="story-text"
        >
          <p className="paragraph">
            SkillZone is a modern mobile learning app designed for university students and young professionals who want
            to build new skills, anytime, anywhere.
          </p>
          <p className="paragraph">
            Whether you're preparing for exams, learning a new language or diving into tech topics.
          </p>
          <p>SkillZone is your smart partner...</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="skillzone-info"
      >
        <h3 className="skillzone-logo">
          <span className="logo-white">SKILL</span>
          <span className="logo-green">ZONE</span>
        </h3>

        <div className="skillzone-text">
          <p className="info-line">SkillZone isn't just an app – it's a smart, flexible</p>
          <p className="info-line">and fun way to</p>
          <p className="info-line">grow your knowledge every day.</p>
          <p className="info-line">Learn more. Grow Faster</p>
          <p>Master your future – with SkillZone.</p>
        </div>
      </motion.div>
    </section>
  )
}

export default StorySection
