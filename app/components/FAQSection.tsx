"use client";

import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How soon can my property go live?",
    answer:
      "Typically within 2-6 weeks depending on furnishing and setup needs.",
  },
  {
    question: "Do you manage multiple platforms?",
    answer:
      "Yes. We optimize your listing across Airbnb, Booking.com, Agoda, and more.",
  },
  {
    question: "What if there is a maintenance issue?",
    answer:
      "Our local team handles repairs quickly and keeps you informed with updates.",
  },
  {
    question: "How do you price nightly rates?",
    answer:
      "Dynamic pricing uses demand data, seasonality, and competitor insights.",
  },
];

const FAQSection = () => (
  <AnimatedSection
    id="faq"
    className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10"
  >
    <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
      <div className="md:sticky md:top-24 md:self-start">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
          FAQs
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
          Everything you need to know before you launch
        </h2>
      </div>
      <div className="space-y-4">
        {faqs.map((item) => (
          <div
            key={item.question}
            className="rounded-3xl border border-white/10 bg-white/5 p-5"
          >
            <p className="text-base font-semibold text-white">
              {item.question}
            </p>
            <p className="mt-2 text-sm text-white/70">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default FAQSection;
