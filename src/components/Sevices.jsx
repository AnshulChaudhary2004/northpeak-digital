import "../styles/Services.css";

import {
  FaLaptopCode,
  FaPenNib,
  FaSearch,
  FaPalette,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Fast, responsive websites built for modern businesses.",
    icon: FaLaptopCode,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean and intuitive designs focused on great user experiences.",
    icon: FaPenNib,
  },
  {
    title: "SEO",
    description: "Strategies that help your business get discovered online,",
    icon: FaSearch,
  },
  {
    title: "Branding",
    description: "Strong visual identities that make your brand memorable.",
    icon: FaPalette,
  },
  {
    title: "E-Commerce",
    description:
      "Scalable online stores designed to convert visitors into customers.",
    icon: FaShoppingCart,
  },
  {
    title: "Website Maintenance",
    description:
      "Reliable updates,improvements, and ongoing technical support.",
    icon: FaTools,
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="services-grid" id="services">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div className="service-card" key={service.title}>
              <div className="service-icon">
                <Icon />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
