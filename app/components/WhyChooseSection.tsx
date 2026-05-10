"use client";

import AnimatedSection from "./AnimatedSection";

const whyChooseList = [
  "Higher income than long-term rental",
  "Fully managed, hands-free experience",
  "Better occupancy and guest ratings",
  "Dedicated Cameron Highlands host team",
];

const WhyChooseSection = () => (
  <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
    <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
          Why Choose Oastel
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          Local expertise, global standards
        </h2>
        <ul className="mt-6 grid gap-3 text-sm text-white/70">
          {whyChooseList.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-white/10 bg-linear-to-br from-emerald-500/20 via-white/5 to-transparent p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100/70">
          Financial Transparency
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          Monthly reporting that actually helps
        </h3>
        <p className="mt-3 text-sm text-white/70">
          See exactly how your property performs with clean dashboards,
          actionable insights, and clear payout timelines.
        </p>
        <div className="mt-6 space-y-3 text-sm text-white/70">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Net earnings</span>
            <span className="text-white">RM 12,450</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Occupancy</span>
            <span className="text-white">88%</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Avg. nightly rate</span>
            <span className="text-white">RM 410</span>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default WhyChooseSection;
