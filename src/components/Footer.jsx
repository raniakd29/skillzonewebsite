"use client"
import { Link } from 'react-router-dom';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Footer.css";

function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="footer">
      <div className="footer-links">

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
       >
       <Link to="/about" className="footer-link">About Us</Link>
      </motion.div>


      <motion.a
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      href="/terms.html" // ✅ this is the key change
      className="footer-link"
     target="_blank" // optional: open in new tab
     rel="noopener noreferrer" // security best practice
     >
     Terms of Service
      </motion.a>

      </div>
    </footer>
  );
};

export default Footer;
