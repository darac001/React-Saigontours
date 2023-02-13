import React, { useState } from "react";


const FORM_ENDPOINT = "";

function ContactForm() {
const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <section className="section-center-message">
        <div className="contact-message">Thank you!</div>
        <div className="contact-message">We'll be in touch soon.</div>
      </section>
    );
  }

  return (
    <section className="section services" id="contact">
      <div className="contact-box">
        <div className="left-img">
          
        </div>
        <div className="right">
          <h2 className="contact-tag">Contact us</h2>
          <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="field"
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              className="field"
              required
            />

            <textarea
              placeholder="Your message"
              name="message"
              className="field"
              required
            />

            <button className="btn" type="submit">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


export default ContactForm

