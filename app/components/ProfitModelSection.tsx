"use client";

const profitSteps = [
  {
    title: "Gross Revenue (100%)",
    description: "Total booking revenue across platforms.",
  },
  {
    title: "Operating Expenses (25%)",
    description:
      "Electricity, water, internet, cleaning, laundry and housekeeping.",
  },
  {
    title: "Net Profit (75%)",
    description: "Revenue after OpEx.",
  },
];

const profitSplit = [
  {
    title: "70% Owner",
    description: "Your share of net profit.",
  },
  {
    title: "30% Oastel",
    description: "Our management fee.",
  },
];

const ProfitModelSection = () => (
  <section className="relative overflow-hidden py-16 md:py-24">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%)]" />
    <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:px-10">
      <div className="flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300/80">
          Profit model
        </p>
        <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
          How do you profit?
        </h2>
        <p className="text-lg text-white/70">
          70% for <span className="font-semibold text-emerald-200">you</span> —
          30% for <span className="font-semibold text-emerald-200">Oastel</span>
          .
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {profitSteps.map((step) => (
          <div
            key={step.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.35)]"
          >
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-white/70">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {profitSplit.map((split) => (
          <div
            key={split.title}
            className="rounded-3xl border border-emerald-300/20 bg-linear-to-br from-emerald-400/10 via-white/5 to-sky-500/10 p-6"
          >
            <h3 className="text-xl font-semibold text-white">{split.title}</h3>
            <p className="mt-2 text-sm text-white/70">{split.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-sm text-white/70">
        Net Profit = Revenue − OpEx (Electricity + Water + Internet)
      </div>
    </div>
  </section>
);

export default ProfitModelSection;
