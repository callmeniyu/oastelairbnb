"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Oastel repositioned our chalet and we saw a significant bump in bookings within weeks. The team handles everything.",
    name: "Nur Aina",
    role: "Owner, Mossy Forest Chalet",
  },
  {
    quote:
      "The guest communication and cleaning coordination are flawless. The monthly reports are a lifesaver.",
    name: "Jason Lim",
    role: "Investor, Brinchang",
  },
  {
    quote:
      "We finally enjoy the income without the stress. Oastel is the definition of hands-free hosting.",
    name: "Serena Tan",
    role: "Host, Tanah Rata",
  },
];

const TestimonialsSection = () => (
  <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((item) => (
        <div
          key={item.name}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-sm text-white/70">“{item.quote}”</p>
          <p className="mt-4 text-sm font-semibold text-white">{item.name}</p>
          <p className="text-xs text-white/50">{item.role}</p>
        </div>
      ))}
    </div>
  </AnimatedSection>
);

export default TestimonialsSection;
