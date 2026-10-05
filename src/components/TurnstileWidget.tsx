"use client";

// Cloudflare Turnstile CAPTCHA widget.
// Loads Cloudflare's script, renders the challenge, and hands the resulting
// token up to the parent form via the onVerify callback.
//
// IMPORTANT: this version auto-resets on error/expiry. Turnstile tokens die
// after ~5 minutes, and a stale token makes the form fail silently forever
// until the visitor reloads the page. The error/expired callbacks below
// recycle the widget so the form keeps working without a refresh.

import { useEffect, useRef } from "react";

interface TurnstileWidgetProps {
  // Called with a fresh token on success, and with "" whenever the token
  // is no longer usable (error or expiry) so the parent can disable submit.
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export default function TurnstileWidget({ onVerify }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Keep the latest callback in a ref so the effect below never re-runs
  // (re-running would tear down and re-render the widget on every keystroke).
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  useEffect(() => {
    // This sanitising is load-bearing. The value stored in Vercel had a
    // trailing LITERAL backslash-n (two ordinary characters, not a real
    // newline), so .trim() alone does NOT remove it. Cloudflare then rejects
    // the key with 'Invalid input for parameter "sitekey"', the widget never
    // mounts, and every form is stuck with a disabled submit button.
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.replace(
      /(\\n|\s)+$/,
      ""
    );
    if (!siteKey) {
      console.error("[Turnstile] NEXT_PUBLIC_TURNSTILE_SITE_KEY is missing");
      return;
    }

    // Load Cloudflare's script once per page.
    const scriptId = "cf-turnstile-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      document.head.appendChild(script);
    }

    // Poll until the script is ready, then render the widget exactly once.
    const interval = setInterval(() => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          // NOTE: "invisible" is NOT a valid size — passing it throws and the
          // widget never mounts. Invisible mode is set in the CF dashboard.
          size: "flexible",
          theme: "light",
          callback: (token: string) => onVerifyRef.current(token),
          "error-callback": () => {
            // Clear the token so submit stays blocked, then recycle the widget.
            onVerifyRef.current("");
            if (window.turnstile && widgetIdRef.current) {
              window.turnstile.reset(widgetIdRef.current);
            }
          },
          "expired-callback": () => {
            onVerifyRef.current("");
            if (window.turnstile && widgetIdRef.current) {
              window.turnstile.reset(widgetIdRef.current);
            }
          },
        });
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      // Clean up the widget on unmount so React re-mounts don't leak widgets.
      if (window.turnstile && widgetIdRef.current) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Widget already gone — nothing to do.
        }
        widgetIdRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="mt-2" />;
}
