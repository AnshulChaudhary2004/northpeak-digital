import "../styles/Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for small businesses getting started online.",
    features: [
      "5 Website Pages",
      "Responsive Design",
      "Basic SEO",
      "Contact Form",
    ],
  },
  {
    name: "Professional",
    price: "₹19,999",
    description: "For growing businesses that need a stronger online presence.",
    features: [
      "10 Website Pages",
      "Responsive Design",
      "Advanced SEO",
      "Contact Form",
      "Social Media Integration",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "₹39,999",
    description: "A complete digital solution for established businesses.",
    features: [
      "Unlimited Pages",
      "Advanced SEO",
      "E-Commerce Support",
      "Analytics Integration",
      "Priority Support",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <h2>Simple, Transparent Pricing</h2>

      <p className="pricing-subtitle">
        Choose the plan that best fits your business.
      </p>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            className={`pricing-card ${plan.popular ? "popular-plan" : ""}`}
            key={plan.name}
          >
            {plan.popular && (
              <span className="popular-badge">Most Popular</span>
            )}

            <h3>{plan.name}</h3>

            <div className="price">{plan.price}</div>

            <p>{plan.description}</p>

            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <button className="pricing-btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
