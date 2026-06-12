const reservationNotes = [
  "Atendimento de terça a domingo.",
  "Reservas para almoço e jantar.",
  "Grupos maiores podem pedir confirmação por telefone.",
];

export default function ReservasPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1 text-sm font-semibold text-[var(--foreground)]">
              Reservas
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Faça sua reserva
            </h1>
            <p className="text-base leading-7 text-[var(--muted)] sm:text-lg">
              Preencha o formulário para organizar sua mesa com antecedência.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Informações úteis</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
              {reservationNotes.map((note) => (
                <li key={note} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--primary)]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
          <form className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
                Nome
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome"
                  className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-emerald-100"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
                E-mail
                <input
                  type="email"
                  name="email"
                  placeholder="seuemail@exemplo.com"
                  className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-emerald-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
                Quantidade de pessoas
                <select className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-emerald-100">
                  <option>1 pessoa</option>
                  <option>2 pessoas</option>
                  <option>3 pessoas</option>
                  <option>4 pessoas</option>
                  <option>5 pessoas ou mais</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
                Data da reserva
                <input
                  type="date"
                  name="data"
                  className="rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-emerald-100"
                />
              </label>
            </div>

            <label className="grid gap-2 text-sm font-semibold text-[var(--foreground)]">
              Observações
              <textarea
                name="mensagem"
                placeholder="Ex.: mesa próxima à janela"
                className="min-h-32 rounded-2xl border border-[var(--border)] bg-white px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
            >
              Enviar reserva
            </button>
          </form>
        </section>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[1fr_1.2fr]">
          <div className="bg-[var(--primary-dark)] p-6 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-white/75">Nosso ambiente</p>
            <h2 className="mt-3 text-2xl font-semibold">Um espaço simples, limpo e agradável para refeições do dia a dia.</h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Um espaço simples, limpo e agradável para refeições do dia a dia.
            </p>
          </div>
          <div className="grid min-h-64 place-items-center bg-[var(--background)] p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <p className="text-sm font-semibold text-[var(--foreground)]">Mesa 1</p>
                <p className="mt-1 text-sm text-[var(--muted)]">2 pessoas</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <p className="text-sm font-semibold text-[var(--foreground)]">Mesa 2</p>
                <p className="mt-1 text-sm text-[var(--muted)]">4 pessoas</p>
              </div>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
                <p className="text-sm font-semibold text-[var(--foreground)]">Mesa 3</p>
                <p className="mt-1 text-sm text-[var(--muted)]">Janela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}