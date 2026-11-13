import React from "react";
import { Activity, Cloud, Layers3, ShieldCheck, Sparkles, Workflow, Zap } from "lucide-react";

const iconMap = { sparkles: Sparkles, chart: Activity, shield: ShieldCheck, workflow: Workflow, zap: Zap, layers: Layers3, cloud: Cloud };

/**
 * Render feature cards from the supplied data array.
 */
export default function Features({ items = [] }) {
  return (
    <section className="section container" id="features">
      <div className="section-heading" data-reveal><span className="eyebrow">BUILT FOR YOUR MOMENTUM</span><h2>Everything clicks<br /><span className="gradient-text">into place.</span></h2><p>Less friction. More focus. A connected set of tools that helps good teams do extraordinary work.</p></div>
      <div className="feature-grid">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon] || Sparkles;
          return <article className="feature-card" data-reveal key={item.id ?? index}><div className="feature-card__icon"><Icon size={21} /></div><h3>{item.title}</h3><p>{item.description}</p><span className="feature-card__number">0{index + 1}</span></article>;
        })}
      </div>
    </section>
  );
}
