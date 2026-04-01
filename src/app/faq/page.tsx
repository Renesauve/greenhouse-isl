import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ordering, shipping, assembly, warranties, and site preparation for Planta greenhouses from Island Greenhouse Sales.",
};

const faqs = [
  {
    question: "How do I order a greenhouse?",
    answer:
      "Call or message us anytime Monday\u2013Sunday, 8am\u20139pm PST. After we help you choose the right greenhouse, we\u2019ll need your full name, email address, shipping address, and phone number. We\u2019ll then email you an invoice for review. A 50% deposit is required to place your order, with the balance due upon receipt.",
  },
  {
    question: "How long until I receive my greenhouse?",
    answer:
      "Once your deposit is received, expect your greenhouse shipment within 5 business days. If you\u2019re picking up, allow up to 3 business days for your order to be ready. We can also hold your greenhouse until you\u2019re ready to pick it up \u2014 just let us know.",
  },
  {
    question: "What do I need to prepare before my greenhouse arrives?",
    answer:
      "You need to prepare a level site and install a perimeter foundation. DIY foundation information and instructions are available at plantagreenhouses.ca. If you\u2019d prefer professional help, we offer both site preparation and wood foundation installation services.",
  },
  {
    question: "How do I assemble my greenhouse?",
    answer:
      "Planta Greenhouses provides comprehensive assembly resources: detailed instructions with videos, a phone app to guide you step by step, and a paper owner\u2019s manual included with every greenhouse. Many customers successfully build their greenhouse themselves. If you\u2019d rather have professional help, we offer greenhouse assembly services as well.",
  },
  {
    question: "What about the warranty?",
    answer:
      "Planta Sungrow greenhouses come with a 10-year manufacturer\u2019s warranty. Planta Sigma greenhouses come with a 5-year manufacturer\u2019s warranty. Commercial greenhouses (Terra, Alpine, Everest) have a 10-year warranty. Our island-made cedar Patio Greenhouse has a 2-year warranty on the frame and a 10-year manufacturer\u2019s warranty on the polycarbonate panels.",
  },
  {
    question: "What are the shipping options?",
    answer:
      "Free pickup is available in Nanaimo and Victoria. Pick up in Delta, BC and save an additional $100 off your purchase price. Delivery to most communities in BC is $99. We\u2019ve delivered to over 80 cities and communities across the province.",
  },
  {
    question: "Can I see a greenhouse in person before buying?",
    answer:
      "Yes! We have four greenhouses available to view by appointment at our location in Nanaimo, BC. Contact us to schedule a viewing and see the quality of Planta greenhouses firsthand.",
  },
  {
    question: "What\u2019s the difference between Sungrow and Sigma?",
    answer:
      "Both series use heavy-duty galvanized steel frames and 6mm polycarbonate panels. The Sungrow series features a bell-shaped roof, 8 ft peak height, 75 psf snow load (6 ft of snow), and a 10-year warranty. The Sigma series has an arch-shaped roof, 7 ft peak height, 32 psf snow load (3 ft of snow), and a 5-year warranty. The Sigma is our value line \u2014 excellent quality at a more accessible price point.",
  },
  {
    question: "Do I need a foundation?",
    answer:
      "Planta greenhouses can be installed with or without a foundation \u2014 no concrete pad is required. However, a perimeter foundation (wood or other material) is recommended for best results and longevity. We offer wood foundation installation services if you\u2019d like professional help.",
  },
  {
    question: "How reliable are these greenhouses? Do they hold up?",
    answer:
      "Of the hundreds of happy customers that have purchased a Planta greenhouse from Island Greenhouse Sales, less than 1% have requested a warranty claim. Planta has proven to be an excellent company to work with, and their service and communication has exceeded expectations.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            Everything you need to know about ordering, shipping, assembly, and caring for your greenhouse.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8"
                >
                  <h2 className="text-lg font-bold text-charcoal mb-3">{faq.question}</h2>
                  <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-gradient-to-r from-forest to-forest-dark p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-3">Still Have Questions?</h2>
              <p className="text-white/80 mb-6">
                We&apos;re available Monday&ndash;Sunday, 8am&ndash;9pm PST. Call, email, or send us a message.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
                <Button href="tel:+12507405110" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Call (250) 740-5110
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
