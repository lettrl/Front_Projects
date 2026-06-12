const menuItems = [
  {
    name: "Prato do dia",
    description: "Arroz, feijão, carne grelhada e legumes salteados.",
    price: "R$ 28,90",
  },
  {
    name: "Massa artesanal",
    description: "Massa ao molho rústico com ervas e parmesão.",
    price: "R$ 32,50",
  },
  {
    name: "Sobremesa da casa",
    description: "Doce servido no prato com frutas frescas.",
    price: "R$ 14,00",
  },
  {
    name: "Prato vegetariano",
    description: "Combinação leve com legumes, grãos e molho da estação.",
    price: "R$ 26,00",
  },
  {
    name: "Bebida refrescante",
    description: "Suco natural preparado na hora com frutas do dia.",
    price: "R$ 9,50",
  },
  {
    name: "Combo da tarde",
    description: "Entrada, prato principal e bebida para um lanche reforçado.",
    price: "R$ 36,00",
  },
];

export default function CardapioPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 max-w-3xl space-y-4">
        <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1 text-sm font-semibold text-[var(--foreground)]">
          Cardápio
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
          Cardápio do dia
        </h1>
        <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
          Pratos do dia para consultar com calma.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {menuItems.map((item) => (
          <article
            key={item.name}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-[var(--foreground)]">{item.name}</h2>
            <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.description}</p>

            <div className="mt-6 border-t border-[var(--border)] pt-4">
              <span className="text-lg font-semibold text-[var(--primary-dark)]">{item.price}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Cardápio</p>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">Algumas opções da casa para o dia.</p>
        </div>
        <p className="text-sm text-[var(--muted)]">Acompanhe a navegação pelas páginas do restaurante.</p>
      </div>
    </section>
  );
}