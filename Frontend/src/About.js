import React from "react";

function About() {
  return (
    <section className="content-page">
      <div className="content-heading">
        <div><p className="eyebrow">A LITTLE ABOUT US</p><h2>Banking that feels simpler.</h2>        <p>VaultBank is a friendly front-end concept for an easier everyday banking experience in India.</p></div>
      </div>
      <div className="about-grid">
        <article className="panel about-intro">
          <span className="about-mark" aria-hidden="true">V</span>
          <h3>More clarity. Less complexity.</h3>
          <p>This project demonstrates a customer-first online banking interface built with React. Explore the overview, browse sample activity, or manage customer records from the navigation.</p>
          <span className="demo-pill">INTERFACE PREVIEW</span>
        </article>
        <article className="panel about-details">
          <p className="eyebrow">BUILT FOR THIS DEMO</p>
          <h3>Designed with care</h3>
          <ul>
            <li><span aria-hidden="true">✓</span><span><strong>Clear at a glance</strong><small>A focused dashboard for account summaries and activity.</small></span></li>
            <li><span aria-hidden="true">✓</span><span><strong>Easy to navigate</strong><small>Dedicated pages keep key information within reach.</small></span></li>
            <li><span aria-hidden="true">✓</span><span><strong>Responsive by design</strong><small>Comfortable to use on desktop, tablet, and mobile.</small></span></li>
          </ul>
        </article>
      </div>
      <p className="sample-note">VaultBank is a fictional brand. This interface is a demonstration and is not a real financial service.</p>
    </section>
  );
}

export default About;
