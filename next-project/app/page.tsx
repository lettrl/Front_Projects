import Image from "next/image";
import { ActionButtons } from "../components/action-buttons";

const highlights = [
  {
    title: "Pratos feitos na hora",
    description: "Receitas simples, com ingredientes frescos e apresentação caprichada.",
  },
  {
    title: "Ambiente acolhedor",
    description: "Um espaço leve para almoço em família, encontro rápido ou jantar tranquilo.",
  },
  {
    title: "Atendimento rápido",
    description: "Um serviço prático para quem quer comer bem sem complicação.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="py-10 lg:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center">
            <h1 className="mb-3 max-w-xl text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
              Uma experiência simples, acolhedora e cheia de sabor.
            </h1>
            <p className="mb-6 max-w-xl text-base leading-7 text-[var(--muted)] sm:text-lg">
              O Casa Sabor é um restaurante de comida caseira com pratos preparados na hora,
              ingredientes frescos e um ambiente pensado para refeições tranquilas.
            </p>
            <ActionButtons
              items={[
                { href: "/cardapio", label: "Ver cardápio", tone: "primary" },
                { href: "/reservas", label: "Fazer reserva", tone: "secondary" },
              ]}
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3">
            <Image
              src="/hero.svg"
              alt="Mesa de restaurante com prato principal e bebida"
              width={900}
              height={700}
              priority
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-8">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-2xl font-semibold text-[var(--foreground)]">Destaques da casa</h2>
          <p className="mb-6 text-[var(--muted)]">Três motivos para escolher o nosso restaurante.</p>

          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((highlight, index) => {
              const imageSrc = index === 0 ? "/prato1.svg" : index === 1 ? "/prato2.svg" : "/prato3.svg";

              return (
                <article
                  key={highlight.title}
                  className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm"
                >
                  <Image
                    src={imageSrc}
                    alt={highlight.title}
                    width={600}
                    height={400}
                    className="h-40 w-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{highlight.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
