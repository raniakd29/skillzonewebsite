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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
