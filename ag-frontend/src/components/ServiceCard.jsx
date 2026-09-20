import React from "react";
import { Link } from "react-router-dom";

function ServiceCard({
  icon,
  title,
  description
}) {

  return (

    <div className="home-service-card">

      <div className="service-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <Link to="/contact">
        Get Service →
      </Link>

    </div>
  );
}

export default ServiceCard;