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
      {/* Question heading — styled for AI answer-engine extraction */}
      <h2 className="mb-4 font-display text-2xl font-semibold text-accent sm:text-3xl">
        {question}
      </h2>
      {/* Direct answer paragraph */}
      <p className="text-base leading-relaxed text-[var(--foreground)]">
        {answer}
      </p>
    </div>
  );
}
