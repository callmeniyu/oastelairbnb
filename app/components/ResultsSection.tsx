"use client";

import { FiClock, FiStar, FiTrendingUp } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const resultsStats = [
  {
    value: "95%",
    label: "Peak season occupancy",
    icon: FiTrendingUp,
  },
  {
    value: "4.9★",
    label: "Average guest rating",
    icon: FiStar,
  },
  {
    value: "48h",
    label: "Average setup timeline",
    icon: FiClock,
  },
];

const ResultsSection = () => (
  <AnimatedSection
    id="results"
    className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
  >
    <div className="grid gap-6 md:grid-cols-3">
      {resultsStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 p-8"
          >
            <Icon className="absolute -right-4 -top-4 h-20 w-20 text-white/10" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-200">
              <Icon className="h-6 w-6" />
            </span>
            <p className="mt-5 text-3xl font-semibold text-white">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/70">{stat.label}</p>
          </div>
        );
      })}
    </div>
  </AnimatedSection>
);

export default ResultsSection;
