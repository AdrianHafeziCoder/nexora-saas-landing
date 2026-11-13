import React from "react";
import { Quote, Star } from "lucide-react";

/**
 * Display customer stories from the testimonials data array.
 */
export default function Testimonials({ items = [] }) {
  return (
    <section className="section container" id="reviews">
      <div className="section-heading" data-reveal><span className="eyebrow">GOOD WORDS, REAL MOMENTUM</span><h2>Don't just take<br /><span className="gradient-text">our word for it.</span></h2></div>
      <div className="testimonial-grid">{items.map((item, index) => <article className="testimonial-card" data-reveal key={item.id ?? index}><div className="testimonial-card__top"><Quote size={22} /><div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star size={13} fill="currentColor" key={i} />)}</div></div><p className="testimonial-quote">“{item.quote}”</p><div className="testimonial-author"><div className="author-avatar">{item.initials || item.name?.slice(0, 1) || "N"}</div><div><strong>{item.name}</strong><small>{item.role}</small></div></div></article>)}</div>
    </section>
  );
}
