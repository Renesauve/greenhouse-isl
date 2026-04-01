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
      {/* Hero Section — warm, bright, natural */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream via-offwhite to-offwhite">
        {/* Decorative leaf shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -top-10 -right-20 w-[500px] h-[500px] text-sage/30 rotate-12" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
          </svg>
          <svg className="absolute -bottom-20 -left-10 w-[400px] h-[400px] text-sage/20 -rotate-45" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
          </svg>
          <svg className="absolute top-1/3 right-1/4 w-[200px] h-[200px] text-forest/5 rotate-90" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
          </svg>
        </div>

        <Container className="relative py-28 sm:py-36 lg:py-44">
          <div className="max-w-2xl">
            <ScrollReveal animation="fade-in" duration={500}>
              <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 border border-forest/15 px-4 py-2 text-sm font-medium text-forest mb-6">
                <svg className="h-4 w-4 text-sage-dark" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" />
                </svg>
                #1 Planta Dealer in Canada
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-dark leading-tight">
                Grow Year-Round on{" "}
                <span className="text-forest italic">Vancouver Island</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="mt-6 text-lg text-earth leading-relaxed max-w-xl">
                European-crafted Planta greenhouses, built to thrive through BC winters.
                Galvanized steel frames, polycarbonate panels, and up to 10-year warranties —
                so you can focus on what you love: growing.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={300}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/greenhouses" size="lg">
                  Explore Greenhouses
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get a Free Quote
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </Container>

        {/* Organic bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full text-offwhite" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Trust Bar — warm, earthy */}
      <section className="bg-offwhite">
        <Container className="py-10 sm:py-12">
          <div className="rounded-2xl bg-cream/80 border border-sage/30 p-8 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { end: 10, suffix: " Yr", label: "Manufacturer Warranty", prefix: "Up to " },
                { end: 100, suffix: " km/h", label: "Wind Resistance", prefix: "" },
                { end: 6, suffix: " ft", label: "Snow Load Capacity", prefix: "Up to " },
                { end: 500, suffix: "+", label: "Happy Growers", prefix: "" },
              ].map((stat, i) => (
                <ScrollReveal key={stat.label} animation="fade-up" delay={i * 80}>
                  <div>
                    <div className="text-3xl sm:text-4xl font-serif font-bold text-forest">
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} />
                    </div>
                    <div className="text-sm text-earth-light mt-2">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works — gardening journey */}
      <section className="py-20 sm:py-28 bg-offwhite">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <p className="text-sage-dark font-medium mb-3 italic">From first call to first harvest</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark">
                Your Greenhouse Journey
              </h2>
              <p className="mt-4 text-earth max-w-xl mx-auto leading-relaxed">
                We walk with you every step of the way — from choosing the right greenhouse to your first season of growing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {[
              {
                step: "1",
                title: "Chat With Us",
                description: "Tell us about your garden, your space, and what you dream of growing. We'll guide you from there.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Pick Your Greenhouse",
                description: "Choose from our Sungrow or Sigma series — we'll help match the size and features to your needs.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "We Deliver to You",
                description: "Shipped right across Vancouver Island and BC. Pickup options also available in Nanaimo, Victoria & Delta.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                step: "4",
                title: "Start Growing",
                description: "Set it up, plant your first seeds, and enjoy year-round harvests — rain, snow, or shine.",
                icon: (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} animation="fade-up" delay={i * 120}>
                <div className="relative text-center group bg-white rounded-2xl p-8 border border-sage/20 hover:border-sage/40 hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage/20 text-forest mb-5 group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-sm font-serif font-semibold text-amber mb-1">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-forest-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-earth leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-20 sm:py-28 bg-cream/50">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sage-dark font-medium mb-3 italic">Handpicked for BC gardens</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark">
                Popular Greenhouses
              </h2>
              <p className="mt-4 text-earth max-w-xl mx-auto leading-relaxed">
                Our most-loved models — built tough for West Coast weather, with premium materials and full manufacturer warranties.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <ScrollReveal key={product.slug} animation="fade-up" delay={i * 120}>
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

      {/* Why Choose Us — warm, earthy feel */}
      <section className="py-20 sm:py-28 bg-offwhite relative overflow-hidden">
        {/* Decorative leaf */}
        <svg className="absolute -bottom-16 -right-16 w-[300px] h-[300px] text-sage/10 rotate-45 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
        </svg>

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <p className="text-sage-dark font-medium mb-3 italic">Why gardeners choose us</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark">
                  Greenhouses That Stand the Test of Time
                </h2>
                <p className="mt-4 text-earth leading-relaxed">
                  As Canada&apos;s top Planta dealer, we bring you European-engineered greenhouses made for real weather —
                  not just fair-weather gardening. Personal service from people who actually grow.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                {
                  title: "Built for BC Weather",
                  description: "Galvanized steel frames and twin-wall polycarbonate panels handle 100 km/h winds and up to 6 feet of snow. These greenhouses don't just survive winter — they thrive in it.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                },
                {
                  title: "Real Advice, Not a Sales Pitch",
                  description: "We help you pick the right size, series, and accessories for your actual space and growing goals. No upselling — just honest guidance.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Local & Island-Wide",
                  description: "Based in Nanaimo, serving all of Vancouver Island and BC. Pickup in Nanaimo, Victoria & Delta, or delivered to your door.",
                  icon: (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} animation="fade-left" delay={i * 150}>
                  <div className="flex gap-5 group bg-white rounded-xl p-6 border border-sage/15 hover:border-sage/30 hover:shadow-sm transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-forest-dark mb-1">{item.title}</h3>
                      <p className="text-sm text-earth leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Series Comparison */}
      <section className="py-20 sm:py-28 bg-cream/50">
        <Container>
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sage-dark font-medium mb-3 italic">Find your perfect fit</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark">
                Two Series, One Standard of Quality
              </h2>
              <p className="mt-4 text-earth max-w-xl mx-auto leading-relaxed">
                Both built with galvanized steel and polycarbonate panels — choose based on your space, budget, and climate.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sungrow */}
            <ScrollReveal animation="fade-right" delay={100}>
              <div className="rounded-2xl border border-forest/20 bg-white p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-sage/25 flex items-center justify-center">
                    <svg className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-forest-dark">Sungrow Series</h3>
                    <p className="text-amber font-semibold text-sm">Our Premium Line</p>
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
                    <li key={item} className="flex items-start gap-3 text-sm text-earth">
                      <svg className="h-5 w-5 text-sage-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <div className="rounded-2xl border border-earth-light/30 bg-white p-8 sm:p-10 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                    <svg className="h-5 w-5 text-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-forest-dark">Sigma Series</h3>
                    <p className="text-amber font-semibold text-sm">Great Value</p>
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
                    <li key={item} className="flex items-start gap-3 text-sm text-earth">
                      <svg className="h-5 w-5 text-sage-dark flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      <section className="py-20 sm:py-28 bg-offwhite relative overflow-hidden">
        {/* Decorative leaves */}
        <svg className="absolute top-10 -left-10 w-[250px] h-[250px] text-sage/10 -rotate-30 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
        </svg>

        <Container className="relative">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <p className="text-sage-dark font-medium mb-3 italic">From our growing community</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark">
                What Our Customers Say
              </h2>
              <p className="mt-4 text-earth max-w-xl mx-auto leading-relaxed">
                Real stories from greenhouse owners across Vancouver Island and BC.
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
                <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-sage/15 hover:shadow-md transition-shadow duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <svg key={j} className="h-5 w-5 text-amber" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-earth leading-relaxed flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-sage/10">
                    <div className="w-10 h-10 rounded-full bg-sage/20 flex items-center justify-center">
                      <span className="text-sm font-bold text-forest">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-forest-dark text-sm">{testimonial.name}</div>
                      <div className="text-xs text-earth-light">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Request Form — warm green, not dark/techy */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-dark" />
        {/* Organic leaf shapes instead of blur circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -top-20 -right-20 w-[450px] h-[450px] text-white/5 rotate-45" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
          </svg>
          <svg className="absolute -bottom-20 -left-10 w-[350px] h-[350px] text-white/5 -rotate-30" viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
          </svg>
        </div>

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="fade-right">
              <div>
                <p className="text-sage font-medium mb-3 italic">Ready to get growing?</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Request a Free Quote
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Tell us about your greenhouse dreams and we&apos;ll put together a personalized quote.
                  No pressure — just friendly advice from people who love growing too.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Friendly, no-pressure consultation",
                    "Best pricing on all Planta models",
                    "Delivery across Vancouver Island & BC",
                    "Ongoing support after your purchase",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/30 flex items-center justify-center">
                        <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
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

      {/* CTA Section — warm, inviting */}
      <section className="py-20 sm:py-28 bg-offwhite">
        <Container>
          <ScrollReveal animation="zoom-in">
            <div className="rounded-3xl bg-cream border border-sage/25 p-10 sm:p-16 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <svg className="absolute -top-10 -left-10 w-[200px] h-[200px] text-sage/10 rotate-12 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
                <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
              </svg>
              <svg className="absolute -bottom-10 -right-10 w-[180px] h-[180px] text-sage/10 -rotate-20 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
                <path d="M100 0C100 0 130 60 130 100C130 140 100 200 100 200C100 200 70 140 70 100C70 60 100 0 100 0Z" />
              </svg>

              <div className="relative">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-forest-dark">
                  Ready to Start Growing?
                </h2>
                <p className="mt-4 text-earth max-w-lg mx-auto leading-relaxed">
                  Whether you&apos;re a seasoned gardener or just getting started, we&apos;d love to help you find the right greenhouse.
                  Reach out anytime — we&apos;re always happy to chat.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary" size="lg">
                    Get a Free Quote
                  </Button>
                  <Button href="/greenhouses" variant="outline" size="lg">
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
