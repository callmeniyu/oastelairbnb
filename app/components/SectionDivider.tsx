"use client";

type SectionDividerProps = {
  className?: string;
};

const SectionDivider = ({ className = "" }: SectionDividerProps) => (
  <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
    <div className="divider-line h-px w-full" />
  </div>
);

export default SectionDivider;
