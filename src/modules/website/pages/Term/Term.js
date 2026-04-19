import React from "react";
import { Helmet } from 'react-helmet-async';
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Section24 from "../../components/Section24/Component";

const Software = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Hypertonic IT Solutions</title>
        <meta name="description" content="Read our terms of service to understand the guidelines and rules for using Hypertonic IT Solutions' website and services." />
        <link rel="canonical" href="https://hypertonic.co.in/term" />
      </Helmet>
      <Nav />
      <main>
        <Section24 />
      </main>
      <Footer />
    </>
  );
};

export default Software;
