import React from 'react';
import { useNavigate } from 'react-router-dom';
import box from './box.mp4';

const Help = () => {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'auto' }}>
      {/* Background Video */}
      <video autoPlay muted loop src={box} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.2,
        zIndex: 2
      }} />

      {/* Dark Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(10, 28, 48)',
        zIndex: 1
      }}></div>

      {/* Scrollable Content */}
      <div style={{ width:"85%",position: 'absolute', zIndex: 2, padding: '40px 100px', color: 'white', fontFamily: 'roboto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <h1 style={{ color: 'rgb(128, 164, 206)' }}>Help Center</h1>
          <button onClick={() => navigate('/')} style={{
            borderRadius: 10,
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: '10px 20px'
          }}>
            Back to Home
          </button>
        </div>

        <hr style={{ height: 1, backgroundColor: 'black' }} />

        {/* Help Sections */}
        <div style={{
          padding: '40px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 30
        }}>
          <h2 style={{ color: 'rgb(128, 164, 206)' }}>How can we help?</h2>

          <div>
            <h3>📖 Using the Blog</h3>
            <p>Learn how to navigate, read, and interact with articles on our platform.</p>
          </div>

          <div>
            <h3>✍️ Writing Your Own Stories</h3>
            <p>Sign up and start sharing your unique experiences and insights.</p>
          </div>

          <div>
            <h3>🔐 Account & Membership</h3>
            <p>Everything you need to know about managing your account and subscription.</p>
          </div>

          <div>
            <h3>📬 Contact Support</h3>
            <p>Still need help? Reach out via our <span
              style={{ color: 'rgb(128, 164, 206)', cursor: 'pointer' }}
              onClick={() => navigate('/contact')}
            >Contact Us</span> page.</p>
          </div>
        </div>

        <hr style={{ height: 1, backgroundColor: 'black' }} />

        {/* Footer */}
        <div style={{
          paddingTop: 25,
          paddingBottom: 25,
          display: 'flex',
          justifyContent: 'center',
          gap: 30,
          backgroundColor: 'rgb(9, 52, 76)'
        }}>
          <p style={{ fontWeight: 700, cursor: 'pointer', color: 'rgb(128, 164, 206)' }} onClick={() => navigate('/help')}>Help</p>
          <p style={{ fontWeight: 700, cursor: 'pointer', color: 'rgb(128, 164, 206)' }} onClick={() => navigate('/about')}>About</p>
          <p style={{ fontWeight: 700, cursor: 'pointer', color: 'rgb(128, 164, 206)' }}>Privacy Policy</p>
          <p style={{ fontWeight: 700, cursor: 'pointer', color: 'rgb(128, 164, 206)' }}>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
