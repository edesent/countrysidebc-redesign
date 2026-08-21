"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_OFFSET = 96;

function scrollToHash() {
  if (!window.location.hash) return;

  const element = document.querySelector(window.location.hash);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

export function HashScroller() {
  const pathname = usePathname();

  useEffect(() => {
    const id = window.setTimeout(scrollToHash, 60);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.clearTimeout(id);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}
