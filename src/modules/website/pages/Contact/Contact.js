import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Section21 from "../../components/Section21/Component";
import Section5 from "../../components/Section5/Component";
import Section23 from "../../components/Section23/Component";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Hypertonic IT Solutions - Start Your Project</title>
        <meta name="description" content="Ready to start your digital journey? Contact Hypertonic IT Solutions today. We're here to discuss your project ideas and provide expert consultation." />
        <meta name="keywords" content="Contact Hypertonic IT, IT Consultation, Hire Developers, Web Agency Contact, Start a Project" />
        <link rel="canonical" href="https://hypertonic.co.in/contact" />
        <meta property="og:title" content="Contact Us | Hypertonic IT Solutions - Start Your Project" />
        <meta property="og:url" content="https://hypertonic.co.in/contact" />
      </Helmet>
      <Nav />
      <main>
        <Section21 />
        <Section5 />
        <Section23 />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
