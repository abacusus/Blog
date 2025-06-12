import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
    style={{
      height: '100vh',         // Full screen height
      overflowY: 'scroll',     // Enable vertical scroll
      backgroundColor: '#f0f0f0',
    }}>
          <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        fontFamily: 'Segoe UI, sans-serif',
        padding: '2rem',
        backgroundColor: '#f9fafc',
        minHeight: '100vh',
        overflowY: 'auto',
        color: '#333'
      }}
    >
      {/* HEADER */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#1f2937',
          textAlign: 'center'
        }}
      >
        Welcome to Our Blog
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          textAlign: 'center',
          marginBottom: '2rem'
        }}
      >
        Our blog is a digital garden for creators, developers, designers, and lifelong learners. We believe in the power of storytelling, clear explanations, and practical advice to make the web—and the world—a better place.
      </motion.p>

      {/* OUR STORY */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
          maxWidth: '900px',
          margin: '2rem auto'
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Story</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.8' }}>
          It started with a simple idea: to write down the things we were learning. Over time, it grew into a platform with thousands of readers from all over the world. From late-night code sessions to early-morning brainstorming meetings, this blog has been a labor of love and learning.
        </p>
        <p style={{ fontSize: '1rem', marginTop: '1rem' }}>
          We've built this space to be more than just a resource—it’s a community hub for curious minds. Whether you're diving into your first project or shipping your hundredth, you're welcome here.
        </p>
      </motion.section>

      {/* CORE VALUES */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        style={{
          backgroundColor: '#eef2f7',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '900px',
          margin: '2rem auto'
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Core Values</h2>
        <ul style={{ lineHeight: '2', paddingLeft: '1.2rem' }}>
          <li><strong>Clarity:</strong> Break down complexity with plain language and visuals.</li>
          <li><strong>Creativity:</strong> Explore and encourage experimentation in every form.</li>
          <li><strong>Community:</strong> Uplift each other through respectful dialogue and shared wisdom.</li>
          <li><strong>Consistency:</strong> Show up, share often, and stay curious.</li>
        </ul>
      </motion.section>

      {/* MEET THE TEAM */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '12px',
          maxWidth: '900px',
          margin: '2rem auto',
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
        }}
      >
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Meet the Team</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Alex', 'Jamie', 'Priya', 'Carlos'].map((name, i) => (
            <motion.div
              key={name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.2 }}
              style={{
                backgroundColor: '#f0f4f8',
                padding: '1rem',
                borderRadius: '8px',
                width: '200px',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#cbd5e1',
                margin: '0 auto 1rem',
              }}></div>
              <strong>{name}</strong>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#555' }}>Content Creator</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CALL TO ACTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join the Journey</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: '600px', margin: '0 auto' }}>
          Subscribe to our newsletter, follow us on socials, or drop us a message. Let’s learn, grow, and build together.
        </p>
        <button
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#3b82f6',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Subscribe
        </button>
      </motion.div>
    </motion.div>

    </div>
  )
};

export default About;
