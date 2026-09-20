import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [name]: ""
    });
  };


  // Validate form
  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters";
    }

    return newErrors;
  };


  // Submit form
  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);
      setSuccess("");

      return;
    }

    // Success
    setSuccess("✓ Message sent successfully!");

    setErrors({});

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };


  return (

    <main className="page">

      <div className="contact-container">

        {/* ================= CONTACT INFORMATION ================= */}

        <div className="contact-info">

          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h1>
            Contact AG
          </h1>

          <p>
            Have a project or idea?
            Send us a message and we'll
            get back to you.
          </p>


          {/* Email */}

          <div className="contact-detail">

            <strong>
              Email
            </strong>

            <a href="mailto:agaykar47@gmail.com">
              agaykar47@gmail.com
            </a>

          </div>


          {/* Phone */}

          <div className="contact-detail">

            <strong>
              WhatsApp
            </strong>

            <a href="tel:8010039933">
              8010039933
            </a>

          </div>


          {/* Working Hours */}

          <div className="contact-detail">

            <strong>
              Working Hours
            </strong>

            <p>
              Monday - Saturday
            </p>

            <p>
              9:00 AM - 6:00 PM
            </p>

          </div>

        </div>


        {/* ================= CONTACT FORM ================= */}

        <div className="contact-form">

          <h2>
            Send a Message
          </h2>


          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />

              {errors.name && (
                <small className="error">
                  {errors.name}
                </small>
              )}

            </div>


            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
              />

              {errors.email && (
                <small className="error">
                  {errors.email}
                </small>
              )}

            </div>


            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
              />

              {errors.message && (
                <small className="error">
                  {errors.message}
                </small>
              )}

            </div>


            {/* Success message */}

            {success && (
              <p className="success">
                {success}
              </p>
            )}


            {/* Submit */}

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div>

          <h2>
            Let's Build Something Together
          </h2>

          <p>
            Have an idea? We would love to hear about it.
          </p>

        </div>

        <Link
          to="/services"
          className="btn cta-btn"
        >
          Explore Services
        </Link>

      </section>

    </main>
  );
}

export default Contact;