import Link from "next/link";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import QuoteForm from "@/components/QuoteForm";
import { getFeaturedProducts } from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-charcoal overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark/90 via-charcoal to-charcoal" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-forest rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-forest-light rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
        </div>

        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <ScrollReveal animation="fade-in" duration={500}>
              <span className="inline-block rounded-full bg-forest/20 border border-forest/30 px-4 py-1.5 text-sm font-medium text-forest-light mb-6">
                #1 Planta Dealer in Canada
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium Greenhouses for{" "}
                <span className="text-forest-light">Vancouver Island</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="mt-6 text-lg text-white/70 max-w-xl">
                European-manufactured Planta greenhouses built to withstand Canadian winters.
                Heavy-duty galvanized steel frames, polycarbonate panels, and up to 10-year warranties.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/greenhouses" size="lg">
                  Browse Greenhouses
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Get a Quote
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Trust Bar - Animated Counters */}
      <section className="bg-white border-b border-gray-100">
        <Container className="py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { end: 10, suffix: " Yr", label: "Manufacturer Warranty", prefix: "Up to " },
              { end: 100, suffix: " km/h", label: "Wind Resistance", prefix: "" },
              { end: 6, suffix: " ft", label: "Snow Load (Sungrow)", prefix: "Up to " },
              { end: 500, suffix: "+", label: "Happy Customers", prefix: "" },
            ].map((stat) => (
              <ScrollReveal key={stat.label} animation="fade-up" delay={0}>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-forest">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <div className="text-sm text-charcoal/50 mt-2">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process / How It Works */}
      <section className="py-20 sm:py-28 bg-offwhite">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-amber uppercase tracking-wider mb-3">How It Works</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
                Your Greenhouse in 4 Simple Steps
              </h2>
              <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
                From consultation to growing — we make it easy to get the perfect greenhouse for your space.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Tell us about your space, climate, and growing goals. We'll help you find the perfect fit.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Selection",
                description: "Choose from our Sungrow or Sigma series with various sizes and configurations.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Delivery",
                description: "We coordinate shipping across Vancouver Island and BC — right to your door.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Start Growing",
                description: "Set up your greenhouse with our support and start your year-round growing journey.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} animation="fade-up" delay={i * 100}>
                <div className="relative text-center group">
                  {/* Step number bg */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-forest/10 text-forest mb-5 group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-amber uppercase tracking-widest mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>

                  {/* Connector line (not on last item) */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] border-t-2 border-dashed border-forest/20" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-28">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-amber uppercase tracking-wider mb-3">Our Collection</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
                Popular Greenhouses
              </h2>
              <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
                Our most popular models — built tough for BC weather with premium materials and backed by manufacturer warranties.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <ScrollReveal key={product.slug} animation="fade-up" delay={i * 100}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="mt-12 text-center">
              <Button href="/greenhouses" variant="outline">
                View All Greenhouses
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="inline-block text-sm font-semibold text-amber uppercase tracking-wider mb-3">Why Choose Us</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
                  We Deliver Quality You Can Trust
                </h2>
                <p className="mt-4 text-charcoal/60 leading-relaxed">
                  As Canada&apos;s #1 Planta dealer, we bring you European-engineered greenhouses built for the toughest conditions.
                  Our personalized service ensures you get exactly the right greenhouse for your needs.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Built to Last",
                  description: "Heavy-duty galvanized steel frames and twin-wall polycarbonate panels withstand winds up to 100 km/h and snow loads up to 6 feet.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  num: "02",
                  title: "Expert Guidance",
                  description: "We help you choose the right size, series, and accessories based on your space, climate zone, and growing goals.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                },
                {
                  num: "03",
                  title: "Island-Wide Service",
                  description: "Serving all of Vancouver Island and BC with reliable delivery, local support, and after-sale assistance.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <ScrollReveal key={item.num} animation="fade-left" delay={i * 150}>
                  <div className="flex gap-5 group">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-amber">{item.num}</span>
                        <h3 className="text-lg font-bold text-charcoal">{item.title}</h3>
                      </div>
                      <p className="text-sm text-charcoal/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Series Comparison */}
      <section className="py-20 sm:py-28 bg-offwhite">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-amber uppercase tracking-wider mb-3">Compare Series</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
                Two Series, One Standard of Quality
              </h2>
              <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
                Choose the series that fits your needs and budget. Both are built with heavy-duty galvanized steel and polycarbonate panels.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sungrow */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="rounded-2xl border-2 border-forest/20 bg-forest/5 p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-forest/20 flex items-center justify-center">
                    <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">Sungrow Series</h3>
                    <p className="text-amber font-semibold text-sm">Premium Line</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {[
                    "Bell-shaped roof design",
                    "8 ft peak height",
                    "75 psf snow load (6 ft of snow)",
                    "10-year manufacturer warranty",
                    "Dutch splitter doors on both ends",
                    "Sizes from 6.5 ft to 33 ft long",
                    "Starting at $2,350 CAD",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/greenhouses?series=sungrow"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-forest hover:text-forest-dark transition-colors group"
                >
                  View Sungrow Models
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Sigma */}
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-charcoal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">Sigma Series</h3>
                    <p className="text-amber font-semibold text-sm">Value Line</p>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {[
                    "Arch-shaped roof — sheds weather efficiently",
                    "7 ft peak height",
                    "32 psf snow load (3 ft of snow)",
                    "5-year manufacturer warranty",
                    "Doors on both ends",
                    "Sizes from 13 ft to 32 ft long",
                    "Starting at $2,650 CAD",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-charcoal/80">
                      <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/greenhouses?series=sigma"
                  className="mt-8 inline-flex items-center text-sm font-semibold text-forest hover:text-forest-dark transition-colors group"
                >
                  View Sigma Models
                  <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-white">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-amber uppercase tracking-wider mb-3">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal">
                What Our Customers Say
              </h2>
              <p className="mt-3 text-charcoal/60 max-w-xl mx-auto">
                Hear from greenhouse owners across Vancouver Island and BC who chose Planta.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Victoria, BC",
                text: "Our Sungrow 26 has been incredible. It handled last winter's storms without any issue — the snow just slides right off. We're growing tomatoes year-round now!",
                rating: 5,
              },
              {
                name: "David & Lisa K.",
                location: "Nanaimo, BC",
                text: "The team helped us pick the perfect Sigma for our backyard. Delivery was smooth and the setup instructions were clear. Best investment we've made for our garden.",
                rating: 5,
              },
              {
                name: "Robert T.",
                location: "Courtenay, BC",
                text: "I compared greenhouses for months before choosing Planta. The galvanized steel frame and polycarbonate panels are in a different league. 10-year warranty sealed the deal.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <ScrollReveal key={testimonial.name} animation="fade-up" delay={i * 150}>
                <div className="bg-offwhite rounded-2xl p-8 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <svg key={j} className="h-5 w-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-charcoal/70 leading-relaxed flex-grow italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-forest">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal text-sm">{testimonial.name}</div>
                      <div className="text-xs text-charcoal/50">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Request Form */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-light rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <span className="inline-block text-sm font-semibold text-amber uppercase tracking-wider mb-3">Get Started</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white">
                  Request a Free Quote
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Tell us about your greenhouse needs and we&apos;ll provide a personalized quote.
                  We serve all of Vancouver Island and British Columbia.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Free personalized consultation",
                    "Competitive pricing on all Planta models",
                    "Delivery coordination across BC",
                    "After-sale support & guidance",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="h-5 w-5 text-amber flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-left" delay={200}>
              <QuoteForm />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28">
        <Container>
          <ScrollReveal animation="zoom-in">
            <div className="rounded-2xl bg-gradient-to-r from-charcoal to-charcoal/90 p-10 sm:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-forest rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Start Growing?
                </h2>
                <p className="mt-4 text-white/60 max-w-xl mx-auto">
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
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
