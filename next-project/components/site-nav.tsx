"use client";

import Link from "next/link";
import { ActionButtons } from "./action-buttons";

export function SiteNav() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--primary)] text-sm font-bold text-white">
            CS
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold text-[var(--foreground)]">Casa Sabor</span>
            <span className="block text-sm text-[var(--muted)]">Restaurante</span>
          </span>
        </Link>

        <nav aria-label="Menu principal">
          <ActionButtons
            className="flex flex-wrap gap-2"
            items={[
              { href: "/", label: "Início", tone: "secondary" },
              { href: "/cardapio", label: "Cardápio", tone: "secondary" },
              { href: "/reservas", label: "Reservas", tone: "secondary" },
            ]}
          />
        </nav>
      </div>
    </header>
  );
}