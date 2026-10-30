import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Shipping" };

export default function Shipping() {
  return (
    <PolicyPage title="Shipping">
      <p>We ship to addresses across the United Kingdom.</p>
      <h2>Dispatch</h2>
      <p>
        Each listing shows its handling time and estimated delivery date. Orders are dispatched within the handling
        time stated on the listing, and tracking details are uploaded to eBay or TikTok Shop when the parcel is sent.
      </p>
      <h2>Delivery problems</h2>
      <p>
        If your parcel is late or missing, message us through the platform you ordered from and we will investigate
        with the carrier and send a replacement or refund where appropriate.
      </p>
    </PolicyPage>
  );
}
