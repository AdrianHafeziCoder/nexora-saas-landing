import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Floating navigation bar with a compact state on scroll, active-section
 * highlighting, a mobile drawer and a persistent theme toggle.
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Shrink the floating bar once the page has been scrolled a little.
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section that is currently in the middle of the screen.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;

    const ids = [...links.map((link) => link.href.slice(1)), "home"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Close the mobile menu after a visitor chooses a section.
  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header site-header--float ${compact ? "is-compact" : ""}`}
    >
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand__mark">N</span>
          <span>
            nexora<span className="brand__dot">.</span>
          </span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={isActive ? "is-active" : ""}
                aria-current={isActive ? "true" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            );
          })}
          <a className="nav-mobile-cta" href="#pricing" onClick={closeMenu}>
            Get started <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="nav-actions">
          {onToggleTheme && (
            <button
              className="icon-button theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <a className="button button--small button--nav" href="#pricing">
            Get started <ArrowUpRight size={15} />
          </a>
          <button
            className="icon-button menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
