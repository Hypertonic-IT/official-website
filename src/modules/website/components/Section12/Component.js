import React from 'react';
import '../Section10/component.css';

const Section12 = () => {
  return (
    <div className="svc-intro" style={{ paddingTop: '0px', borderBottom: 'none' }}>
      <div className="svc-intro-inner">
        <div className="svc-details">
          <h3 className="svc-intro-title">Our Website Development Services Include:</h3>

          <div className="svc-feature">
            <h4>Custom Website Design</h4>
            <p className="svc-intro-body">We specialize in creating bespoke website designs that reflect your brand identity and resonate with your target audience to create a visually captivating website that sets you apart.</p>
          </div>

          <div className="svc-feature">
            <h4>Backend Development</h4>
            <p className="svc-intro-body">Our team of backend developers possesses expertise in a wide range of programming languages and frameworks, allowing us to build robust and scalable backend systems.</p>
          </div>

          <div className="svc-feature">
            <h4>E-commerce Solutions</h4>
            <p className="svc-intro-body">We offer end-to-end e-commerce solutions, from customizing existing platforms like Shopify and WooCommerce to developing bespoke e-commerce websites tailored to your specific requirements.</p>
          </div>

          <div className="svc-feature">
            <h4>CMS Solutions</h4>
            <p className="svc-intro-body">We empower our clients with easy-to-use content management systems that allow them to update and manage their website content effortlessly (WordPress, Joomla, Drupal).</p>
          </div>

          <div className="svc-feature">
            <h4>Maintenance and Support</h4>
            <p className="svc-intro-body">Our commitment to client satisfaction extends beyond development. We offer ongoing maintenance and support services to ensure that your website remains secure, optimized, and up-to-date.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section12;
