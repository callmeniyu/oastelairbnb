"use client";

const BackgroundEffects = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="halo float absolute -top-40 left-[-10%] h-95 w-95 rounded-full bg-emerald-500" />
    <div className="halo float-slow absolute top-20 right-[-6%] h-105 w-105 rounded-full bg-sky-500" />
    <div className="halo pulse-soft absolute bottom-[-20%] left-[35%] h-95 w-95 rounded-full bg-teal-400" />
    <div className="noise-overlay absolute inset-0" />
  </div>
);

export default BackgroundEffects;
