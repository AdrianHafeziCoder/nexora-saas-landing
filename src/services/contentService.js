import { apiGet } from "./api.js";
import { features } from "../data/features.js";
import { pricing } from "../data/pricing.js";
import { testimonials } from "../data/testimonials.js";
import { faq } from "../data/faq.js";

const localContent = { features, pricing, testimonials, faq };

/**
 * Load all landing-page sections from the backend when remote mode is enabled.
 * If any request fails, return the complete local content set as a safe fallback.
 */
export async function loadLandingContent() {
  const useRemote = import.meta.env.VITE_USE_REMOTE_CONTENT === "true";

  if (!useRemote) return localContent;

  try {
    const [remoteFeatures, remotePricing, remoteTestimonials, remoteFaq] =
      await Promise.all([
        apiGet("/api/features"),
        apiGet("/api/pricing"),
        apiGet("/api/testimonials"),
        apiGet("/api/faq"),
      ]);

    return {
      features: Array.isArray(remoteFeatures) ? remoteFeatures : features,
      pricing: Array.isArray(remotePricing) ? remotePricing : pricing,
      testimonials: Array.isArray(remoteTestimonials) ? remoteTestimonials : testimonials,
      faq: Array.isArray(remoteFaq) ? remoteFaq : faq,
    };
  } catch (error) {
    console.warn("Remote content unavailable. Using local content instead.", error);
    return localContent;
  }
}
