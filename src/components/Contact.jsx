// src/components/Contact.jsx

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css'; // We will create this file next
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // === IMPORTANT: Replace 'YOUR_FORM_ID' with the ID you got from Formspree ===
  const [state, handleSubmit] = useForm('YOUR_FORM_ID');

  if (state.succeeded) {
    return (
      <section id="contact">
        <div className="success-message">
          <h3>Thanks for your message!</h3>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm currently open to new opportunities and collaborations. Feel free to send me a message, and I'll get back to you.
          </p>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <a href="mailto:youremail@example.com">aniketgujar245@gmail.com</a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Shegaon, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="error-message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="error-message"
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;