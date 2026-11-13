import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

/**
 * The main hero message and a decorative product-dashboard preview.
 */
export default function Hero() {
  return (
    <section className="hero section container" id="home">
      <div className="hero__content" data-reveal>
        <div className="eyebrow"><Sparkles size={14} /> YOUR NEXT CHAPTER STARTS HERE</div>
        <h1>Make space for<br /><span className="gradient-text">what's next.</span></h1>
        <p className="hero__description">A smarter workspace for ambitious teams. Bring your ideas, people, and progress together — and turn big plans into meaningful momentum.</p>
        <div className="hero__actions">
          <a className="button" href="#pricing">Explore the platform <ArrowRight size={17} /></a>
          <a className="button button--ghost" href="#showcase"><Play size={15} /> See how it works</a>
        </div>
        <div className="hero__proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>K</span></div><p><strong>Built for forward thinkers</strong><br /><span>One clear space to do your best work.</span></p></div>
      </div>

      <div className="hero-visual" data-reveal>
        <div className="orbit orbit--one" /><div className="orbit orbit--two" />
        <div className="dashboard-card">
          <div className="dashboard-card__top"><div className="window-dots"><i /><i /><i /></div><span>WORKSPACE / OVERVIEW</span><span className="live-indicator">● LIVE</span></div>
          <div className="dashboard-card__body">
            <div className="dashboard-heading"><div><small>MONDAY, OCTOBER 21</small><h3>Good morning, Alex <span>✦</span></h3></div><div className="dashboard-avatar">A</div></div>
            <div className="metric-grid">
              <div className="metric"><span>Active projects</span><strong>12</strong><small className="positive">↗ 18.2%</small></div>
              <div className="metric"><span>Tasks completed</span><strong>84.6%</strong><small className="positive">↗ 12.4%</small></div>
            </div>
            <div className="chart-panel"><div className="chart-panel__title"><span>Team performance</span><span>Last 7 days⌄</span></div><div className="chart-bars">{[36, 54, 43, 72, 59, 88, 68, 96, 74, 84, 63, 100, 78, 90].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div><div className="chart-labels"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span></div></div>
            <div className="activity-row"><div className="activity-icon">✦</div><div><strong>Launch campaign</strong><small>Project milestone completed</small></div><span className="activity-status">Completed</span></div>
          </div>
        </div>
        <div className="floating-note"><span className="floating-note__icon">✦</span><div><strong>Looking good!</strong><small>Your team is on track</small></div><span className="floating-note__check">✓</span></div>
        <div className="hero-glow" />
      </div>
    </section>
  );
}
