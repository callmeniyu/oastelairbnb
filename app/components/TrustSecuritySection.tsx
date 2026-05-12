"use client";

import { FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

const localBanks = [
  {
    name: "Public Bank",
    src: "./images/public_bank.png",
  },
  {
    name: "Alliance Bank",
    src: "./images/alliance_bank.png",
  },
];

const TrustSecuritySection = () => (
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
          We partner with trusted financial institutions to ensure secure,
          reliable, and seamless transactions for all our guests.
        </p>
        <div className="rounded-3xl hidden md:block border border-white/10 bg-slate-950/60 p-6">
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
              src="./images/stripe.png"
              alt="Stripe logo"
              className="h-6 w-auto"
            />
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-300" /> Secure online card
              processing with advanced fraud protection
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-300" /> International
              payment support for seamless global transactions
            </li>
            <li className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-300" /> PCI DSS compliant
              for maximum security
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            Local Banking Partners
          </p>
          <p className="mt-2 text-sm text-white/70">Trusted Malaysian Banks</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {localBanks.map((bank) => (
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
            Our banking partnerships ensure efficient transaction management
            with high standards of financial security, compliance, and
            transparency.
          </p>
        </div>

        <div className="rounded-3xl md:hidden border border-white/10 bg-slate-950/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
            OASTEL SDN. BHD.
          </p>
          <p className="mt-2 text-sm text-white/70">
            Company Registration No: 202401034459 (1580306-V)
          </p>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default TrustSecuritySection;
