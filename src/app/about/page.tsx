import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Island Greenhouse Sales is Canada's #1 Planta Greenhouse dealer since 2021. Serving Vancouver Island and all of BC from Nanaimo.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            About Island Greenhouse Sales
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            Canada&apos;s #1 volume Planta Greenhouse dealer. Authorized dealer since 2021.
          </p>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-charcoal mb-4">
              Canada&apos;s #1 Planta Greenhouse Dealer
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Island Greenhouse Sales is proud to be Canada&apos;s #1 volume Planta Greenhouse dealer.
              Based in Nanaimo on Vancouver Island, we&apos;ve been an authorized Planta dealer since 2021,
              serving gardeners and growers across all of British Columbia with premium European-manufactured
              greenhouses built to withstand our unique West Coast climate.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              We&apos;ve delivered greenhouses to over 80 cities and communities across BC, from Victoria
              to the Okanagan and everywhere in between. Whether you&apos;re a backyard gardener looking
              for your first greenhouse or a commercial grower expanding your operation, we have the right
              greenhouse for you.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-10">
              Why Planta Greenhouses?
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Planta greenhouses are manufactured in Europe to the highest standards. Every greenhouse
              features heavy-duty galvanized steel frames that resist rust and corrosion, paired with
              double-wall polycarbonate panels that provide excellent insulation for year-round growing.
              These are not flimsy hobby greenhouses &mdash; they&apos;re engineered structures designed to
              handle up to 6 feet of snow and 100 km/h winds.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Of the hundreds of happy customers that have purchased a Planta greenhouse from us,
              less than 1% have requested a warranty claim. Planta has proven to be an excellent company
              to work with, and their service and communication has exceeded expectations.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-10">
              Our Product Range
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              We carry the full range of Planta greenhouses including the premium Sungrow series,
              the value-oriented Sigma series, and the Farmer commercial line (Terra, Alpine, and Everest).
              We also offer island-made western red cedar Patio Greenhouses for smaller spaces, plus a
              range of accessories including roof vents, shelves, cold frames, polycarbonate panels,
              planter boxes, and hydroponics systems.
            </p>

            <h2 className="text-2xl font-bold text-charcoal mb-4 mt-10">
              Full-Service Greenhouse Dealer
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              We&apos;re more than just a greenhouse retailer. We offer delivery across BC, site preparation,
              wood foundation installations, greenhouse assembly, and greenhouse viewings by appointment at
              our Nanaimo location. We&apos;re here to help you every step of the way.
            </p>

            {/* Trust signals */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Authorized Since 2021",
                  description: "Authorized Planta dealer and Canada's #1 volume dealer",
                },
                {
                  title: "80+ Communities",
                  description: "Delivered greenhouses to over 80 cities and communities in BC",
                },
                {
                  title: "<1% Warranty Claims",
                  description: "Hundreds of happy customers with an exceptional satisfaction rate",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white border border-gray-100 p-6">
                  <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal/60">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
              <Button href="/greenhouses" variant="outline" size="lg">
                Browse Greenhouses
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
