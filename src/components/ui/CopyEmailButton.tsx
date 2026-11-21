"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  readonly email: string;
  readonly variant?: "primary" | "secondary" | "ghost";
  readonly showEmail?: boolean;
  readonly className?: string;
}

export function CopyEmailButton({
  email,
  variant = "primary",
  showEmail = false,
  className = "",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }

    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2200);
  }

  const baseClasses =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090B]";

  const variantClasses: Record<
    NonNullable<CopyEmailButtonProps["variant"]>,
    string
  > = {
    primary:
      "border border-emerald-400/80 bg-emerald-500 px-4 py-2.5 text-zinc-950 font-semibold hover:bg-emerald-400",
    secondary:
      "border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-zinc-100 hover:border-emerald-500/40 hover:bg-zinc-900",
    ghost:
      "border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:text-emerald-200",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      aria-label={
        copied ? "Correo copiado al portapapeles" : `Copiar correo ${email}`
      }
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Correo copiado</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{showEmail ? email : "Copiar correo"}</span>
        </>
      )}
    </button>
  );
}
