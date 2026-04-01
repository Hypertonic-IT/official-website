import React from 'react';
import '../Section10/component.css';

const SoftwareDevelopmentServices = () => {
  return (
    <div className="svc-intro" style={{ paddingTop: '0px', borderBottom: 'none' }}>
      <div className="svc-intro-inner">
        <div className="svc-details">
          <h3 className="svc-intro-title">Our Software Development Services Include:</h3>

          <div className="svc-feature">
            <h4>Custom Software</h4>
            <p className="svc-intro-body">Whether you need a standalone desktop application, a web-based app, or a mobile app, we have the expertise to develop custom software solutions that drive growth.</p>
          </div>

          <div className="svc-feature">
            <h4>Enterprise Solutions</h4>
            <p className="svc-intro-body">We specialize in developing enterprise-level software solutions that help businesses streamline their operations. From CRM to ERP, we have the experience it takes.</p>
          </div>

          <div className="svc-feature">
            <h4>Database Management</h4>
            <p className="svc-intro-body">We offer comprehensive database management services to help businesses organize, store, and retrieve their data efficiently from implementation and design to optimization.</p>
          </div>

          <div className="svc-feature">
            <h4>Integration & Migration</h4>
            <p className="svc-intro-body">We perfectly integrate existing systems or seamlessly migrate to new platforms, ensuring smooth transition for your IT infrastructure without compromising any functionality.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SoftwareDevelopmentServices;
