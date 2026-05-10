"use client";

import { FiCpu, FiGlobe, FiHome, FiLayers, FiSearch } from "react-icons/fi";
import { SiGoogleads } from "react-icons/si";

import AnimatedSection from "./AnimatedSection";

const techCapabilities = [
  {
    label: "Booking Engine",
    icon: FiGlobe,
  },
  {
    label: "SEO Optimized",
    icon: FiSearch,
  },
  {
    label: "Google Hotel Ads in malaysia",
    icon: SiGoogleads,
  },
  {
    label: "Integrated Channel Manager",
    icon: FiLayers,
  },
  {
    label: "AI Smart Pricing",
    icon: FiCpu,
  },
  {
    label: "Hotel Quality Housekeeping",
    icon: FiHome,
  },
];

const TechnologySection = () => (
  <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
    <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
          Revenue Technology Stack
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          Built to maximize visibility and automation
        </h3>
        <p className="mt-3 text-sm text-white/70">
          These tools run quietly in the background to drive higher booking
          volume and protect your margins.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {techCapabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <div
              key={capability.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white/80"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-200">
                <Icon />
              </span>
              <span>{capability.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  </AnimatedSection>
);

export default TechnologySection;
