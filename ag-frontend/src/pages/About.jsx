import React from "react";

function About() {
  return (
    <div className="about-page">

      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero">

        <div className="about-hero-content">

          <span className="section-tag">
            ABOUT AG
          </span>

          <h1>
            Building Digital
            <span> Solutions That Matter</span>
          </h1>

          <p>
            AG is a modern digital platform focused on
            creating simple, reliable and innovative
            solutions for businesses and individuals.
          </p>

        </div>

      </section>


      {/* ================= WHO WE ARE ================= */}
      <section className="about-content">

        <div className="about-text">

          <span className="section-tag">
            WHO WE ARE
          </span>

          <h2>
            Turning Ideas Into Digital Experiences
          </h2>

          <p>
            At AG, we believe technology should make
            things simpler, faster and more effective.
            Our goal is to transform ideas into useful
            digital experiences.
          </p>

          <p>
            We focus on modern web development,
            application development, UI/UX design
            and customized software solutions.
          </p>

          <p>
            Whether you are starting a new project
            or improving an existing business, AG aims
            to provide practical and user-focused
            digital solutions.
          </p>

        </div>


        {/* AG CARD */}
        <div className="about-card">

          <div className="ag-logo-text">
            AG
          </div>

          <h3>
            Innovation. Simplicity. Growth.
          </h3>

          <p>
            Creating technology solutions
            for a better digital future.
          </p>

        </div>

      </section>


      {/* ================= MISSION / VISION / VALUES ================= */}
      <section className="mission-section">

        <div className="section-heading">

          <span className="section-tag">
            OUR VALUES
          </span>

          <h2>
            What Drives AG
          </h2>

          <p>
            Our work is guided by a simple set
            of principles.
          </p>

        </div>


        <div className="mission-grid">

          {/* Mission */}
          <div className="mission-card">

            <div className="mission-icon">
              🎯
            </div>

            <h3>
              Our Mission
            </h3>

            <p>
              To build simple and effective digital
              solutions that solve real-world problems.
            </p>

          </div>


          {/* Vision */}
          <div className="mission-card">

            <div className="mission-icon">
              🚀
            </div>

            <h3>
              Our Vision
            </h3>

            <p>
              To become a trusted digital technology
              partner for businesses and individuals.
            </p>

          </div>


          {/* Values */}
          <div className="mission-card">

            <div className="mission-icon">
              ⭐
            </div>

            <h3>
              Our Values
            </h3>

            <p>
              Quality, innovation, transparency and
              continuous improvement are at the heart
              of AG.
            </p>

          </div>

        </div>

      </section>


      {/* ================= WHY AG ================= */}
      <section className="about-why">

        <div className="about-why-heading">

          <span className="section-tag">
            WHY AG?
          </span>

          <h2>
            We Focus On What
            Really Matters
          </h2>

        </div>


        <div className="about-points">

          <div className="about-point">

            <strong>01</strong>

            <p>
              <b>User Focused</b>
              <br />
              We design solutions around
              real user requirements.
            </p>

          </div>


          <div className="about-point">

            <strong>02</strong>

            <p>
              <b>Modern Technology</b>
              <br />
              We use modern tools and
              development practices.
            </p>

          </div>


          <div className="about-point">

            <strong>03</strong>

            <p>
              <b>Reliable Solutions</b>
              <br />
              We focus on performance,
              usability and maintainability.
            </p>

          </div>


          <div className="about-point">

            <strong>04</strong>

            <p>
              <b>Continuous Growth</b>
              <br />
              We continuously improve our
              products and services.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta">

        <div>

          <h2>
            Have an idea?
          </h2>

          <p>
            Let's turn your idea into a digital solution.
          </p>

        </div>

        <a
          href="/contact"
          className="btn cta-btn"
        >
          Contact Us
        </a>

      </section>

    </div>
  );
}

export default About;