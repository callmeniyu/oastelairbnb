"use client";

import { FiCheckCircle } from "react-icons/fi";
import AnimatedSection from "./AnimatedSection";

type EnquiryFormData = {
  fullName: string;
  phone: string;
  email: string;
  buildingLocation: string;
  buildingName: string;
  buildingLayout: string;
  bedroomType: string;
  propertyType: string;
  furnishingStatus: string;
  message: string;
};

type EnquirySectionProps = {
  formData: EnquiryFormData;
  handleChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isSending: boolean;
  status: null | "success" | "error";
  statusMessage: string;
};

const EnquirySection = ({
  formData,
  handleChange,
  handleSubmit,
  isSending,
  status,
  statusMessage,
}: EnquirySectionProps) => (
  <AnimatedSection
    id="enquiry"
    className="relative mx-auto grid w-full max-w-6xl gap-10 mt-4 px-6 pb-20 md:grid-cols-[0.9fr_1.1fr] md:items-start md:px-10"
  >
    <div className="flex flex-col gap-5">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
        Start Today
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-4xl">
        Get a tailored revenue plan for your property
      </h2>
      <p className="text-sm text-white/70">
        Share your property details and we will respond with a custom roadmap,
        expected earnings, and a launch timeline.
      </p>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        <p className="text-base font-semibold text-white">
          What you will receive
        </p>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center gap-2">
            <FiCheckCircle className="text-emerald-300" /> Revenue projection
            based on Cameron Highlands data
          </li>
          <li className="flex items-center gap-2">
            <FiCheckCircle className="text-emerald-300" /> Setup checklist with
            styling and furnishing guidance
          </li>
          <li className="flex items-center gap-2">
            <FiCheckCircle className="text-emerald-300" /> Operations plan with
            occupancy optimization
          </li>
        </ul>
      </div>
    </div>

    <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-950/30 md:p-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="relative rounded-[1.8rem] border border-slate-200/10 bg-slate-950/95 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.2)]">
        <div className="absolute rounded-tl-3xl inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.14),transparent_24%)] opacity-90" />
        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
                Enquiry Form
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                Tell us about your property
              </h2>
            </div>
            <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-semibold text-emerald-200 shadow-lg shadow-emerald-500/10">
              24/7 response
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
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone number"
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
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
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              />
              <input
                name="buildingLocation"
                value={formData.buildingLocation}
                onChange={handleChange}
                required
                placeholder="Building location"
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <input
                name="buildingName"
                value={formData.buildingName}
                onChange={handleChange}
                placeholder="Building name"
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              />
              <input
                name="buildingLayout"
                value={formData.buildingLayout}
                onChange={handleChange}
                placeholder="Building layout"
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <select
                name="bedroomType"
                value={formData.bedroomType}
                onChange={handleChange}
                required
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              >
                <option value="">Bedroom type</option>
                <option value="Studio">Studio</option>
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
                <option value="4 Bedroom">4 Bedroom</option>
                <option value="5 Bedroom">5 Bedroom</option>
                <option value="5+ Bedroom">5+ Bedroom</option>
              </select>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
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
                className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
              >
                <option value="">Furnishing status*</option>
                <option value="Unfurnished">Unfurnished</option>
                <option value="Partially Furnished">Partially Furnished</option>
                <option value="Fully Furnished">Fully Furnished</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Tell us anything else about your property"
              className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300/20"
            />
            <button
              type="submit"
              disabled={isSending}
              className="rounded-2xl bg-linear-to-r from-emerald-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition duration-200 hover:from-emerald-400 hover:to-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending..." : "Send Enquiry"}
            </button>
            {status && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-emerald-700" : "text-rose-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default EnquirySection;
