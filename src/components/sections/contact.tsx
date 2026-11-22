"use client";

import Image from "next/image";
import { useActionState } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { RevealHeading } from "@/components/ui/reveal-heading";
import { SectionBadge } from "@/components/ui/section-badge";

const inputClass =
  "mt-2.5 h-[56px] w-full rounded-[10px] bg-[#f4f4f4] px-5 text-base text-ink outline-none placeholder:text-[#777] focus:ring-2 focus:ring-lime";

export function Contact() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContact, { status: "idle" });
  const sent = state.status === "success";

  return (
    <section id="contact" className="px-3 pt-[60px] md:px-5">
      <div className="grid overflow-hidden rounded-[30px] bg-brand lg:grid-cols-2">
        <div className="px-6 py-[100px] sm:px-10 xl:px-16">
          <div className="mx-auto max-w-[620px]">
            <div className="text-center lg:text-left">
              <SectionBadge variant="dark">Fale Conosco</SectionBadge>
              <RevealHeading
                text="Pronto para dar o primeiro passo na sua trilha? Vamos conversar"
                className="mt-[3px] font-heading text-4xl font-semibold leading-tight text-white md:text-[48px] md:leading-[58px]"
              />
            </div>

            <form
              action={formAction}
              className="mt-10 flex flex-col gap-5 rounded-[20px] bg-white p-6 sm:p-10"
            >
              {/* Honeypot for bots: hidden from people and screen readers. */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />
              <label className="text-base text-ink">
                Seu nome
                <input required name="name" placeholder="Nome" className={inputClass} />
              </label>
              <label className="text-base text-ink">
                E-mail
                <input required type="email" name="email" placeholder="E-mail" className={inputClass} />
              </label>
              <label className="text-base text-ink">
                Telefone
                <input type="tel" name="phone" placeholder="Telefone" className={inputClass} />
              </label>
              <label className="text-base text-ink">
                Mensagem
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Conte um pouco sobre os seus objetivos"
                  className={`${inputClass} h-auto resize-none py-4`}
                />
              </label>
              {state.status === "error" && (
                <p role="alert" className="text-sm text-red-700">
                  {state.message}
                </p>
              )}
              <button
                type="submit"
                disabled={pending || sent}
                className="mt-1 h-[56px] disabled:cursor-not-allowed disabled:opacity-80 rounded-[48px] bg-[linear-gradient(99deg,#0e3a37_0%,#3b8b8a_93.92%)] text-sm font-semibold uppercase tracking-[0.7px] text-white transition-opacity hover:opacity-90"
              >
                {pending ? "Enviando…" : sent ? "Obrigado! Entraremos em contato" : "Enviar solicitação"}
              </button>
            </form>
          </div>
        </div>

        <div className="relative min-h-[360px] sm:min-h-[480px]">
          <Image
            src="/images/contact.jpg"
            alt="Consultor explicando um plano financeiro em reunião"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
