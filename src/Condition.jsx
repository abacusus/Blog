import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Condition = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div style={{
      fontFamily: 'roboto',
      backgroundColor: '#0a1c30',
    height: '100vh',
      color: '#80a4ce',
      padding: 50,
      boxSizing: 'border-box',
      overflowY:'scroll',
      scrollbarWidth:'none'

    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#80a4ce', fontSize: 32 }}>Terms & Conditions</h1>
        <button
          onClick={() => navigate('/')}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            borderRadius: 10,
            cursor: 'pointer',
            backgroundColor: hover ? '#80a4ce' : 'transparent',
            border: '1px solid white',
            color: 'white',
            padding: 10,
            transition: 'background-color 0.3s ease'
          }}
        >
          Back to Home
        </button>
      </div>

      {/* Terms Content */}
      <div style={{
        marginTop: 40,
        backgroundColor: '#112d4e',
        padding: 30,
        borderRadius: 15,
        boxShadow: '0 0 25px rgba(128, 164, 206, 0.3)',
        lineHeight: 1.7,
        animation: 'fadeIn 1s ease-in-out',
        maxHeight: 'calc(100vh - 150px)', // Keeps the content inside a scrollable area
        overflowY: 'auto',  // Enables vertical scrolling
        scrollbarWidth:'none'
      }}>
        <h2 style={{ marginBottom: 20 }}>Introduction</h2>
        <p>
          Welcome to our website! These Terms & Conditions govern your use of our services.
          Please read them carefully to ensure you understand your rights and obligations.
        </p>
        <h2 style={{ marginTop: 40 }}>User Responsibilities</h2>
        <p>
          By accessing and using our website, you agree to comply with our terms of service.
          You are responsible for maintaining the confidentiality of your account and ensuring
          that your use of the site complies with all applicable laws.
        </p>
        <h2 style={{ marginTop: 40 }}>Prohibited Activities</h2>
        <p>
          You are prohibited from engaging in activities that could harm the integrity of our platform,
          including hacking, spamming, or distributing malicious software.
        </p>
        <h2 style={{ marginTop: 40 }}>Privacy and Data Collection</h2>
        <p>
          Our website may collect personal data from users. Please review our Privacy Policy to learn more
          about how we handle your data.
        </p>
        <h2 style={{ marginTop: 40 }}>Limitation of Liability</h2>
        <p>
          We are not liable for any damages or losses arising from your use or inability to use our services.
          You use the website at your own risk.
        </p>
        <h2 style={{ marginTop: 40 }}>Changes to Terms</h2>
        <p>
          We may update these Terms & Conditions from time to time. You are advised to review this page regularly
          for any changes. Continued use of our services constitutes acceptance of those changes.
        </p>
        <h2 style={{ marginTop: 40 }}>Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of the jurisdiction in which
          our company operates.
        </p>
      </div>

      {/* Footer */}
      <div style={{
        paddingTop: 25,
        paddingBottom: 25,
        position: 'relative',
        display: 'flex',
        zIndex: 2,
        justifyContent: 'center',
        gap: 30,
        backgroundColor: 'rgb(9, 52, 76)',
        marginTop: 50
      }}>
        <p style={{ fontWeight: 700, cursor: 'pointer', color: '#80a4ce' }} onClick={() => navigate('/help')}>Help</p>
        <p style={{ fontWeight: 700, cursor: 'pointer', color: '#80a4ce' }} onClick={() => navigate('/about')}>About</p>
        <p style={{ fontWeight: 700, cursor: 'pointer', color: '#80a4ce' }}>Privacy Policy</p>
        <p style={{ fontWeight: 700, cursor: 'pointer', color: '#80a4ce' }}>Terms & Conditions</p>
        <p style={{ fontWeight: 700, cursor: 'pointer', color: '#80a4ce' }}>Contact Us</p>
      </div>
    </div>
  );
};

export default Condition;
