import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = { title: "Returns & refunds" };

export default function Returns() {
  return (
    <PolicyPage title="Returns & refunds">
      <p>
        Orders placed on eBay or TikTok Shop are covered by that platform's buyer protection as well as your rights
        under UK consumer law. Please start any return through the platform you bought from so it is tracked.
      </p>
      <h2>Changed your mind</h2>
      <p>
        You can cancel an online order within 14 days of receiving it. Return the item within 14 days of telling us,
        unused and in its original condition, and we will refund the price paid including standard delivery.
      </p>
      <h2>Faulty or not as described</h2>
      <p>
        If an item arrives damaged, faulty or not as described, contact us through the platform and we will arrange a
        replacement or full refund, including return postage.
      </p>
      <h2>Refund timing</h2>
      <p>Refunds are issued to the original payment method within 14 days of us receiving the returned item.</p>
    </PolicyPage>
  );
}
