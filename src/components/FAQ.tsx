// ============================================
// FAQ — Reusable accordion component
// Uses "use client" for open/close toggle state
// ============================================
"use client";

import { useState } from "react";

// Shape of a single FAQ item
interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  /** Array of question/answer objects */
  items: FAQItem[];
  /** Optional heading displayed above the accordion */
  heading?: string;
}

export default function FAQ({ items, heading }: FAQProps) {
  // Track which item index is currently open (-1 = none)
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="mx-auto max-w-3xl">
      {heading && (
        <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">
          {heading}
        </h2>
      )}

      <div className="divide-y divide-[var(--card-border)]">
        {items.map((item, idx) => (
          <div key={idx}>
            {/* Question button */}
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between py-5 text-left"
              aria-expanded={openIndex === idx}
            >
              <span className="pr-4 font-sans text-base font-medium sm:text-lg">
                {item.q}
              </span>
              {/* Plus/minus icon */}
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--card-border)] text-sm transition-transform ${
                  openIndex === idx ? "rotate-45 border-accent text-accent" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* Answer — animated open/close via CSS grid trick */}
            <div className={`faq-content ${openIndex === idx ? "open" : ""}`}>
              <div>
                <p className="pb-5 text-sm leading-relaxed text-[var(--muted-text)]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
