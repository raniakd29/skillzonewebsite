import { Link } from 'react-router-dom';
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Logo from "../components/Logo";
import "./terms.css";

function TermsPage() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="terms-container" ref={ref}>
      <motion.nav 
        className="terms-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="back-button">← Back to Home</Link>
      </motion.nav>
      
      <motion.div
        className="terms-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo className="terms-logo" />
        <h1>Terms of Service</h1>
        <p className="last-updated"><strong>Last updated:</strong> 12/05/2025</p>
      </motion.div>

      <div className="terms-content">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2>Welcome to SkillZone!</h2>
          <p>
            By downloading, accessing, or using our application, you agree to be bound by these Terms of Service.
            If you do not agree, please do not use the app.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>1. Use of the App</h2>
          <p>
            SkillZone is provided for your personal, non-commercial use.
            You agree not to misuse the app, copy our content, attempt to hack the app, or use it for any illegal purposes.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>2. User Accounts</h2>
          <p>
            You are responsible for maintaining the security of your account.
            SkillZone is not liable for any loss or damage caused by unauthorized access to your account.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2>3. Content Ownership</h2>
          <p>
            All courses, videos, texts, logos, and designs available on SkillZone are the property of SkillZone and its creators.
            You may not copy, distribute, modify, or resell any content without our written permission.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2>4. Payments and Refunds</h2>
          <p>
            Payments for courses are final. SkillZone does not offer refunds unless required by law.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2>5. Limitation of Liability</h2>
          <p>
            SkillZone is provided "as is" and "as available."
            We do our best to offer a great service, but we are not responsible for any bugs, interruptions, data loss, or other issues that may occur.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2>6. Changes to These Terms</h2>
          <p>
            We may update our Terms of Service from time to time.
            Any changes will be posted in the app. Your continued use of SkillZone after updates means you accept the new Terms.
          </p>
        </motion.section>
      </div>
      
      <motion.div 
        className="terms-footer"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p>If you have any questions about these Terms, please contact us at <a href="mailto:support@skillzone.app" className="contact-link">support@skillzone.app</a></p>
      </motion.div>
    </div>
  );
}

export default TermsPage;
