"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { MotionConfig, motion } from "framer-motion";
import {
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiCamera,
  FiClipboard,
  FiHome,
  FiMessageCircle,
  FiShield,
  FiStar,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  buildingLocation: "",
  buildingName: "",
  buildingLayout: "",
  bedroomType: "",
  propertyType: "",
  furnishingStatus: "",
  message: "",
};

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

const AnimatedSection = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.08 }}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const highlightInterval = window.setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % heroHighlights.length);
    }, 3200);

    return () => window.clearInterval(highlightInterval);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);
    setStatusMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage(
        "Email service is not configured. Please connect EmailJS keys in the environment variables.",
      );
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          building_location: formData.buildingLocation,
          building_name: formData.buildingName,
          building_layout: formData.buildingLayout,
          bedroom_type: formData.bedroomType,
          property_type: formData.propertyType,
          furnishing_status: formData.furnishingStatus,
          message: formData.message,
        },
        publicKey,
      );

      setStatus("success");
      setStatusMessage(
        "Thank you! Your enquiry was sent. Oastel will reach out shortly.",
      );
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "We could not send your enquiry. Please try again shortly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <MotionConfig reducedMotion="never">
      <div className="relative flex flex-col bg-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="halo float absolute -top-40 left-[-10%] h-95 w-95 rounded-full bg-emerald-500" />
          <div className="halo float-slow absolute top-20 right-[-6%] h-105 w-105 rounded-full bg-sky-500" />
          <div className="halo pulse-soft absolute bottom-[-20%] left-[35%] h-95 w-95 rounded-full bg-teal-400" />
          <div className="noise-overlay absolute inset-0" />
        </div>

        <header className="relative z-10">
          <nav className="mx-auto md:flex w-full hidden max-w-6xl items-center justify-between px-6 py-6 md:px-10">
            <div className="flex items-center gap-3 text-lg font-extrabold md:font-semibold">
              <span className="tracking-wide text-2xl ">Oastel</span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#experience" className="transition hover:text-white">
                Experience
              </a>
              <a href="#results" className="transition hover:text-white">
                Results
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
            </div>
            <a
              href="#enquiry"
              className="rounded-full border border-emerald-300/40 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/10"
            >
              Start Enquiry
            </a>
          </nav>
        </header>

        <main className="relative z-10">
          <AnimatedSection className="relative mx-auto grid w-full max-w-6xl gap-10 border border-white/10 bg-slate-950/70 px-6 pb-16 pt-6 shadow-[0_25px_60px_rgba(15,23,42,0.45)] md:grid-cols-[1.1fr_0.9fr] md:items-start md:border-transparent md:bg-transparent md:px-10 md:pb-20 md:pt-8 md:shadow-none">
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
                short-term rental. Oastel handles setup, pricing, guest
                experience, and operations so you enjoy higher returns without
                the workload.
              </p>
              {/* <div className="reveal reveal-delay-3 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
                <FiHome className="text-emerald-300" /> Full setup & styling
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
                <FiMessageCircle className="text-emerald-300" /> 24/7 guest care
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
                <FiBarChart2 className="text-emerald-300" /> Revenue
                optimization
              </span>
            </div> */}
              <div className="">
                <div className="flex flex-wrap items-center gap-3 text-white/70">
                  {[
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
                  ].map((logo) => (
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
                {/* <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-slate-900/70 px-4 py-2 text-xs text-white/80 backdrop-blur">
                Curated highland stays
              </div> */}
                <div className="absolute -left-6 top-6 w-56 rounded-2xl bg-white/95 p-4 text-slate-900 shadow-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    List with Oastel
                  </p>
                  <h3 className="mt-2 text-base font-semibold">
                    Earn more with full-service hosting
                  </h3>
                  <ul className="mt-3 space-y-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-500" /> Higher
                      rental income
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-500" /> Full
                      property management
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-500" /> No hassle,
                      just results
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
                          <p className="text-xs text-white/70">
                            {item.description}
                          </p>
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
                          <p className="text-xs text-white/70">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            id="enquiry"
            className="relative mx-auto grid w-full max-w-6xl gap-10 px-6 pb-20 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-10"
          >
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                Start Today
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Get a tailored revenue plan for your Airbnb
              </h2>
              <p className="text-sm text-white/70">
                Share your property details and we will respond with a custom
                roadmap, expected earnings, and a launch timeline.
              </p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                <p className="text-base font-semibold text-white">
                  What you will receive
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-300" /> Revenue
                    projection based on Cameron Highlands data
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-300" /> Setup
                    checklist with styling and furnishing guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-300" /> Operations
                    plan with occupancy optimization
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass-card w-full rounded-3xl p-8 text-slate-900 bg-white/95 md:bg-white/80 border-emerald-200/40 shadow-[0_28px_70px_rgba(15,23,42,0.28)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700/70">
                    Enquiry Form
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                    Tell us about your property
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  24/7 replies
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                  <input
                    name="buildingLocation"
                    value={formData.buildingLocation}
                    onChange={handleChange}
                    required
                    placeholder="Building location"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <input
                    name="buildingName"
                    value={formData.buildingName}
                    onChange={handleChange}
                    placeholder="Building name"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                  <input
                    name="buildingLayout"
                    value={formData.buildingLayout}
                    onChange={handleChange}
                    placeholder="Building layout"
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <select
                    name="bedroomType"
                    value={formData.bedroomType}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  >
                    <option value="">Bedroom type</option>
                    <option value="Studio">Studio</option>
                    <option value="1 Bedroom">1 Bedroom</option>
                    <option value="2 Bedroom">2 Bedroom</option>
                    <option value="3 Bedroom">3 Bedroom</option>
                  </select>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  >
                    <option value="">Landed or high rise</option>
                    <option value="Landed">Landed</option>
                    <option value="High Rise">High Rise</option>
                  </select>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <select
                    name="furnishingStatus"
                    value={formData.furnishingStatus}
                    onChange={handleChange}
                    required
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                  >
                    <option value="">Furnishing status*</option>
                    <option value="Unfurnished">Unfurnished</option>
                    <option value="Partially Furnished">
                      Partially Furnished
                    </option>
                    <option value="Fully Furnished">Fully Furnished</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us anything else about your property"
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className="rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSending ? "Sending..." : "Send Enquiry"}
                </button>
                {status && (
                  <p
                    className={`text-sm ${
                      status === "success"
                        ? "text-emerald-700"
                        : "text-rose-600"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
            <div className="divider-line h-px w-full" />
            <div className="mt-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                    OTA Partners
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    Multi-platform visibility for maximum bookings
                  </h3>
                </div>
                <span className="rounded-full border border-emerald-300/40 px-4 py-2 text-xs text-emerald-100">
                  10+ global channels
                </span>
              </div>
              <div className="mt-8 grid gap-5 grid-cols-2 md:grid-cols-5">
                {[
                  {
                    name: "Booking.com",
                    src: `https://img.logo.dev/booking.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Agoda",
                    src: `https://img.logo.dev/agoda.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Airbnb",
                    src: `https://img.logo.dev/airbnb.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Expedia",
                    src: `https://img.logo.dev/expedia.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Google Hotels",
                    src: `https://img.logo.dev/google.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Trip.com",
                    src: `https://img.logo.dev/trip.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Hotels.com",
                    src: `https://img.logo.dev/hotel.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Traveloka",
                    src: `https://img.logo.dev/traveloka.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Hostelworld",
                    src: `https://img.logo.dev/hostelworld.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                  {
                    name: "Ctrip",
                    src: `https://img.logo.dev/ctrip.com?token=${process.env.NEXT_PUBLIC_LOGO_DEV_PUBLISHABLE_KEY}`,
                  },
                ].map((logo) => (
                  <div
                    key={logo.name}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6"
                  >
                    <div className="flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-12 w-auto rounded-full object-contain"
                      />
                    </div>
                    <p className="mt-3 text-center text-md font-bold text-white ">
                      {logo.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="divider-line h-px w-full mt-20" />
          </AnimatedSection>

          <AnimatedSection
            id="services"
            className="section-grid relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
          >
            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col gap-5 md:sticky md:top-24 md:self-start">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                  Full-Service Management
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Designed to maximize returns and protect your time
                </h2>
                <p className="text-white/70">
                  We orchestrate every detail across pricing, operations, and
                  guest experience. Oastel combines local insight with
                  data-driven optimization so your property outperforms the
                  market.
                </p>
              </div>
              <div className="grid gap-4">
                {[
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
                ].map((item) => {
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
                      <p className="mt-2 text-sm text-white/70">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="divider-line h-px w-full my-8" />
          </div>

          <AnimatedSection
            id="results"
            className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {[
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
              ].map((stat) => {
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

          <AnimatedSection
            id="experience"
            className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10"
          >
            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                  Oastel Experience
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  A high-touch hospitality system, tailored for Cameron
                  Highlands
                </h2>
                <p className="mt-4 text-white/70">
                  We handle everything from brand positioning to ongoing
                  maintenance. You get a hands-free asset that grows month after
                  month.
                </p>
                <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                  <p className="text-base font-semibold text-white">
                    Guest journey blueprint
                  </p>
                  <p className="mt-2">
                    From discovery to five-star reviews, we curate a
                    frictionless journey that builds loyalty and referrals.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                {[
                  {
                    step: "01",
                    title: "Discovery & Audit",
                    detail:
                      "We assess your property, market potential, and revenue targets.",
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
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="text-emerald-300/80 text-sm font-semibold">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-base font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-white/70">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
            <div className="divider-line h-px w-full my-8" />
          </div>

          <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
            <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 py-10 px-5 md:px-5 md:grid-cols-[1.1fr_1fr]">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                  Trust & Security
                </p>
                <h2 className="text-3xl font-semibold text-white md:text-4xl">
                  Secure, reliable, and seamless transactions
                </h2>
                <p className="text-sm text-white/70">
                  We partner with trusted financial institutions to ensure
                  secure, reliable, and seamless transactions for all our
                  guests.
                </p>
                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                    OASTEL SDN. BHD.
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Company Registration No: 202401034459 (1580306-V)
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                    Online Payment Gateway
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-sm text-white/60">Powered by</span>
                    <img
                      src="https://logo.clearbit.com/stripe.com"
                      alt="Stripe logo"
                      className="h-6 w-auto"
                    />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-300" /> Secure
                      online card processing with advanced fraud protection
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-300" />{" "}
                      International payment support for seamless global
                      transactions
                    </li>
                    <li className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-300" /> PCI DSS
                      compliant for maximum security
                    </li>
                  </ul>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                    Local Banking Partners
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    Trusted Malaysian Banks
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        name: "Public Bank",
                        src: "https://logo.clearbit.com/publicbank.com.my",
                      },
                      {
                        name: "Alliance Bank",
                        src: "https://logo.clearbit.com/alliancebank.com.my",
                      },
                    ].map((bank) => (
                      <div
                        key={bank.name}
                        className="flex items-center justify-center rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3"
                      >
                        <img
                          src={bank.src}
                          alt={`${bank.name} logo`}
                          className="h-7 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    Our banking partnerships ensure efficient transaction
                    management with high standards of financial security,
                    compliance, and transparency.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

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
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Higher income than long-term rental
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Fully managed, hands-free experience
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Better occupancy and guest ratings
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    Dedicated Cameron Highlands host team
                  </li>
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

          <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
            <div className="grid gap-8 md:grid-cols-3">
              {[
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
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm text-white/70">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-white/50">{item.role}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

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
                {[
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
                ].map((item) => (
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

          <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
            <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-linear-to-r from-emerald-600/30 via-white/5 to-sky-500/20 p-10 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/70">
                  Start Today
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Let Oastel manage your Airbnb and unlock effortless income
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  Get started now and unlock your property’s full earning
                  potential.
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
        </main>

        <footer className="relative z-10 border-t border-white/10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-10">
            <div>
              <p className="text-base font-semibold text-white">Oastel</p>
              <p className="mt-2 max-w-xs text-white/60">
                Airbnb property management tailored for Cameron Highlands.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-white/60">
              <p>hello@oastel.com</p>
              <p>+60 12 345 6789</p>
              <p>Cameron Highlands, Pahang</p>
            </div>
            <div className="text-white/50">
              © 2026 Oastel. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
