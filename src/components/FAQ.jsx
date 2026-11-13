import React, { useState } from "react";
import { Plus } from "lucide-react";

/**
 * Accessible FAQ accordion driven by the supplied question-and-answer array.
 */
export default function FAQ({ items = [] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? null);

  // Keep only one answer expanded at a time.
  const toggleItem = (id) => setActiveId((current) => current === id ? null : id);

  return (
    <section className="section container faq-section" id="faq">
      <div className="section-heading" data-reveal><span className="eyebrow">QUESTIONS, ANSWERED</span><h2>Curious? <span className="gradient-text">Good.</span></h2><p>A few things you might want to know before getting started.</p></div>
      <div className="faq-list" data-reveal>{items.map((item) => {
        const isOpen = activeId === item.id;
        return <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={item.id}><h3><button onClick={() => toggleItem(item.id)} aria-expanded={isOpen} aria-controls={`faq-answer-${item.id}`}>{item.question}<span><Plus size={18} /></span></button></h3>{isOpen && <div className="faq-answer" id={`faq-answer-${item.id}`}><p>{item.answer}</p></div>}</article>;
      })}</div>
    </section>
  );
}
