import "../styles/Hero.css";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/hero.svg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h1>Grow your business with Modern Digital Solutions</h1>
        <p>
          We build modern websites and digital experiences that help businesses
          attract more customers and grow online.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started <FaArrowRight />
          </button>
          <button className="secondary-btn">Our Services</button>
        </div>
      </div>
      <div className="hero-right">
        <img
          src={HeroImage}
          alt="Digital Agency Illustration"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
