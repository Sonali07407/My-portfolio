import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-description">
            Have a project in mind? Let's work together! I'm always open to discussing new opportunities.
          </p>
          <div className="contact-details">
            <div className="detail-item">
              <strong>Email:</strong> sonalisurwade07@gmail.com
            </div>
            <div className="detail-item">
              <strong>Location:</strong> Shegaon, India
            </div>
            <div className="detail-item">
              <strong>Available:</strong> For freelance work
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="form-input"
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          
          {isSubmitted && (
            <div className="success-message">
              Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;