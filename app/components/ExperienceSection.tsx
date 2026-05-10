"use client";

import AnimatedSection from "./AnimatedSection";

const experienceSteps = [
  {
    step: "01",
    title: "Discovery & Audit",
    detail: "We assess your property, market potential, and revenue targets.",
  },
  {
    step: "02",
    title: "Design & Setup",
    detail:
      "Styling, furnishing, smart access, and professional listing creation.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    detail:
      "Dynamic pricing, multi-channel marketing, and calendar optimization.",
  },
  {
    step: "04",
    title: "Operate & Elevate",
    detail:
      "24/7 guest support, cleaning, inspections, and ongoing improvements.",
  },
];

const ExperienceSection = () => (
  <AnimatedSection
    id="experience"
    className="relative mx-auto mt-12 w-full max-w-6xl px-6 pb-24 md:px-10"
  >
    <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
          Oastel Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          A high-touch hospitality system, tailored for Cameron Highlands
        </h2>
        <p className="mt-4 text-white/70">
          We handle everything from brand positioning to ongoing maintenance.
          You get a hands-free asset that grows month after month.
        </p>
        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p className="text-base font-semibold text-white">
            Guest journey blueprint
          </p>
          <p className="mt-2">
            From discovery to five-star reviews, we curate a frictionless
            journey that builds loyalty and referrals.
          </p>
        </div>
      </div>
      <div className="grid gap-4">
        {experienceSteps.map((item) => (
          <div
            key={item.step}
            className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <div className="text-emerald-300/80 text-sm font-semibold">
              {item.step}
            </div>
            <div>
              <p className="text-base font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-white/70">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
