"use client";

const SiteHeader = () => (
  <header className="relative z-10">
    <nav className="mx-auto md:flex w-full hidden max-w-6xl items-center justify-between px-6 py-6 md:px-10">
      <div className="font-extrabold md:font-semibold">
        <h1 className="text-3xl tracking-wide">
          Oastel <span className="text-xs text-gray-400">SDN.BHD.</span>
        </h1>
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
);

export default SiteHeader;
