import React, { useState } from "react";
import ServiceCard from "../components/ServiceCard";

function Services() {

  const [search, setSearch] = useState("");

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web Development",
      description:
        "Modern, responsive and user-friendly websites designed for businesses and organizations."
    },
    {
      id: 2,
      icon: "📱",
      title: "Application Development",
      description:
        "User-friendly applications built to solve real-world business requirements."
    },
    {
      id: 3,
      icon: "🎨",
      title: "UI / UX Design",
      description:
        "Clean and intuitive interfaces focused on usability and better user experience."
    },
    {
      id: 4,
      icon: "⚙️",
      title: "Software Solutions",
      description:
        "Customized software solutions designed according to specific business requirements."
    },
    {
      id: 5,
      icon: "🔧",
      title: "Website Maintenance",
      description:
        "Regular updates, improvements, maintenance and technical support for your website."
    },
    {
      id: 6,
      icon: "🚀",
      title: "Digital Solutions",
      description:
        "Modern digital solutions that help businesses improve productivity and growth."
    }
  ];


  // Search services
  const filteredServices = services.filter((service) =>
    service.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (

    <main className="page services-page">

      {/* ================= HEADER ================= */}

      <section className="services-hero">

        <div className="section-heading">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h1>
            What We Offer
          </h1>

          <p>
            Explore our professional digital services
            designed to help businesses grow and succeed.
          </p>

        </div>

      </section>


      {/* ================= SEARCH ================= */}

      <div className="service-search">

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search services..."
        />

      </div>


      {/* ================= SERVICES ================= */}

      <section className="services-container">

        {filteredServices.length > 0 ? (

          <div className="service-grid">

            {filteredServices.map((service) => (

              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />

            ))}

          </div>

        ) : (

          <div className="no-services">

            <h3>
              No services found
            </h3>

            <p>
              Try searching for another service.
            </p>

          </div>

        )}

      </section>


      {/* ================= CTA ================= */}

      <section className="cta">

        <div>

          <h2>
            Need a Custom Solution?
          </h2>

          <p>
            Tell us about your project and
            let's build something together.
          </p>

        </div>

        <a
          href="/contact"
          className="btn cta-btn"
        >
          Contact Us
        </a>

      </section>

    </main>
  );
}

export default Services;