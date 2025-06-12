import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      style={{
        backgroundColor: 'rgb(10, 28, 48)',
        color: 'white',
        fontFamily: 'roboto',
        padding: '50px 100px',
        maxHeight: '100vh',
        overflowY: 'scroll',
        scrollbarWidth:'none',
      }}
    >
      <motion.h1 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>
        Privacy Policy
      </motion.h1>

      <motion.p variants={fadeInUp}>
        Welcome to our blog website. Your privacy is critically important to us...
      </motion.p>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>1. Information We Collect</motion.h2>
      <motion.ul variants={fadeInUp}>
        <li>Personal Information (e.g., name, email)</li>
        <li>Account Credentials</li>
        <li>Usage Data</li>
        <li>Device Information</li>
      </motion.ul>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>2. How We Use Your Information</motion.h2>
      <motion.ul variants={fadeInUp}>
        <li>Personalize content</li>
        <li>Improve user experience</li>
        <li>Respond to inquiries</li>
        <li>Send newsletters (opt-in)</li>
      </motion.ul>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>3. Cookies & Tracking</motion.h2>
      <motion.p variants={fadeInUp}>
        We use cookies to store preferences and analyze traffic. You can disable them anytime.
      </motion.p>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>4. Data Sharing</motion.h2>
      <motion.p variants={fadeInUp}>
        We do not sell your data. We may share data with trusted third-party services...
      </motion.p>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>5. Your Rights</motion.h2>
      <motion.ul variants={fadeInUp}>
        <li>Access and correct your data</li>
        <li>Request deletion</li>
        <li>Withdraw consent</li>
      </motion.ul>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>6. Third-Party Links</motion.h2>
      <motion.p variants={fadeInUp}>
        We’re not responsible for external sites linked through our platform.
      </motion.p>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>7. Security</motion.h2>
      <motion.p variants={fadeInUp}>
        We implement secure protocols, but no system is 100% secure.
      </motion.p>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>8. Changes</motion.h2>
      <motion.p variants={fadeInUp}>
        Policy updates will be posted here and may be notified via email.
      </motion.p>

      <motion.h2 variants={fadeInUp} style={{ color: 'rgb(128, 164, 206)' }}>9. Contact</motion.h2>
      <motion.p variants={fadeInUp}>
        For questions, visit our <span onClick={() => navigate('/contact')} style={{ color: 'rgb(128, 164, 206)', cursor: 'pointer' }}>Contact</span> page.
      </motion.p>

      <motion.button
        variants={fadeInUp}
        onClick={() => navigate('/')}
        style={{
          marginTop: 40,
          padding: '10px 25px',
          borderRadius: 10,
          backgroundColor: 'transparent',
          border: '1px solid white',
          color: 'white',
          cursor: 'pointer',
          fontFamily: 'roboto'
        }}
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
};

export default Privacy;
