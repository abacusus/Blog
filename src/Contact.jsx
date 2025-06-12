import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! 🚀');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ overflowY:"scroll", fontFamily: 'roboto', backgroundColor: '#0a1c30', minHeight: '100vh', color: '#80a4ce', padding: '50px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: 'white' }}>Contact Us</h1>
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

      {/* Animated Form */}
      <form onSubmit={handleSubmit} style={{
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        maxWidth: 600,
        backgroundColor: '#112d4e',
        padding: 30,
        borderRadius: 15,
        animation: 'fadeIn 1s ease'
      }}>
        <label style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              marginTop: 5,
              padding: 10,
              borderRadius: 8,
              border: '1px solid #80a4ce',
              backgroundColor: '#0f2b45',
              color: 'white',
              outline: 'none',
              transition: 'transform 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.transform = 'scale(1.02)')}
            onBlur={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              marginTop: 5,
              padding: 10,
              borderRadius: 8,
              border: '1px solid #80a4ce',
              backgroundColor: '#0f2b45',
              color: 'white',
              outline: 'none',
              transition: 'transform 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.transform = 'scale(1.02)')}
            onBlur={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            style={{
              marginTop: 5,
              padding: 10,
              borderRadius: 8,
              border: '1px solid #80a4ce',
              backgroundColor: '#0f2b45',
              color: 'white',
              outline: 'none',
              resize: 'vertical',
              transition: 'transform 0.3s ease',
            }}
            onFocus={(e) => (e.target.style.transform = 'scale(1.02)')}
            onBlur={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </label>

        <button type="submit" style={{
          borderRadius: 10,
          padding: '12px 20px',
          backgroundColor: '#80a4ce',
          color: '#0a1c30',
          fontWeight: 'bold',
          border: 'none',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
        >
          Send Message
        </button>
      </form>

      {/* Footer */}
      <div style={{
        marginTop: 50,
        paddingTop: 25,
        paddingBottom: 25,
        display: 'flex',
        justifyContent: 'center',
        gap: 30,
        backgroundColor: '#09344c',
        borderRadius: 10
      }}>
        <p style={{ fontWeight: 700, cursor: 'pointer' }} onClick={() => navigate('/help')}>Help</p>
        <p style={{ fontWeight: 700, cursor: 'pointer' }} onClick={() => navigate('/about')}>About</p>
        <p style={{ fontWeight: 700, cursor: 'pointer' }}>Privacy Policy</p>
        <p style={{ fontWeight: 700, cursor: 'pointer' }}>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Contact;
