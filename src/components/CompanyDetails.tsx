import { ArrowUpRight, Building2 } from "lucide-react";
import { company } from "@/content/company";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./Section";

export function CompanyDetails() {
  const rows: [string, React.ReactNode][] = [
    ["Legal name", company.legalName],
    ["Company type", "Private limited company"],
  ];
  if (company.companyNumber) rows.push(["Company number", company.companyNumber]);
  if (company.jurisdiction) rows.push(["Registered in", company.jurisdiction]);
  if (company.registeredOffice) rows.push(["Registered office", company.registeredOffice]);
  if (company.tradingSince) rows.push(["Trading since", company.tradingSince]);
  if (company.directors.length) rows.push([company.directors.length > 1 ? "Directors" : "Director", company.directors.join(", ")]);
  if (company.vatNumber) rows.push(["VAT number", company.vatNumber]);
  rows.push(["Business activity", "Online retail via eBay and TikTok Shop"]);

  const registerUrl = company.companyNumber
    ? `https://find-and-update.company-information.service.gov.uk/company/${company.companyNumber}`
    : `https://find-and-update.company-information.service.gov.uk/search/companies?q=${encodeURIComponent(company.legalName)}`;

  return (
    <section id="company" className="scroll-mt-20 bg-ink py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-indigo-300 uppercase">Company information</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            A registered UK business
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/65">
            Our details are on the public register at Companies House, so banks, suppliers and partners can check
            them independently.
          </p>
          <a
            href={registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-indigo-50"
          >
            <Building2 className="size-4" /> Check us on Companies House <ArrowUpRight className="size-4" />
          </a>
        </div>
        <Reveal>
          <dl className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-6 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="text-sm text-white/50">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
