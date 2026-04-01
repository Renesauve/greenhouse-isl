import Link from "next/link";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import { getFeaturedProducts } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-charcoal to-charcoal" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-forest/20 border border-forest/30 px-4 py-1.5 text-sm font-medium text-forest-light mb-6">
              #1 Planta Dealer in Canada
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Premium Greenhouses for{" "}
              <span className="text-forest-light">Vancouver Island</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              European-manufactured Planta greenhouses built to withstand Canadian winters.
              Heavy-duty galvanized steel frames, polycarbonate panels, and up to 10-year warranties.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/greenhouses" size="lg">
                Browse Greenhouses
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Get a Quote
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <Container className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "Up to 10 Yr", label: "Manufacturer Warranty" },
              { value: "100 km/h", label: "Wind Resistance" },
              { value: "Up to 6 ft", label: "Snow Load (Sungrow)" },
              { value: "European", label: "Manufacturing" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-forest">{stat.value}</div>
                <div className="text-sm text-charcoal/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Popular Greenhouses
            </h2>
            <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
              Our most popular models — built tough for BC weather with premium materials and backed by manufacturer warranties.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/greenhouses" variant="outline">
              View All Greenhouses
            </Button>
          </div>
        </Container>
      </section>

      {/* Series Comparison */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
              Two Series, One Standard of Quality
            </h2>
            <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
              Choose the series that fits your needs and budget. Both are built with heavy-duty galvanized steel and polycarbonate panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sungrow */}
            <div className="rounded-xl border-2 border-forest/20 bg-forest/5 p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Sungrow Series</h3>
              <p className="text-amber font-semibold text-sm mb-4">Premium Line</p>
              <ul className="space-y-3">
                {[
                  "Bell-shaped roof design",
                  "8 ft peak height",
                  "75 psf snow load (6 ft of snow)",
                  "10-year manufacturer warranty",
                  "Dutch splitter doors on both ends",
                  "Sizes from 6.5 ft to 33 ft long",
                  "Starting at $2,350 CAD",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                    <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/greenhouses?series=sungrow"
                className="mt-6 inline-flex items-center text-sm font-semibold text-forest hover:text-forest-dark transition-colors"
              >
                View Sungrow Models
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Sigma */}
            <div className="rounded-xl border-2 border-gray-200 bg-white p-8">
              <h3 className="text-2xl font-bold text-charcoal mb-2">Sigma Series</h3>
              <p className="text-amber font-semibold text-sm mb-4">Value Line</p>
              <ul className="space-y-3">
                {[
                  "Arch-shaped roof — sheds weather efficiently",
                  "7 ft peak height",
                  "32 psf snow load (3 ft of snow)",
                  "5-year manufacturer warranty",
                  "Doors on both ends",
                  "Sizes from 13 ft to 32 ft long",
                  "Starting at $2,650 CAD",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
                    <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/greenhouses?series=sigma"
                className="mt-6 inline-flex items-center text-sm font-semibold text-forest hover:text-forest-dark transition-colors"
              >
                View Sigma Models
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="rounded-2xl bg-gradient-to-r from-forest to-forest-dark p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Start Growing?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Contact us for a quote, ask questions, or learn more about which greenhouse is right for your space.
              We serve all of Vancouver Island and British Columbia.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/greenhouses" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Browse Greenhouses
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
