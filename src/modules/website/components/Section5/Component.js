import React, { useState } from "react";
import "./component.css";
import { url } from "../../../../lib/lib";
import { motion } from 'framer-motion';

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") setName(value);
    if (id === "email") setEmail(value);
    if (id === "number") setPhone(value);
    if (id === "message") setMessage(value);
  };

  const validateForm = () => {
    if (!name.trim()) {
      alert("Name is required.");
      return false;
    }
    if (!email.trim()) {
      alert("Email is required.");
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert("Invalid email address.");
      return false;
    }
    if (!phone.trim()) {
      alert("Phone number is required.");
      return false;
    } else if (!/^(\+?\d{1,4}[\s-]?)?(\d{10})$/.test(phone)) {
      alert(
        "Phone number must be 10 digits and can include country code like +91."
      );
      return false;
    }
    if (!message.trim()) {
      alert("Message is required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      message,
    };

    try {
      const response = await fetch(url + "/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid top_contact">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <motion.div
              className="row"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={revealVariants}
            >
              <div className="col-sm-12">
                <p className="section-label">Get in touch</p>
                <h2 className="section-title">Contact Us</h2>
                <hr className="heading_line" />
              </div>
            </motion.div>
            <div className="row form_top">
              <motion.div
                className="col-lg-5"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <p className="contact_titel">
                  Ready to take your digital presence to the next level? Let's talk about your project and
                  how we can help you build something extraordinary.
                </p>
                <div className="contact_card">
                  <i className="ri-map-pin-fill"></i>
                  <div>
                    <p className="contact_headIn_g">Our Address</p>
                    <p className="contact_address">
                      Plot No. 5B, Sector - 15A, First Floor, Neelam Ajronda Chowk Metro Station, Faridabad, Haryana 121007
                    </p>
                  </div>
                </div>
                <div className="contact_card">
                  <i className="ri-mail-fill"></i>
                  <div>
                    <p className="contact_headIn_g">Our Mailbox</p>
                    <p className="contact_address">info@hypertonic.co.in</p>
                    <p className="contact_address">hypertonicitsolutions@gmail.com</p>
                  </div>
                </div>
                <div className="contact_card">
                  <i className="ri-phone-fill"></i>
                  <div>
                    <p className="contact_headIn_g">Our Phone</p>
                    <p className="contact_address">+91-8130501014</p>
                    <p className="contact_address">+91-8448532785</p>
                  </div>
                </div>
              </motion.div>
              <div className="col-lg-1"></div>
              <motion.div
                className="col-lg-6 side_padd"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="form_card">
                  <h3 className="redy_get">Ready to Get Started?</h3>
                  <input
                    type="Name"
                    className="contact_form_field"
                    id="name"
                    value={name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                  />
                  <input
                    type="Email"
                    className="contact_form_field"
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Your Email *"
                  />
                  <input
                    type="Phonenumber"
                    className="contact_form_field"
                    id="number"
                    value={phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone No *"
                  />
                  <textarea
                    cols="40"
                    rows="7"
                    className="contact_form_textarea"
                    aria-invalid="false"
                    placeholder="Message..."
                    id="message"
                    value={message}
                    onChange={handleInputChange}
                    name="your-message"
                  ></textarea>
                  <button
                    onClick={handleSubmit}
                    className={`octf-btn octf-btn-light has-spinner btn ${loading ? "btn-loading" : ""
                      }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
