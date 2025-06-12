import React, { useState } from 'react';
import diamond from './diamond.mp4';
import { scroll } from 'framer-motion';

const Membership = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [hoverButton, setHoverButton] = useState(false);

  return (
<div
  style={{
    fontFamily: 'roboto',
    color: 'white',
    overflowX: 'hidden',
    height: '100vh',
    overflowY: 'scroll',
    position: 'relative',
  }}
>
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        src={diamond}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
          opacity: 0.1,
        }}
      />
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(10, 28, 48, 0.9)',
          zIndex: 0,
        }}
      />

      {/* Page Container */}
      <div style={{ position: 'relative', zIndex: 1, padding: '50px 10%' }}>
        {/* Intro Section */}
        <section style={{ marginBottom: 100, textAlign: 'center' }}>
          <h1 style={{ fontSize: 48, marginBottom: 10 }}>Welcome to Membership</h1>
          <p style={{ fontSize: 18, maxWidth: 800, margin: '0 auto' }}>
            Join thousands of readers and writers who enjoy premium content, early access, and the power to shape the community.
          </p>
        </section>

        {/* Benefits Section */}
        <section style={{ marginBottom: 100 }}>
          <h2 style={{ fontSize: 36, marginBottom: 30 }}>Why Become a Member?</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
            {[
              'Enjoy ad-free reading across the entire platform.',
              'Get early access to exclusive articles and series.',
              'Support independent writers and get featured newsletters.',
              'Join writing workshops and member-only events.',
              'Comment, bookmark, and personalize your reading list.',
            ].map((benefit, index) => (
              <div key={index} style={{ fontSize: 18, lineHeight: 1.6 }}>
                ✅ {benefit}
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section style={{ marginBottom: 100 }}>
          <h2 style={{ fontSize: 36, marginBottom: 30, textAlign: 'center' }}>Choose Your Plan</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap' }}>
            {[
              { name: 'Basic', price: '$5/mo', features: ['Ad-Free Reading', 'Bookmark Articles'] },
              { name: 'Premium', price: '$10/mo', features: ['All Basic Features', 'Early Access', 'Newsletters'] },
              { name: 'Pro', price: '$20/mo', features: ['All Premium Features', 'Submit Stories', 'Attend Events'] },
            ].map((plan, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid white',
                  borderRadius: 20,
                  padding: 30,
                  width: 250,
                  transition: 'transform 0.3s',
                  transform: hoveredPlan === index ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <h3 style={{ color: 'rgb(128, 164, 206)', fontSize: 24 }}>{plan.name}</h3>
                <p style={{ fontSize: 20, margin: '10px 0' }}>{plan.price}</p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {plan.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: 100 }}>
          <h2 style={{ fontSize: 36, marginBottom: 30, textAlign: 'center' }}>What Members Say</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {[
              { name: 'Aditi M.', quote: 'This platform reignited my love for reading and writing. The premium content is totally worth it!' },
              { name: 'Rahul K.', quote: 'As a writer, the Pro membership has helped me grow my audience and connect with fellow authors.' },
              { name: 'Sara J.', quote: 'Ad-free reading is such a game changer. I read every night thanks to this!' },
            ].map((testimonial, index) => (
              <div key={index} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: 20, borderRadius: 10 }}>
                <p style={{ fontStyle: 'italic', fontSize: 16 }}>"{testimonial.quote}"</p>
                <p style={{ marginTop: 10, fontWeight: 'bold' }}>— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final Call to Action */}
        <section style={{ textAlign: 'center', marginBottom: 100 }}>
          <h2 style={{ fontSize: 36, marginBottom: 20 }}>Ready to Elevate Your Experience?</h2>
          <button
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
            style={{
              borderRadius: 10,
              padding: '15px 40px',
              fontSize: 16,
              color: 'white',
              backgroundColor: hoverButton ? 'rgb(128, 164, 206)' : 'transparent',
              border: '1px solid white',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease-in-out',
            }}
          >
            Join Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Membership;
