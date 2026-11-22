"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

/**
 * Link to a section of a page ("/#services"). When the reader is already on that page,
 * it scrolls to the section itself: Next's <Link> does nothing when the URL already
 * carries the same hash, so a second click on the same item would otherwise be ignored.
 */
export function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

    const [path, hash] = href.split("#");
    if (!hash || (path || pathname) !== pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(window.history.state, "", `#${hash}`);
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
