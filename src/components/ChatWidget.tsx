"use client";

/**
 * ChatWidget — floating AI concierge for ViVi PM (vivipm.com).
 * Bottom-right bubble that opens a chat panel.
 * Streams responses from /api/chat and captures leads inline.
 */
import { useState, useRef, useEffect, useCallback, FormEvent } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

// --- Types ---
interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  property_address: string;
  need: string;
}

// --- Constants ---
const MAX_MESSAGES = 20; // hard cap — after this, force lead form
const LEAD_FORM_TOKEN = "[SHOW_LEAD_FORM]";

/**
 * Simple markdown → HTML for chat bubbles.
 * Handles bold, italic, bullet lists, and line breaks.
 */
function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/g, "<em>$1</em>")
    .replace(/^[-•]\s+(.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="my-1 space-y-0.5">$1</ul>')
    .replace(/\n/g, "<br />");
}

// Starter question chips
const STARTER_CHIPS = [
  "How much does property management cost?",
  "What areas do you serve?",
  "What services are included?",
];

export function ChatWidget() {
  // --- State ---
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadFormData, setLeadFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    property_address: "",
    need: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, showLeadForm, leadSubmitted]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Listen for "toggle-chat" custom event (from MobileBottomBar etc.)
  useEffect(() => {
    const handler = () => setIsOpen((prev) => !prev);
    window.addEventListener("toggle-chat", handler);
    return () => window.removeEventListener("toggle-chat", handler);
  }, []);

  // --- Send a message to the chat API ---
  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      const userMsg: ChatMessage = { role: "user", content: trimmed };
      const updated = [...messages, userMsg];
      setMessages(updated);
      setInput("");
      setIsLoading(true);

      // Hit the hard cap — show lead form instead of calling API
      if (updated.length >= MAX_MESSAGES) {
        setShowLeadForm(true);
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: updated }),
        });

        // Handle JSON fallback (no API key) or error
        if (res.headers.get("Content-Type")?.includes("application/json")) {
          const json = await res.json();
          if (json.fallback) {
            setShowLeadForm(true);
            setIsLoading(false);
            return;
          }
          if (json.error) {
            setMessages((prev) => [
              ...prev,
              { role: "assistant", content: json.error },
            ]);
            setIsLoading(false);
            return;
          }
        }

        // Stream the response
        const reader = res.body?.getReader();
        if (!reader) throw new Error("No response stream");

        const decoder = new TextDecoder();
        let assistantText = "";
        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantText += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: assistantText };
            return copy;
          });
        }

        // Check for lead form token
        if (assistantText.includes(LEAD_FORM_TOKEN)) {
          const cleaned = assistantText.replace(LEAD_FORM_TOKEN, "").trim();
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "assistant", content: cleaned };
            return copy;
          });
          setShowLeadForm(true);
        }
      } catch (err) {
        console.error("Chat error:", err);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleChipClick = (chip: string) => {
    sendMessage(chip);
  };

  // --- Lead form submission ---
  const handleLeadSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLeadSubmitting(true);
    try {
      const res = await fetch("/api/leads/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadFormData),
      });
      if (res.ok) {
        setLeadSubmitted(true);
        setShowLeadForm(false);
      }
    } catch (err) {
      console.error("Lead submit error:", err);
    } finally {
      setLeadSubmitting(false);
    }
  };

  return (
    <>
      {/* Floating bubble (hidden when panel is open) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-4 z-40 flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group"
          aria-label="Open chat with ViVi PM concierge"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold hidden sm:inline">
            Ask ViVi PM
          </span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed z-50
            bottom-0 right-0 w-full h-full
            md:bottom-6 md:right-4 md:w-[400px] md:h-auto md:max-h-[min(500px,80vh)] md:rounded-2xl
            flex flex-col bg-cream shadow-2xl border border-border overflow-hidden"
          role="dialog"
          aria-label="ViVi PM chat concierge"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-accent text-white shrink-0">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-sm">ViVi PM Concierge</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0 md:min-h-[320px]">
            {/* Welcome when empty */}
            {messages.length === 0 && (
              <div className="space-y-3">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm text-gray-800">
                  Hi there! I&apos;m the ViVi PM concierge. Ask me anything
                  about property management across Tampa Bay&apos;s five counties.
                </div>
                <div className="flex flex-wrap gap-2">
                  {STARTER_CHIPS.map((chip) => (
                    <button
                      key={chip}
                      onClick={() => handleChipClick(chip)}
                      className="text-xs bg-accent/10 text-accent border border-accent/30 rounded-full px-3 py-1.5 hover:bg-accent/20 transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message bubbles */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "user" ? (
                  <div className="rounded-2xl px-4 py-2.5 max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap bg-accent text-white rounded-br-sm">
                    {msg.content}
                  </div>
                ) : (
                  <div
                    className="rounded-2xl px-4 py-2.5 max-w-[85%] text-sm leading-relaxed bg-gray-100 text-gray-800 rounded-tl-sm"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                  />
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] text-sm text-gray-500 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Typing...
                </div>
              </div>
            )}

            {/* Inline lead form */}
            {showLeadForm && !leadSubmitted && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 space-y-3">
                <p className="text-sm font-semibold text-accent">
                  Share your info and we&apos;ll reach out personally:
                </p>
                <form onSubmit={handleLeadSubmit} className="space-y-2">
                  {[
                    { key: "name", placeholder: "Name", type: "text", required: true },
                    { key: "email", placeholder: "Email", type: "email", required: true },
                    { key: "phone", placeholder: "Phone", type: "tel", required: true },
                    { key: "property_address", placeholder: "Property address (optional)", type: "text", required: false },
                    { key: "need", placeholder: "What do you need help with? (optional)", type: "text", required: false },
                  ].map((field) => (
                    <input
                      key={field.key}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={leadFormData[field.key as keyof LeadFormData]}
                      onChange={(e) =>
                        setLeadFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                      }
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  ))}
                  <button
                    type="submit"
                    disabled={leadSubmitting}
                    className="w-full bg-accent text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-accent-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {leadSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Get My Free Consultation"
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* Confirmation */}
            {leadSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 flex items-start gap-2">
                <span className="text-lg leading-none">&#10003;</span>
                <span>Got it! Barrett will personally reach out within a few hours.</span>
              </div>
            )}

            {/* Hard cap */}
            {messages.length >= MAX_MESSAGES && !showLeadForm && !leadSubmitted && (
              <div className="bg-accent/5 border border-accent/20 rounded-xl p-4 text-sm text-accent">
                <p className="font-semibold mb-2">Let&apos;s get you connected with Barrett directly!</p>
                <button
                  onClick={() => setShowLeadForm(true)}
                  className="bg-accent text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-accent-light transition-colors"
                >
                  Share My Info
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="shrink-0 border-t border-border px-3 py-2 flex items-center gap-2 bg-white"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-accent bg-gray-50 disabled:opacity-50"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2 rounded-full bg-accent text-white hover:bg-accent-light transition-colors disabled:opacity-30"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
