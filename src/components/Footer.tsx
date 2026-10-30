import Link from "next/link";
import { company } from "@/content/company";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{company.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/#channels" className="hover:text-white">Storefronts</Link></li>
            <li><Link href="/#company" className="hover:text-white">Company details</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Policies</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/returns/" className="hover:text-white">Returns & refunds</Link></li>
            <li><Link href="/shipping/" className="hover:text-white">Shipping</Link></li>
            <li><Link href="/privacy/" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs leading-relaxed sm:px-6">
          © {year} {company.legalName}.
          {company.jurisdiction && ` Registered in ${company.jurisdiction}`}
          {company.companyNumber && `, company number ${company.companyNumber}`}
          {company.jurisdiction && "."}
          {company.registeredOffice && ` Registered office: ${company.registeredOffice}.`}
          {company.vatNumber && ` VAT ${company.vatNumber}.`}
        </p>
      </div>
    </footer>
  );
}
