"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { company } from "@/content/company";
import { SectionHeading } from "./Section";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!company.formEndpoint) {
      const subject = encodeURIComponent(`Enquiry from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`);
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(company.formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10";

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            intro="Supplier, trade and banking enquiries are welcome. Customers with an order question should message us through eBay or TikTok Shop for the fastest reply."
          />
          <ul className="mt-8 space-y-4 text-ink-soft">
            {company.email && (
              <li className="flex items-center gap-3">
                <Mail className="size-5 text-brand" />
                <a href={`mailto:${company.email}`} className="hover:text-brand">{company.email}</a>
              </li>
            )}
            {company.registeredOffice && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <span>{company.registeredOffice}</span>
              </li>
            )}
          </ul>
        </div>

        {status === "sent" ? (
          <div className="grid place-items-center rounded-3xl border border-line bg-paper p-10 text-center">
            <p className="font-display text-xl font-bold">Thank you. We'll be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-line bg-paper p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-ink-soft">
                Name
                <input name="name" required autoComplete="name" className={`${field} mt-1.5`} />
              </label>
              <label className="block text-sm font-medium text-ink-soft">
                Email
                <input name="email" type="email" required autoComplete="email" className={`${field} mt-1.5`} />
              </label>
            </div>
            <label className="block text-sm font-medium text-ink-soft">
              Message
              <textarea name="message" required rows={5} className={`${field} mt-1.5 resize-y`} />
            </label>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-ink px-6 py-3 font-semibold text-white transition hover:bg-brand disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-600">Something went wrong. Please email us directly.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
