"use client";

import AnimatedSection from "./AnimatedSection";

const CTASection = () => (
  <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
    <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-linear-to-r from-emerald-600/30 via-white/5 to-sky-500/20 p-10 md:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/70">
          Start Today
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Let Oastel manage your Property and unlock effortless income
        </h2>
        <p className="mt-4 text-sm text-white/70">
          Get started now and unlock your property’s full earning potential.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <a
          href="#enquiry"
          className="rounded-xl bg-white px-6 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-emerald-50"
        >
          Book a consultation
        </a>
        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
          Next response window: within 6 hours
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default CTASection;
