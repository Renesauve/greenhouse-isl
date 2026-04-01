import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get a free quote on Planta greenhouses. Contact Island Greenhouse Sales for pricing, availability, and shipping. Call (250) 740-5110.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Contact Us
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            Interested in a greenhouse? Have questions? Call us, email us, or send a message below. Monday&ndash;Sunday, 8am&ndash;9pm PST.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-charcoal mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Direct contact */}
              <div className="rounded-xl bg-forest/5 border border-forest/20 p-6">
                <h3 className="font-bold text-charcoal mb-4">Reach Us Directly</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+12507405110" className="text-sm font-semibold text-charcoal hover:text-forest transition-colors">
                      (250) 740-5110
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-forest flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@islandgreenhousesales.ca" className="text-sm font-semibold text-charcoal hover:text-forest transition-colors break-all">
                      info@islandgreenhousesales.ca
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Nanaimo, BC</p>
                      <p className="text-xs text-charcoal/50">Viewings by appointment only</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-xs text-charcoal/50">
                  Available Monday&ndash;Sunday, 8am&ndash;9pm PST
                </p>
              </div>

              <div className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="font-bold text-charcoal mb-3">How to Order</h3>
                <ol className="space-y-2 text-sm text-charcoal/70 list-decimal list-inside">
                  <li>Call or message us to discuss your needs</li>
                  <li>We&apos;ll email you an invoice for review</li>
                  <li>50% deposit to place your order</li>
                  <li>Greenhouse ships within 5 business days</li>
                  <li>Balance due upon receipt</li>
                </ol>
              </div>

              <div className="rounded-xl bg-white border border-gray-100 p-6">
                <h3 className="font-bold text-charcoal mb-2">Pickup Locations</h3>
                <ul className="space-y-1 text-sm text-charcoal/70">
                  <li>Nanaimo, BC</li>
                  <li>Victoria, BC</li>
                  <li>Delta, BC (save $100 off purchase price)</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
