import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LogoCloud from "./components/LogoCloud.jsx";
import Features from "./components/Features.jsx";
import Showcase from "./components/Showcase.jsx";
import Pricing from "./components/Pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import { useTheme } from "./hooks/useTheme.js";
import { useScrollAnimation } from "./hooks/useScrollAnimation.js";
import { loadLandingContent } from "./services/contentService.js";
import { features as localFeatures } from "./data/features.js";
import { pricing as localPricing } from "./data/pricing.js";
import { testimonials as localTestimonials } from "./data/testimonials.js";
import { faq as localFaq } from "./data/faq.js";

/**
 * Compose the landing page and resolve its content from local data or an API.
 */
export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [content, setContent] = useState({
    features: localFeatures,
    pricing: localPricing,
    testimonials: localTestimonials,
    faq: localFaq,
  });

  useScrollAnimation();

  useEffect(() => {
    let isMounted = true;

    // Load remote content when enabled; the service automatically falls back to local data.
    loadLandingContent().then((result) => {
      if (isMounted) setContent(result);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="app-shell">
      <div className="cosmos" aria-hidden="true">
        <div className="cosmos__stars" />
        <div className="cosmos__glow cosmos__glow--one" />
        <div className="cosmos__glow cosmos__glow--two" />
        <div className="cosmos__grid" />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <LogoCloud />
        <Features items={content.features} />
        <Showcase />
        <Pricing items={content.pricing} />
        <Testimonials items={content.testimonials} />
        <FAQ items={content.faq} />
      </main>
      <Footer />
    </div>
  );
}
