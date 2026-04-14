// ============================================
// StatsCounter — Animated counter bar
// Client component for IntersectionObserver
// and counter animation
// ============================================
"use client";

import { useEffect, useRef, useState } from "react";

// Each stat to display in the bar
const STATS = [
  { value: 5, suffix: "", label: "Counties" },
  { value: 67, suffix: "", label: "Target counties" },
  { value: 23, suffix: "+", label: "Years experience" },
  { value: 14, suffix: "", label: "Avg days to lease" },
  { value: 100, suffix: "%", label: "In-house maintenance" },
];

export default function StatsCounter() {
  // hasAnimated prevents the counter from replaying
  const [hasAnimated, setHasAnimated] = useState(false);
  // counts holds the current displayed number for each stat
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IntersectionObserver triggers the counter when the bar scrolls into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated]);

  /** Incrementally counts from 0 to target over ~1 second */
  const animateCounts = () => {
    const duration = 1000; // ms
    const steps = 40;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(
        STATS.map((stat) => Math.round((stat.value / steps) * Math.min(step, steps)))
      );
      if (step >= steps) clearInterval(timer);
    }, interval);
  };

  return (
    <section
      ref={ref}
      className="border-y border-[var(--card-border)] bg-[var(--card-bg)]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {STATS.map((stat, idx) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl font-bold text-accent sm:text-4xl">
              {counts[idx]}
              {stat.suffix}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-[var(--muted-text)]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
