/**
 * Pricing plan content. Prices are sample values and should be replaced before production use.
 */
export const pricing = [
  {
    id: 1, name: "Starter", description: "For curious minds getting started.",
    price: 0, period: "month", highlighted: false, cta: "Start for free",
    features: ["Up to 3 projects", "Basic analytics", "Community support", "Core integrations"],
  },
  {
    id: 2, name: "Pro", description: "For teams ready to move faster.",
    price: 19, period: "month", highlighted: true, cta: "Get started",
    features: ["Unlimited projects", "Advanced analytics", "Priority support", "All integrations", "Team collaboration"],
  },
  {
    id: 3, name: "Scale", description: "For ambitious teams at every stage.",
    price: 49, period: "month", highlighted: false, cta: "Talk to sales",
    features: ["Everything in Pro", "Custom workflows", "Dedicated support", "Advanced permissions", "Team insights"],
  },
];
