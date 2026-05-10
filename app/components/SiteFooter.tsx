"use client";

const SiteFooter = () => (
  <footer className="relative z-10 border-t border-white/10">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-white/70 md:flex-row md:items-center md:justify-between md:px-10">
      <div>
        <p className="text-base font-semibold text-white">Oastel</p>
        <p className="mt-2 max-w-xs text-white/60">
          Short term rental management tailored for Cameron Highlands.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-white/60">
        <p>hello@oastel.com</p>
        <p>+60 12 345 6789</p>
        <p>Cameron Highlands, Pahang</p>
      </div>
      <div className="text-white/50">© 2026 Oastel. All rights reserved.</div>
    </div>
  </footer>
);

export default SiteFooter;
