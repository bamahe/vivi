// ============================================
// QuickAnswer — AEO-optimized Q&A block
// Server component. Renders a bold question
// heading with a concise 40-60 word answer
// styled in the site's accent palette.
// ============================================

interface QuickAnswerProps {
  /** The question displayed as a heading */
  question: string;
  /** A concise 40-60 word direct answer */
  answer: string;
}

export default function QuickAnswer({ question, answer }: QuickAnswerProps) {
  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-accent/20 bg-accent/5 px-8 py-8">
      {/* Speakable structured data — tells voice assistants which parts to read */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [
                ".quick-answer-question",
                ".quick-answer-text",
              ],
            },
          }),
        }}
      />

      {/* Question heading — styled for AI answer-engine extraction */}
      <h2 className="quick-answer-question mb-4 font-display text-2xl font-semibold text-accent sm:text-3xl">
        {question}
      </h2>
      {/* Direct answer paragraph */}
      <p className="quick-answer-text text-base leading-relaxed text-[var(--foreground)]">
        {answer}
      </p>
    </div>
  );
}
