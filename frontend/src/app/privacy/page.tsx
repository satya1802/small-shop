"use client";

import { brand } from "@/lib/brand";

export default function Screen() {
  return (
    <div
      className="mx-auto w-full max-w-3xl px-6 py-10"
      style={{ color: brand.primaryColor, fontFamily: brand.fontBody }}
    >
      <p
        className="text-[11px] font-bold uppercase tracking-[0.18em]"
        style={{ color: brand.neutralColor }}
      >
        Privacy
      </p>
      <h1
        className="mt-1 text-3xl font-bold tracking-tight"
        style={{ fontFamily: brand.fontHeading }}
      >
        Privacy notice
      </h1>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em]">What we collect</h2>
        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed">
          Browsing the catalogue on its own collects nothing about you. When you check out we
          collect your contact email, shipping name and address, and the items on your order. If you
          create an account we also keep the email and password you register with.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em]">How we use it</h2>
        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed">
          Your details are used only to process and ship your order, and to show you your own order
          history if you have an account. Card details go straight to Stripe and are never stored by
          us; we keep only Stripe's payment reference against the order.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Cookies</h2>
        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed">
          We set one essential, first-party record of your cookie choice so the consent prompt does
          not ask you again. That record is the only thing stored before you make a choice.
          Non-essential cookies are set only if you accept them, and never if you decline.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em]">How long we keep it</h2>
        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed">
          Order records are kept for tax purposes. An account, and the personal data attached to it,
          can be deleted at any time from My account.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Who to ask</h2>
        <p className="mt-2 max-w-[70ch] text-sm leading-relaxed">
          Write to the shop owner at hello@smallshop.example and we will answer within five working
          days.
        </p>
      </section>
    </div>
  );
}
