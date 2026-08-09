import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>NorthPeak Digital</h3>
          <p>Building modern digital experieces that help businesses grow.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>hello@northpeakdigital.com</p>
          <p>+91 9876543210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 NorthPeak Digital. All rights reserved.</p>

        <p>
          Built for{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
          >
            Digital Heroes Training Task
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
