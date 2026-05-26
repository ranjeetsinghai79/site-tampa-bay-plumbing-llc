import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "LocalPro",
    tagline: "Plumbing Done Right. Every Time.",
    phone: "(727) 223-6400",
    phoneHref: "tel:+17272236400",
    email: "tbp@local.pro",
    address: "613 S Missouri Ave, Clearwater, FL 33756",
    city: "Clearwater",
    serviceAreas: ["Tampa, FL", "Pinellas County", "Clearwater", "Dunedin", "Largo", "Tarpon Springs", "Westchase"],
    license: "#CFC-1428780 / #CFC-1430848",
    since: "2023",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "plumbing",
  },

  services: [
    { icon: "wrench", title: "Pro Plumbing Services", desc: "Comprehensive plumbing solutions for homes and businesses.", urgent: false },
    { icon: "droplets", title: "Pro Leak Detection", desc: "Advanced technology to accurately find and fix hidden leaks.", urgent: true },
    { icon: "home", title: "Slab Leaks & Repipes", desc: "Expert repair for slab leaks and complete repiping services.", urgent: true },
    { icon: "zap", title: "Blockages & Sewer", desc: "Efficient clearing of drains, blockages, and sewer line repairs.", urgent: true },
    { icon: "briefcase", title: "Commercial & Build backs", desc: "Specialized plumbing services for commercial properties and new constructions.", urgent: false },
    { icon: "thermometer", title: "Water Heaters & Boilers Installs", desc: "Installation and replacement of all types of water heaters and boilers.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Clearwater, FL", stars: 5, text: "LocalPro saved us! Our water heater burst on a Saturday morning. Their technician arrived within two hours, assessed the damage, and had a new unit installed by early afternoon. Professional, courteous, and incredibly efficient. Highly recommend their emergency service!" },
    { name: "Mark P.", location: "Dunedin, FL", stars: 5, text: "We had a mysterious leak under our kitchen sink that no one else could find. LocalPro's team used some amazing tech to pinpoint it quickly. The repair was done perfectly, and they even cleaned up thoroughly. Transparent pricing and no surprises. Fantastic experience!" },
    { name: "Emily R.", location: "Largo, FL", stars: 5, text: "Called LocalPro for a clogged sewer line that was backing up into our home. They responded fast, explained everything clearly, and fixed the issue with minimal disruption. Their professionalism and expertise were truly impressive. So glad we chose them!" }
  ],

  trustBadges: [
    "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency", "Upfront Pricing", "Locally Owned"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 1, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your urgent plumbing needs with rapid dispatch." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Clear, honest pricing before any work begins—no hidden fees." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are academy-trained and fully certified experts." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our intelligent system ensures you can always reach us, day or night." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vans are stocked with the right tools and parts for efficient service." }
  ],

  formServiceOptions: ["Pro Plumbing Services", "Pro Leak Detection", "Slab Leaks & Repipes", "Blockages & Sewer", "Commercial & Build backs", "Grease Trap Services", "Whole Home Plumbing Inspection", "Water Heaters & Boilers Installs", "Water Softeners & Filtration Installs"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!