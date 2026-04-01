import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Read what our customers say about their Planta greenhouses. Less than 1% warranty claim rate. Island Greenhouse Sales customer testimonials.",
};

const reviews = [
  {
    quote:
      "The greenhouse allows a much extended growing season. It is also a bit of a refuge, a peaceful place to spend a bit of time. Also, we can get fairly large snow falls here and I don\u2019t have to worry about that.",
    author: "Happy Customer",
    location: "BC, Canada",
  },
  {
    quote:
      "I enjoy the experience of sitting in the greenhouse in the morning or evening. There are less bug infestations as well and my plants are more protected from the elements.",
    author: "Satisfied Gardener",
    location: "Vancouver Island, BC",
  },
  {
    quote:
      "Assembly was a challenge, but we are very happy and proud of our new greenhouse. It\u2019s built like a tank and we know it will last through our winters.",
    author: "Greenhouse Owner",
    location: "BC, Canada",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Customer Reviews
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            Hear from our customers about their experience with Planta greenhouses.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            {/* Stats bar */}
            <div className="rounded-xl bg-forest/5 border border-forest/20 p-6 sm:p-8 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-forest">100s</div>
                  <div className="text-sm text-charcoal/60 mt-1">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-forest">&lt;1%</div>
                  <div className="text-sm text-charcoal/60 mt-1">Warranty Claim Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-forest">80+</div>
                  <div className="text-sm text-charcoal/60 mt-1">BC Communities Served</div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8"
                >
                  <svg className="h-8 w-8 text-forest/20 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>
                  <blockquote className="text-charcoal/80 leading-relaxed text-lg italic">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center">
                      <span className="text-xs font-bold text-forest">{review.author[0]}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-charcoal">{review.author}</div>
                      <div className="text-xs text-charcoal/50">{review.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* About quality */}
            <div className="mt-10 rounded-xl bg-white border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-charcoal mb-3">A Track Record of Quality</h2>
              <p className="text-charcoal/70 leading-relaxed mb-4">
                Of the hundreds of happy customers that have purchased a Planta greenhouse from Island Greenhouse Sales,
                less than 1% of customers have requested a warranty claim. Many of our customers have said assembly was a
                challenge, but they are very happy and proud of their new greenhouse.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Planta has proven to be an excellent company to work with, and their service and communication has
                exceeded expectations. As Canada&apos;s #1 Planta dealer since 2021, we stand behind every greenhouse we sell.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Button href="/contact" size="lg">
                Join Our Happy Customers
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
