import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Shipping & Pickup",
  description: "Free greenhouse pickup in Nanaimo and Victoria. $99 delivery across BC. Save $100 with Delta pickup. Island Greenhouse Sales shipping info.",
};

export default function ShippingPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Shipping &amp; Pickup
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            We offer multiple pickup locations and affordable delivery across British Columbia.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            {/* Shipping options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="rounded-xl bg-forest/5 border-2 border-forest/20 p-6 text-center">
                <div className="text-3xl font-bold text-forest mb-1">$0</div>
                <div className="text-sm font-semibold text-charcoal mb-2">Pickup in Nanaimo</div>
                <p className="text-xs text-charcoal/50">Free pickup at our Nanaimo location</p>
              </div>
              <div className="rounded-xl bg-forest/5 border-2 border-forest/20 p-6 text-center">
                <div className="text-3xl font-bold text-forest mb-1">$0</div>
                <div className="text-sm font-semibold text-charcoal mb-2">Pickup in Victoria</div>
                <p className="text-xs text-charcoal/50">Free pickup at our Victoria location</p>
              </div>
              <div className="rounded-xl bg-amber/10 border-2 border-amber/30 p-6 text-center">
                <div className="text-3xl font-bold text-amber-dark mb-1">Save $100</div>
                <div className="text-sm font-semibold text-charcoal mb-2">Pickup in Delta</div>
                <p className="text-xs text-charcoal/50">Save $100 off purchase price with Delta pickup</p>
              </div>
            </div>

            <div className="rounded-xl bg-white border border-gray-100 p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-bold text-charcoal mb-4">Delivery Across BC</h2>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-forest">$99</span>
                <span className="text-charcoal/60">delivery to most communities in BC</span>
              </div>
              <p className="text-charcoal/70 leading-relaxed">
                We deliver to over 80 cities and communities across British Columbia. Delivery is available to most locations
                on Vancouver Island, the Lower Mainland, the Okanagan, and beyond. Contact us for a delivery quote to your area.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-100 p-6 sm:p-8 mb-8">
              <h2 className="text-xl font-bold text-charcoal mb-4">Delivery Timeline</h2>
              <ul className="space-y-3">
                {[
                  "Once your deposit is received, expect your greenhouse shipment within 5 business days",
                  "If picking up, allow up to 3 business days for your order to be ready",
                  "We can hold your greenhouse until you are ready to pick it up",
                  "Balance is due upon receipt of your greenhouse",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal/70">
                    <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-charcoal/5 border border-charcoal/10 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-charcoal mb-4">Commercial Greenhouse Shipping</h2>
              <p className="text-charcoal/70 leading-relaxed">
                Commercial greenhouses (Terra, Alpine, Everest) are larger shipments and may have different shipping costs.
                Contact us for a shipping quote on commercial models.
              </p>
            </div>

            <div className="mt-10 text-center">
              <p className="text-charcoal/60 mb-4">
                Questions about shipping or pickup? We&apos;re happy to help.
              </p>
              <Button href="/contact" size="lg">
                Get a Shipping Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
