"use client";

import { useState } from "react";

// ⚠️ Reemplaza "TU_ID_AQUI" con el ID de tu formulario de Formspree.
// 1. Crea una cuenta gratis en https://formspree.io
// 2. Crea un formulario y copia su ID (ej. "mqkvgzeb")
// Los mensajes llegarán directo al correo de la campaña.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_ID_AQUI";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Error al enviar");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-emerald-950">
          Nombre completo
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          required
          placeholder="Tu nombre"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-emerald-950">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tucorreo@ejemplo.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold text-emerald-950">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={4}
          placeholder="Cuéntanos cómo quieres participar o qué te preocupa de Wánchaq"
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "success" && (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          ¡Gracias por sumarte! Te contactaremos muy pronto.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          Hubo un problema al enviar. Inténtalo de nuevo o escríbenos a{" "}
          <a href="mailto:contacto@borisaguilar.pe" className="underline">
            contacto@borisaguilar.pe
          </a>
          .
        </p>
      )}
    </form>
  );
}
