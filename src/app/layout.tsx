import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { company } from "@/content/company";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: {
    default: `${company.legalName} | UK online retailer on eBay & TikTok Shop`,
    template: `%s | ${company.shortName}`,
  },
  description: `${company.legalName} is a UK online retailer that sources products from trusted suppliers and sells them through eBay and TikTok Shop.`,
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: company.legalName,
  name: company.shortName,
  ...(company.email && { email: company.email }),
  ...(company.companyNumber && { identifier: company.companyNumber }),
  ...(company.vatNumber && { vatID: company.vatNumber }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
