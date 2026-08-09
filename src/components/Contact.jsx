import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is  required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is  required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is  required.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is  required.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});
    setSuccess("Thanks! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-info">
          <span className="contact-label">LET'S TALK</span>

          <h2>Ready to Grow Your Business?</h2>

          <p>
            Tell us about your project and our team will get back to you
            shortly.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="error-message">{errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
          {success && <p className="success-message">{success}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
