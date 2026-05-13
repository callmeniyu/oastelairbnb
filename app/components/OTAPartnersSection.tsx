"use client";

import AnimatedSection from "./AnimatedSection";

const otaPartners = [
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
    src: `/images/google_hotels.png`,
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
];

const OTAPartnersSection = () => (
  <AnimatedSection className="relative mx-auto w-full max-w-6xl px-6 pb-6 md:pb-16  md:px-10">
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
      <div className="hidden mt-8 md:grid gap-5 grid-cols-2 md:grid-cols-5">
        {otaPartners.map((logo) => (
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

      <div className="md:hidden grid grid-cols-2 mt-4 items-center gap-3 text-white/70">
        {otaPartners.map((logo) => (
          <div
            key={logo.name}
            className={`flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-3 md:px-4 py-2`}
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
  </AnimatedSection>
);

export default OTAPartnersSection;
