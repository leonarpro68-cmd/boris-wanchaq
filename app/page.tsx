import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

const propuestas = [
  {
    titulo: "Seguridad ciudadana",
    descripcion:
      "Serenazgo fortalecido con más patrullaje integrado, cámaras inteligentes en puntos críticos y juntas vecinales activas en cada barrio.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  },
  {
    titulo: "Transporte y movilidad",
    descripcion:
      "Ordenamiento del tránsito, semaforización moderna, paraderos seguros y vías recuperadas para un Wánchaq que se mueve sin caos.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
      />
    ),
  },
  {
    titulo: "Salud para todos",
    descripcion:
      "Campañas médicas descentralizadas, postas equipadas y programas de prevención para el bienestar de cada familia wanchina.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    ),
  },
  {
    titulo: "Educación de calidad",
    descripcion:
      "Colegios municipales modernizados, becas para jóvenes talentos y bibliotecas digitales abiertas a toda la comunidad.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    ),
  },
  {
    titulo: "Medio ambiente",
    descripcion:
      "Más áreas verdes, recuperación de la ribera del Huatanay, reciclaje vecinal y un distrito limpio que respira futuro.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c-4.97 4.5-7.5 8.06-7.5 11.25a7.5 7.5 0 0 0 15 0C19.5 11.06 16.97 7.5 12 3Zm0 18V9.75"
      />
    ),
  },
  {
    titulo: "Desarrollo económico",
    descripcion:
      "Impulso a emprendedores y mercados locales, trámites municipales simplificados y ferias que dinamizan la economía del distrito.",
    icono: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    ),
  },
];

const eventos = [
  {
    dia: "24",
    mes: "JUL",
    categoria: "Caminata vecinal",
    titulo: "Recorrido por los mercados de Wánchaq",
    descripcion:
      "Boris visitará el mercado de Ttio y conversará con comerciantes sobre la reactivación económica del distrito.",
    lugar: "Mercado de Ttio · 9:00 a.m.",
  },
  {
    dia: "02",
    mes: "AGO",
    categoria: "Foro abierto",
    titulo: "Diálogo ciudadano: seguridad en nuestros barrios",
    descripcion:
      "Un espacio abierto para que los vecinos presenten sus propuestas y preocupaciones sobre seguridad ciudadana.",
    lugar: "Parque Mariscal Gamarra · 5:00 p.m.",
  },
  {
    dia: "15",
    mes: "AGO",
    categoria: "Voluntariado",
    titulo: "Jornada de limpieza del río Huatanay",
    descripcion:
      "Súmate a la brigada ambiental de la campaña. Juntos recuperaremos los espacios naturales de Wánchaq.",
    lugar: "Ribera del Huatanay · 8:00 a.m.",
  },
];

const redes = [
  {
    nombre: "Facebook",
    href: "https://www.facebook.com/boris.aguilarl/",
    icono: (
      <path d="M13.5 21v-7h2.5l.5-3h-3V9.05c0-.87.24-1.55 1.5-1.55H16.6V4.8c-.28-.04-1.24-.12-2.36-.12-2.33 0-3.74 1.42-3.74 4.03V11H8v3h2.5v7h3Z" />
    ),
  },
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/boris.aguilarl/",
    icono: (
      <path d="M12 4.5c2.44 0 2.73.01 3.7.05.9.04 1.38.19 1.7.32.43.17.73.37 1.05.69.32.32.52.62.69 1.05.13.32.28.8.32 1.7.04.97.05 1.26.05 3.7s-.01 2.73-.05 3.7c-.04.9-.19 1.38-.32 1.7-.17.43-.37.73-.69 1.05-.32.32-.62.52-1.05.69-.32.13-.8.28-1.7.32-.97.04-1.26.05-3.7.05s-2.73-.01-3.7-.05c-.9-.04-1.38-.19-1.7-.32a2.83 2.83 0 0 1-1.05-.69 2.83 2.83 0 0 1-.69-1.05c-.13-.32-.28-.8-.32-1.7-.04-.97-.05-1.26-.05-3.7s.01-2.73.05-3.7c.04-.9.19-1.38.32-1.7.17-.43.37-.73.69-1.05.32-.32.62-.52 1.05-.69.32-.13.8-.28 1.7-.32.97-.04 1.26-.05 3.7-.05ZM12 3c-2.48 0-2.79.01-3.77.06-.97.04-1.64.2-2.22.42-.6.24-1.11.55-1.62 1.06-.51.51-.82 1.02-1.06 1.62-.22.58-.38 1.25-.42 2.22C2.86 9.36 2.85 9.67 2.85 12.15c0 2.48.01 2.79.06 3.77.04.97.2 1.64.42 2.22.24.6.55 1.11 1.06 1.62.51.51 1.02.82 1.62 1.06.58.22 1.25.38 2.22.42.98.05 1.29.06 3.77.06s2.79-.01 3.77-.06c.97-.04 1.64-.2 2.22-.42.6-.24 1.11-.55 1.62-1.06.51-.51.82-1.02 1.06-1.62.22-.58.38-1.25.42-2.22.05-.98.06-1.29.06-3.77s-.01-2.79-.06-3.77c-.04-.97-.2-1.64-.42-2.22a4.35 4.35 0 0 0-1.06-1.62 4.35 4.35 0 0 0-1.62-1.06c-.58-.22-1.25-.38-2.22-.42C14.79 3.01 14.48 3 12 3Zm0 4.4a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Zm0 7.85a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm4.94-9.15a1.11 1.11 0 1 0 0 2.22 1.11 1.11 0 0 0 0-2.22Z" />
    ),
  },
  {
    nombre: "TikTok",
    href: "https://www.tiktok.com/@boris.aguilar02",
    icono: (
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    ),
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-600">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="flex-1 bg-white text-stone-800">
      <Header />

      {/* ============ HERO ============ */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-emerald-950 pt-16"
      >
        {/* Detalles de fondo */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-emerald-800/40 blur-3xl" />
          <div className="absolute -bottom-48 -right-24 h-[28rem] w-[28rem] rounded-full bg-red-700/20 blur-3xl" />
          <div className="absolute right-1/3 top-1/4 h-64 w-64 rounded-full bg-emerald-600/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-0 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:pt-20">
          <div className="fade-up pb-14 text-center lg:pb-24 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Candidato a la Alcaldía de Wánchaq · Cusco
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Boris <span className="text-emerald-300">Aguilar</span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-xl font-medium leading-relaxed text-emerald-50/90 lg:mx-0">
              Juntos, <span className="font-bold text-white">venceremos</span> por el
              Wánchaq que merecemos: un distrito seguro, ordenado y con
              oportunidades para todos.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#contacto"
                className="w-full rounded-full bg-red-600 px-8 py-4 text-center text-base font-bold text-white shadow-xl shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto"
              >
                Súmate al cambio
              </a>
              <a
                href="#propuestas"
                className="w-full rounded-full border border-emerald-300/40 px-8 py-4 text-center text-base font-semibold text-emerald-50 transition hover:border-emerald-200 hover:bg-emerald-900/60 sm:w-auto"
              >
                Ver propuestas
              </a>
            </div>
          </div>

          <div className="fade-up-delay relative mx-auto flex w-full max-w-sm items-center justify-center pb-14 lg:max-w-none lg:pb-24">
            <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="relative z-10 w-72 overflow-hidden rounded-t-[10rem] rounded-b-3xl border-4 border-white/10 shadow-2xl shadow-emerald-950/50 sm:w-80 lg:w-[24rem]">
              <Image
                src="/foto1.jpg"
                alt="Boris Aguilar, candidato a la alcaldía de Wánchaq"
                width={2000}
                height={2000}
                priority
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-8 left-0 z-20 hidden items-center gap-3 rounded-2xl bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur sm:flex lg:-left-6 lg:bottom-16">
              <Image
                src="/logo.png"
                alt="Logo del movimiento Venceremos"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-600">
                  Movimiento
                </p>
                <p className="text-lg font-extrabold tracking-tight text-emerald-900">
                  Venceremos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROPUESTAS ============ */}
      <section id="propuestas" className="scroll-mt-16 bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Nuestras propuestas</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              Un plan claro para transformar Wánchaq
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Seis ejes de trabajo concretos, construidos escuchando a los
              vecinos de cada barrio del distrito.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {propuestas.map((p, i) => (
              <Reveal key={p.titulo} delay={(i % 3) * 100} className="h-full">
                <article className="group h-full rounded-2xl border border-stone-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-950/10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.6}
                      stroke="currentColor"
                    >
                      {p.icono}
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">{p.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                    {p.descripcion}
                  </p>
                  <span className="mt-5 block h-1 w-10 rounded-full bg-red-600/80 transition-all duration-300 group-hover:w-16" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SOBRE BORIS ============ */}
      <section id="sobre-boris" className="scroll-mt-16 bg-stone-50 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-emerald-700/30" />
            <Image
              src="/boris-trabajo.png"
              alt="Boris Aguilar trabajando con la comunidad"
              width={665}
              height={845}
              className="relative rounded-3xl object-cover shadow-2xl shadow-emerald-950/20"
            />
            <div className="absolute -bottom-6 -right-3 rounded-2xl bg-emerald-900 px-6 py-4 shadow-xl sm:-right-6">
              <p className="text-3xl font-extrabold text-white">+15</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                años sirviendo a Cusco
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionLabel>Sobre Boris Aguilar</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              Un vecino que conoce Wánchaq de cerca
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                Boris Aguilar es un profesional y emprendedor cusqueño con más
                de 15 años de experiencia trabajando junto a organizaciones
                vecinales, comerciantes y jóvenes del distrito. Conoce las
                calles, los mercados y las necesidades reales de Wánchaq porque
                las ha vivido de primera mano.
              </p>
              <p>
                Su compromiso es liderar una gestión municipal transparente,
                moderna y cercana a la gente: menos escritorio y más calle,
                menos promesas y más resultados medibles para cada familia
                wanchina.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                "Líder vecinal y promotor de iniciativas comunitarias en Wánchaq",
                "Emprendedor con experiencia en gestión y desarrollo local",
                "Impulsor de programas deportivos y culturales para la juventud",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-stone-700">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-4 border-red-600 pl-5">
              <p className="text-lg font-semibold italic text-emerald-950">
                “Wánchaq no necesita más discursos. Necesita trabajo, honestidad
                y a todos sus vecinos empujando en la misma dirección.”
              </p>
              <footer className="mt-2 text-sm font-medium text-stone-500">
                — Boris Aguilar
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ============ PLAN DE GOBIERNO ============ */}
      <section
        id="plan"
        className="relative scroll-mt-16 overflow-hidden bg-emerald-950 py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-emerald-700/30 blur-3xl" />
          <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-red-700/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <SectionLabel>Plan de gobierno</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Conoce el plan completo, punto por punto
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-emerald-100/85">
              Nada de promesas vacías: descarga el documento oficial con las
              propuestas detalladas para Wánchaq y revísalo con tu familia y
              tus vecinos.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/plan-de-gobierno.pdf"
                download="Plan-de-Gobierno-Boris-Aguilar-Wanchaq.pdf"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-red-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-red-600/30 transition hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Descargar Plan de Gobierno (PDF)
              </a>
              <a
                href="/plan-de-gobierno.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border border-emerald-300/40 px-8 py-4 text-base font-semibold text-emerald-50 transition hover:border-emerald-200 hover:bg-emerald-900/60 sm:w-auto"
              >
                Leer en línea
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NOTICIAS / AGENDA ============ */}
      <section id="agenda" className="scroll-mt-16 bg-white py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>Agenda de campaña</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              Próximas actividades
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              Acompáñanos en los recorridos, foros y jornadas de voluntariado.
              La campaña se hace en la calle, contigo.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {eventos.map((evento, i) => (
              <Reveal key={evento.titulo} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-stone-100 bg-stone-50/60 p-7 transition duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl bg-emerald-900 text-white">
                      <span className="text-2xl font-extrabold leading-none">
                        {evento.dia}
                      </span>
                      <span className="text-[11px] font-bold tracking-widest text-emerald-300">
                        {evento.mes}
                      </span>
                    </div>
                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
                      {evento.categoria}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-emerald-950">
                    {evento.titulo}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-stone-600">
                    {evento.descripcion}
                  </p>
                  <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    {evento.lugar}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACTO ============ */}
      <section id="contacto" className="scroll-mt-16 bg-stone-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>Contacto y voluntariado</SectionLabel>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-950 sm:text-4xl">
              Súmate al cambio, Wánchaq te necesita
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-stone-600">
              ¿Quieres ser voluntario, organizar una reunión en tu barrio o
              simplemente contarnos qué cambiarías de Wánchaq? Escríbenos: cada
              mensaje se lee y se responde.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Correo
                  </p>
                  <a
                    href="mailto:contacto@borisaguilar.pe"
                    className="font-semibold text-emerald-950 hover:text-red-600"
                  >
                    contacto@borisaguilar.pe
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    WhatsApp de campaña
                  </p>
                  <a
                    href="https://wa.me/51984000000"
                    className="font-semibold text-emerald-950 hover:text-red-600"
                  >
                    +51 984 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
                    Local de campaña
                  </p>
                  <p className="font-semibold text-emerald-950">
                    Av. Tomasa Ttito Condemayta, Wánchaq, Cusco
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-stone-100 bg-white p-8 shadow-xl shadow-emerald-950/5 sm:p-10">
              <h3 className="text-xl font-bold text-emerald-950">Escríbenos</h3>
              <p className="mb-7 mt-1.5 text-sm text-stone-500">
                Completa el formulario y el equipo de campaña te responderá.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-emerald-950 text-emerald-100/80">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Logo del movimiento Venceremos"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-cover"
              />
              <span className="leading-tight">
                <span className="block text-sm font-bold text-white">Boris Aguilar</span>
                <span className="block text-[11px] font-medium uppercase tracking-widest text-emerald-300">
                  Wánchaq · Cusco
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Campaña por un Wánchaq seguro, ordenado y con oportunidades.
              Movimiento Venceremos.
            </p>
            <div className="mt-6 flex gap-3">
              {redes.map((red) => (
                <a
                  key={red.nombre}
                  href={red.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={red.nombre}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-900 text-emerald-100 transition hover:bg-red-600 hover:text-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    {red.icono}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Navegación
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["Inicio", "#inicio"],
                ["Propuestas", "#propuestas"],
                ["Sobre Boris", "#sobre-boris"],
                ["Plan de Gobierno", "#plan"],
                ["Agenda", "#agenda"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">
              Contacto
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contacto@borisaguilar.pe"
                  className="transition hover:text-white"
                >
                  contacto@borisaguilar.pe
                </a>
              </li>
              <li>
                <a href="https://wa.me/51984000000" className="transition hover:text-white">
                  +51 984 000 000
                </a>
              </li>
              <li>Av. Tomasa Ttito Condemayta, Wánchaq, Cusco, Perú</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-900">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-emerald-200/60 sm:flex-row sm:px-6">
            <p>© 2026 Campaña Boris Aguilar. Todos los derechos reservados.</p>
            <p>Wánchaq, Cusco — Perú</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
