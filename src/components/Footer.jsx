import React from "react";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

/**
 * Final call-to-action and footer navigation.
 */
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-cta container" data-reveal>
        <span className="eyebrow">READY WHEN YOU ARE</span>
        <h2>
          Make your next move
          <br />
          <span className="gradient-text">your best one.</span>
        </h2>
        <a className="button" href="#pricing">
          Find your plan <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="footer-bottom container">
        <a className="brand" href="#home">
          <span className="brand__mark">N</span>
          <span>
            nexora<span className="brand__dot">.</span>
          </span>
        </a>
        <p>© 2026 Nexora. Built for what's next.</p>
        <div className="social-links">
          <a href="https://github.com/AdrianHafeziCoder" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/adrian-hafezi/"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
