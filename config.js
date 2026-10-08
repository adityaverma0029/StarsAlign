/**
 * STARSALIGN - AGENCY CONFIGURATION & CONTENT DATA
 * Central configuration for verifiable data, API endpoints, and agency claims.
 */

// TODO: replace with real, verifiable data
const STARSALIGN_CONFIG = {
  brandName: "starsalign",
  domain: "starsalign.in",
  tagline: "High-Impact Creator Partnerships & Audience Reach",
  subline: "We provide end-to-end creator marketing solutions designed to drive awareness, engagement, and measurable conversions.",
  
  // TODO: replace with real, verifiable data
  services: [
    {
      number: "01",
      title: "Talent Discovery & Matchmaking",
      description: "We identify and vet the right creators whose audiences genuinely resonate with your brand values to maximize engagement.",
      tags: ["Audience Vetting", "Creator Alignment", "Contracting"]
    },
    {
      number: "02",
      title: "Campaign Strategy & Creative Direction",
      description: "End-to-end creative concepts and content direction, mapping out exactly what the creators produce to bring your brand vision to life.",
      tags: ["Content Ideation", "Creative Direction", "Production Support"]
    },
    {
      number: "03",
      title: "Performance & ROI Analytics",
      description: "Comprehensive post-campaign tracking—measuring reach, impressions, engagement, and conversion ROI to continually optimize your spend.",
      tags: ["Real-Time Metrics", "Attribution", "ROI Optimization"]
    }
  ],

  // TODO: replace with real, verifiable data
  whyUsFeatures: [
    {
      number: "01",
      title: "Creator-First Strategy",
      description: "Connect brands with creators who genuinely match their audience and brand culture."
    },
    {
      number: "02",
      title: "Data-Driven Campaigns",
      description: "Leverage deep audience analytics and performance metrics to optimize every campaign."
    },
    {
      number: "03",
      title: "Authentic Connections",
      description: "Create natural integrations that resonate with viewers rather than feeling like forced ads."
    },
    {
      number: "04",
      title: "Measurable Results",
      description: "Track multi-touch performance and deliver transparent, high-ROI reporting."
    }
  ],

  // ALLOWED ADDITION D: Pricing section driven by one config object, hidden by default with placeholder values
  pricing: {
    enabled: false, // Hidden by default (agency inquiries are customized per campaign)
    // TODO: replace with real, verifiable data if fixed packages are introduced
    tiers: [
      {
        name: "Boutique Creator Activation",
        price: "Custom",
        description: "Tailored micro & mid-tier creator activation for niche brand lift."
      },
      {
        name: "Enterprise Multi-Platform Scale",
        price: "Custom",
        description: "Comprehensive multi-creator strategy, full production management and cross-platform attribution."
      }
    ]
  },

  endpoints: {
    companyScriptUrl: "https://script.google.com/macros/s/AKfycby5bVHzu08oiu1H60TGW80VrWJFOgRnlsRdH17zfqTkfIv1stVUZA3ad-dSYQj3BETS/exec",
    creatorScriptUrl: "https://script.google.com/macros/s/AKfycbzniDMpJCdNB843Og9MYil3glX6ukzPVh_238cu12S4W5p4ogseFSjua6yoEKTEQj6h/exec",
    creatorFormUrl: "https://tally.so/r/eqX7q0"
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/starsalign",
    instagram: "https://www.instagram.com/starsalign.in/",
    twitter: "https://x.com/starsalign_in",
    email: "hello@starsalign.in"
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = STARSALIGN_CONFIG;
}
