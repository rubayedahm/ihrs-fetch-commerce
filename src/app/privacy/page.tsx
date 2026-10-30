import type { Metadata } from "next";
import { company } from "@/content/company";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <PolicyPage title="Privacy notice">
      <p>
        {company.legalName} is the data controller for personal information we receive in running our business.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>Order details shared with us by eBay or TikTok Shop (name, delivery address, items ordered) so we can fulfil orders.</li>
        <li>Messages you send us through those platforms or through the contact form on this website.</li>
      </ul>
      <h2>How we use it</h2>
      <p>
        Only to process and deliver orders, handle returns and answer enquiries, and to meet our legal and accounting
        obligations. We share delivery details with carriers and suppliers only as needed to send your order. We
        never sell personal data.
      </p>
      <h2>How long we keep it</h2>
      <p>Order records are kept for six years for tax purposes, then deleted.</p>
      <h2>Your rights</h2>
      <p>
        Under UK GDPR you can ask to see, correct or delete your data
        {company.email ? <> by emailing <a href={`mailto:${company.email}`}>{company.email}</a></> : " by contacting us"}.
        You can also complain to the Information Commissioner's Office (ico.org.uk).
      </p>
      <p>This website does not use advertising or tracking cookies.</p>
    </PolicyPage>
  );
}
