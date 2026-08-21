"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * The church's number is base64'd in site.ts and assembled in the browser, so
 * it never appears in the HTML source, the JSON-LD, or a scraper's harvest.
 */
export default function Phone({
  className = "",
  showIcon = false,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  const [num, setNum] = useState<{ href: string; label: string } | null>(null);

  useEffect(() => {
    try {
      setNum({
        href: atob(site.phoneEncoded),
        label: atob(site.phoneDisplayEncoded),
      });
    } catch {
      setNum(null);
    }
  }, []);

  if (!num) {
    return (
      <span className={className} aria-hidden="true">
        &nbsp;
      </span>
    );
  }

  return (
    <a href={`tel:${num.href}`} className={`focus-ring ${className}`}>
      {showIcon && (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="mr-2 inline-block h-4 w-4 align-[-2px]"
        >
          <path
            d="M6.5 3.5h2.2l1.6 4-2 1.4a11.4 11.4 0 0 0 5.3 5.3l1.4-2 4 1.6v2.2a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {num.label}
    </a>
  );
}
