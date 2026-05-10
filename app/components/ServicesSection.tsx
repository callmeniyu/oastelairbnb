"use client";

import {
  FiBarChart2,
  FiHome,
  FiMessageCircle,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const serviceCards = [
  {
    title: "Maximize Your Rental Income",
    detail:
      "Dynamic pricing, multi-platform exposure, and optimized listings with professional photography.",
    icon: FiTrendingUp,
  },
  {
    title: "Complete Property Setup",
    detail:
      "Interior styling, full furnishing, and smart home essentials to delight guests.",
    icon: FiHome,
  },
  {
    title: "24/7 Guest Management",
    detail:
      "Fast responses, smooth check-ins, and круглосуточная support for a seamless stay.",
    icon: FiMessageCircle,
  },
  {
    title: "Operations & Maintenance",
    detail:
      "Professional cleaning, inspections, and rapid repair coordination.",
    icon: FiZap,
  },
  {
    title: "Transparent Financial Reporting",
    detail:
      "Monthly earnings reports, secure payouts, and performance insights.",
    icon: FiBarChart2,
  },
];

const ServicesSection = () => (
  <AnimatedSection
    id="services"
    className="section-grid relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
  >
    <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
      <div className="order-1 md:order-0 grid gap-4">
        {serviceCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
                  <Icon />
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-white/70">{item.detail}</p>
            </div>
          );
        })}
      </div>
      <div className="order-0 md:order-1 flex flex-col gap-5 md:sticky md:top-24 md:self-start">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
          Full-Service Management
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Designed to maximize returns and protect your time
        </h2>
        <p className="text-white/70">
          We orchestrate every detail across pricing, operations, and guest
          experience. Oastel combines local insight with data-driven
          optimization so your property outperforms the market.
        </p>
      </div>
    </div>
  </AnimatedSection>
);

export default ServicesSection;
