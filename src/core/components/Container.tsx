import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  /** Narrow side gutters — used by the navbar, which sits closer to the edges than page content. */
  tight?: boolean;
}) {
  const gutters = tight ? "px-3 sm:px-4 lg:px-5" : "px-4 sm:px-8 lg:px-12";
  return (
    <div className={`mx-auto w-full max-w-[1600px] ${gutters} ${className}`}>
      {children}
    </div>
  );
}
