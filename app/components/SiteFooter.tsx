"use client";

const SiteFooter = () => (
  <footer className="relative z-10 border-t border-white/10">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-10">
      <div>
        <p className="text-xl font-semibold text-white">OASTEL SDN. BHD.</p>
        <p className="mt-2 max-w-xs text-white/60">
          Company Registration No: 202401034459 (1580306-V)
        </p>
      </div>
      <div className="flex flex-col gap-2 text-white/60">
        <p>
          C-1-19, CAMERON FAIR, Jalan Camelia, Tanah Rata, 39000 Tanah Rata,
          Pahang
        </p>
        <p>hello@oastel.my</p>
        <p>019-659 2141</p>
      </div>
      <div className="text-white/50">© 2026 Oastel. All rights reserved.</div>
    </div>
  </footer>
);

export default SiteFooter;
