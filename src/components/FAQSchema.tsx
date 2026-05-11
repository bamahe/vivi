// ============================================
// FAQSchema — Visible FAQ section + JSON-LD
// Server component. Renders questions visibly
// AND injects FAQPage structured data for
// search engines and AI answer engines.
// ============================================

interface FAQSchemaItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  /** Array of question/answer pairs */
  items: FAQSchemaItem[];
  /** Optional heading above the FAQ list */
  heading?: string;
}

export default function FAQSchema({ items, heading }: FAQSchemaProps) {
  // Build JSON-LD FAQPage schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD injected into head for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-3xl">
        {heading && (
          <h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl">
            {heading}
          </h2>
        )}

        {/* Visible FAQ list — each item gets its own section */}
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-[var(--card-border)] pb-6 last:border-b-0">
              {/* Question as H3 so it's crawlable */}
              <h3 className="mb-3 font-display text-xl font-semibold sm:text-2xl">
                {item.question}
              </h3>
              {/* Answer text */}
              <p className="text-sm leading-relaxed text-[var(--muted-text)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
