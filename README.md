# IHRS Fetch Commerce Limited: company website

Public website for IHRS Fetch Commerce Limited, a UK online retailer that sources products from suppliers and sells them on **eBay** and **TikTok Shop**.

Built with **Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4 and Motion**. It is exported as a static site and deployed to **GitHub Pages** by GitHub Actions on every push to `main`.

## Update the company details

All facts live in **`src/content/company.ts`**:

| Field | What to enter |
| --- | --- |
| `companyNumber`, `registeredOffice`, `directors` | Exactly as shown on Companies House |
| `vatNumber` | Only if VAT registered |
| `tradingSince`, `email`, `phone` | Your details |
| `channels[].url` / `handle` | Public eBay store URL and TikTok Shop URL / seller names |
| `categories` | The product categories you actually sell |

Fields left empty (`""`) are hidden automatically. You can edit the file in the browser on GitHub (pencil icon); the site redeploys within about 2 minutes.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Contact form

Without settings, the form opens the visitor's email app. To receive messages directly, create a free form at [Formspree](https://formspree.io) and set its URL as `formEndpoint` in `company.ts`.

## Custom domain

Add a `CNAME` file containing your domain (e.g. `www.ihrsfetch.co.uk`), point the domain's DNS at GitHub Pages, and set the domain under *Settings → Pages*.
