"use client";

/**
 * ClientWidgets — lazy-loads client-only widgets (chat, etc.)
 * so they don't block server rendering or inflate the initial JS bundle.
 */
import dynamic from "next/dynamic";

const ChatWidget = dynamic(
  () => import("@/components/ChatWidget").then((m) => ({ default: m.ChatWidget })),
  { ssr: false }
);

export function ClientWidgets() {
  return <ChatWidget />;
}
