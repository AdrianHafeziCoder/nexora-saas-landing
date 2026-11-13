import React from "react";
import { ArrowRight, Check } from "lucide-react";

/**
 * Render subscription cards from the pricing data array.
 */
export default function Pricing({ items = [] }) {
  return (
    <section className="section container" id="pricing">
      <div className="section-heading" data-reveal><span className="eyebrow">SIMPLE, HONEST PRICING</span><h2>A plan for your<br /><span className="gradient-text">next big thing.</span></h2><p>Start small, find your rhythm, and scale when you're ready.</p></div>
      <div className="pricing-grid">
        {items.map((plan, index) => <article className={`pricing-card ${plan.highlighted ? "pricing-card--featured" : ""}`} data-reveal key={plan.id ?? index}>
          {plan.highlighted && <span className="popular-label">MOST POPULAR</span>}
          <h3>{plan.name}</h3><p className="pricing-description">{plan.description}</p>
          <div className="price"><strong>${plan.price}</strong><span> / {plan.period || "month"}</span></div>
          <a className={`button ${plan.highlighted ? "" : "button--ghost"}`} href="mailto:hello@example.com">{plan.cta || "Get started"} <ArrowRight size={16} /></a>
          <div className="pricing-divider" /><p className="included-label">WHAT'S INCLUDED</p>
          <ul className="pricing-features">{(plan.features || []).map((feature) => <li key={feature}><Check size={15} /> {feature}</li>)}</ul>
        </article>)}
      </div>
      <p className="pricing-footnote">Sample pricing for template demonstration. Customize before publishing.</p>
    </section>
  );
}
