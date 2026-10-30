"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Boxes, Music2, ShoppingBag, Truck } from "lucide-react";
import { company } from "@/content/company";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-24 text-white sm:pt-40 sm:pb-32">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-brand/30 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Actively trading on eBay &amp; TikTok Shop
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            UK multichannel retail,{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
              sourced with care.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {company.legalName} buys quality products from trusted suppliers and sells them to customers
            across the UK through our own eBay and TikTok Shop storefronts.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="/#channels"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-indigo-50"
            >
              View our live storefronts <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/#company"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Company details
            </Link>
          </motion.div>
        </div>

        <FlowDiagram />
      </div>
    </section>
  );
}

function FlowDiagram() {
  const node =
    "flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5 backdrop-blur";
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease }}
      className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 sm:p-8"
      aria-label="How products flow from suppliers to customers"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">Our trading model</p>
      <div className="mt-6 space-y-3">
        <div className={node}>
          <span className="grid size-10 place-items-center rounded-xl bg-amber-400/15 text-amber-300">
            <Boxes className="size-5" />
          </span>
          <div>
            <p className="font-semibold">Trusted suppliers</p>
            <p className="text-sm text-white/55">Wholesale &amp; dropship partners</p>
          </div>
        </div>
        <Connector />
        <div className={`${node} border-brand/40 bg-brand/15`}>
          <span className="grid size-10 place-items-center rounded-xl bg-brand text-white">
            <ShoppingBag className="size-5" />
          </span>
          <div>
            <p className="font-semibold">{company.shortName}</p>
            <p className="text-sm text-white/55">Selection, pricing, listing &amp; service</p>
          </div>
        </div>
        <Connector />
        <div className="grid grid-cols-2 gap-3">
          <div className={node}>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ebay/15 font-display text-sm font-extrabold text-red-300">
              eB
            </span>
            <p className="font-semibold">eBay</p>
          </div>
          <div className={node}>
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-tiktok/15 text-cyan-300">
              <Music2 className="size-5" />
            </span>
            <p className="font-semibold leading-tight">TikTok Shop</p>
          </div>
        </div>
        <Connector />
        <div className={node}>
          <span className="grid size-10 place-items-center rounded-xl bg-accent/15 text-emerald-300">
            <Truck className="size-5" />
          </span>
          <div>
            <p className="font-semibold">Customers across the UK</p>
            <p className="text-sm text-white/55">Tracked delivery &amp; after-sales support</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Connector() {
  return (
    <div className="relative mx-auto h-5 w-px overflow-hidden bg-white/10" aria-hidden>
      <motion.span
        className="absolute inset-x-0 h-2 bg-gradient-to-b from-transparent via-sky-300 to-transparent"
        animate={{ y: [-8, 20] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
