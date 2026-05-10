"use client";

import { motion } from "framer-motion";
import {
  FiCamera,
  FiCheckCircle,
  FiClipboard,
  FiMessageCircle,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const heroImage = {
  src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
  alt: "Premium Cameron Highlands bedroom",
};

const heroHighlights = [
  {
    icon: FiTrendingUp,
    title: "+18% ADR lift",
    description: "Dynamic pricing tuned to peak seasons.",
  },
  {
    icon: FiCamera,
    title: "Photo-ready styling",
    description: "Professional visuals that convert views to bookings.",
  },
  {
    icon: FiMessageCircle,
    title: "24/7 guest care",
    description: "Instant replies and concierge-grade hosting.",
  },
  {
    icon: FiClipboard,
    title: "Full setup",
    description: "Furnishing, smart access, and listing launch handled.",
  },
  {
    icon: FiShield,
    title: "Trusted operations",
    description: "Cleaning, inspections, and maintenance always on time.",
  },
];

const highlightPositions = [
  { x: -20, y: -118, scale: 0.85, opacity: 1 },
  { x: -72, y: 0, scale: 1.06, opacity: 1 },
  { x: -20, y: 118, scale: 0.85, opacity: 1 },
];

const heroLogos = [
  {
    name: "Airbnb",
    src: `https://img.logo.dev/airbnb.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
  },
  {
    name: "Booking.com",
    src: `https://img.logo.dev/booking.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
  },
  {
    name: "Agoda",
    src: `https://img.logo.dev/agoda.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
  },
  {
    name: "Trip.com",
    src: `https://img.logo.dev/trip.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
  },
];

export const HERO_HIGHLIGHTS_COUNT = heroHighlights.length;

type HeroSectionProps = {
  activeHighlight: number;
};

const HeroSection = ({ activeHighlight }: HeroSectionProps) => (
  <AnimatedSection className="relative mx-auto grid w-full max-w-6xl gap-10  overflow-hidden md:overflow-visible border-white/10 bg-slate-950/70 px-6 pb-16 pt-6 shadow-[0_25px_60px_rgba(15,23,42,0.45)] md:grid-cols-[1.1fr_0.9fr] md:items-start md:border-transparent md:bg-transparent md:px-10 md:pb-20 md:pt-8 md:shadow-none">
    <div className="flex flex-col mt-6 gap-6">
      <p className="reveal text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300/80">
        Airbnb Property Management in Cameron Highlands
      </p>
      <h1 className="reveal reveal-delay-1 text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-5xl">
        <span className="font-black text-white drop-shadow-[0_12px_32px_rgba(16,185,129,0.5)]">
          Earn More
        </span>
        , Stress Less with <span className="gradient-text">Oastel</span>
      </h1>
      <p className="reveal reveal-delay-2 max-w-xl text-base font-normal leading-7 text-white/70 sm:text-lg sm:leading-8">
        Turn your property in Cameron Highlands into a high-performing
        short-term rental. Oastel handles setup, pricing, guest experience, and
        operations so you enjoy higher returns without the workload.
      </p>
      <div className="">
        <div className="flex flex-wrap items-center gap-3 text-white/70">
          {heroLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="h-7 w-7 rounded-full object-contain"
              />
              <span className="text-xs font-medium text-white/70">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="relative grid gap-6">
      <div className="float-slow relative rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl">
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 via-transparent to-sky-500/20 opacity-25 sm:opacity-70" />
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="relative h-96 w-full rounded-3xl object-cover md:h-105"
        />
        <div className="absolute -left-6 top-6 w-56 rounded-2xl bg-white/95 p-4 text-slate-900 shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            List with Oastel
          </p>
          <h3 className="mt-2 text-base font-semibold">
            Earn more with full-service hosting
          </h3>
          <ul className="mt-3 space-y-2 text-xs text-slate-600">
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-500" /> Higher rental
              income
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-500" /> Full property
              management
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-500" /> No hassle, just
              results
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute -right-20 top-56 md:top-35 h-80 w-56 md:block">
        {heroHighlights.map((item, index) => {
          const Icon = item.icon;
          const slot =
            (index - activeHighlight + heroHighlights.length) %
            heroHighlights.length;
          const position = highlightPositions[slot] ?? {
            x: 40,
            y: 0,
            scale: 0.7,
            opacity: 0,
            rotate: 18,
          };
          const isVisible = slot < highlightPositions.length;

          return (
            <motion.div
              key={item.title}
              animate={{
                opacity: position.opacity,
                x: position.x,
                y: position.y,
                scale: position.scale,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`absolute left-0 w-52 rounded-2xl border border-emerald-300/40 bg-slate-950/95 px-4 py-3 text-xs text-white shadow-[0_0_35px_rgba(16,185,129,0.25)] ${
                isVisible ? "" : "pointer-events-none"
              }`}
              style={{ transformOrigin: "left center" }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 px-2 inline-flex h-9 w-12 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <Icon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="absolute right-3 top-3 z-20 h-64 w-64 hidden">
        {heroHighlights.map((item, index) => {
          const Icon = item.icon;
          const slot =
            (index - activeHighlight + heroHighlights.length) %
            heroHighlights.length;
          const position = highlightPositions[slot] ?? {
            x: 40,
            y: 0,
            scale: 0.7,
            opacity: 0,
            rotate: 18,
          };
          const isVisible = slot < highlightPositions.length;

          return (
            <motion.div
              key={item.title}
              animate={{
                opacity: isVisible ? position.opacity : 0,
                x: position.x * 0.45,
                y: position.y * 0.45,
                scale: position.scale,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className={`absolute right-0 top-56 w-56  rounded-2xl border border-emerald-300/40 bg-slate-950/95 px-4 py-3 text-xs text-white shadow-[0_0_30px_rgba(16,185,129,0.25)] ${
                isVisible ? "" : "pointer-events-none"
              }`}
              style={{ transformOrigin: "right center" }}
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200">
                  <Icon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="text-xs text-white/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </AnimatedSection>
);

export default HeroSection;
