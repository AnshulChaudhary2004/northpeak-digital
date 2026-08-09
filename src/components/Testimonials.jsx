import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, NovaTech",
    review:
      "Northpeak Digital transformed our online presence. Our new website looks incredible and has helped us attract more customers.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, Bloom",
    review:
      "The team understood our vision perfectly and delivered a fast,modern website that our customers love.",
  },
  {
    name: "Rohan Kapoor",
    role: "CEO, Vertex Labs",
    review:
      "Professional, creative, and reliable.Northpeak Digital helped us turn our ideas into a website that actually performs.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <p>"{testimonial.review}"</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.name.charAt(0)}</div>
              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
