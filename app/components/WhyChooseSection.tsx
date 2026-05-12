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
          Financial Reporting
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-white">
          Monthly reports prepared by our team
        </h3>
        <p className="mt-3 text-sm text-white/70">
          Get comprehensive monthly reports. Each report includes transaction
          breakdowns, payout schedules, and recommended actions.
        </p>
        <div className="mt-6 space-y-3 text-sm text-white/70">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Monthly PDF report</span>
            <span className="text-white">Delivered by email</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Transaction breakdown</span>
            <span className="text-white">Itemised</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Payout schedule</span>
            <span className="text-white">Clear dates & amounts</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <span>Review support</span>
            <span className="text-white">Call on request</span>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default WhyChooseSection;
