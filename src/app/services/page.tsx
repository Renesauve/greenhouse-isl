import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services",
  description: "Island Greenhouse Sales offers delivery, site preparation, wood foundation installation, greenhouse assembly, and greenhouse viewings by appointment.",
};

const services = [
  {
    title: "Delivery",
    description:
      "We deliver greenhouses across Vancouver Island and all of British Columbia. Free pickup is available in Nanaimo and Victoria, with $99 delivery to most BC communities. Pick up in Delta and save an additional $100 off your purchase price.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: "Site Preparation",
    description:
      "Before your greenhouse can be installed, you need a level site. We can help you prepare your site to ensure a solid, level foundation for your greenhouse. Proper site preparation is essential for the longevity and performance of your greenhouse.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Wood Foundation Installations",
    description:
      "We offer wood foundation installation services for your greenhouse. A perimeter foundation provides a solid base and helps keep your greenhouse level and secure. Our foundations are built to last and designed specifically for Planta greenhouses.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Greenhouse Assembly",
    description:
      "While many customers enjoy building their greenhouse themselves, we understand it can be a big project. We offer professional greenhouse assembly services to get your greenhouse up and running quickly. Planta also provides assembly instructions with videos, a phone app, and a paper owner\u2019s manual.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Greenhouse Viewings",
    description:
      "Want to see a greenhouse in person before you buy? We have four greenhouses available to view by appointment at our location in Nanaimo, BC. Contact us to schedule a viewing and see the quality of Planta greenhouses firsthand.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Our Services
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            We don&apos;t just sell greenhouses &mdash; we help you every step of the way, from choosing the right model to getting it set up and growing.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl border border-gray-100 p-6 sm:p-8 flex flex-col sm:flex-row gap-6"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-forest/10 flex items-center justify-center text-forest">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-charcoal mb-2">{service.title}</h2>
                  <p className="text-charcoal/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-charcoal/60 mb-4">
              Have questions about our services? Get in touch &mdash; we&apos;re happy to help.
            </p>
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
