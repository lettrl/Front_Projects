"use client";

import Link from "next/link";

type ActionButton = {
  href: string;
  label: string;
  tone: "primary" | "secondary";
};

type ActionButtonsProps = {
  items: ActionButton[];
  className?: string;
};

const toneClasses = {
  primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)]",
  secondary:
    "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)]",
} as const;

export function ActionButtons({ items, className }: ActionButtonsProps) {
  return (
    <div className={className ?? "flex flex-col gap-3 sm:flex-row"}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition ${toneClasses[item.tone]}`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}