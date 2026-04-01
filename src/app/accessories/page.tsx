import type { Metadata } from "next";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { accessories } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Greenhouse Accessories",
  description: "Roof vents, shelves, and accessories for your Planta greenhouse. Manual and automatic options available.",
};

export default function AccessoriesPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Accessories
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            Enhance your greenhouse with roof vents for ventilation and shelves for organized storage.
            All accessories are designed specifically for Planta greenhouses.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <div className="space-y-6">
            {accessories.map((product) => (
              <div
                key={product.slug}
                id={product.slug}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] md:aspect-auto bg-gray-100">
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest capitalize mb-2">
                          {product.series} Series
                        </span>
                        <h2 className="text-xl font-bold text-charcoal">{product.name}</h2>
                      </div>
                      <span className="text-xl font-bold text-forest whitespace-nowrap">
                        {formatPrice(product.price)}
                      </span>
                    </div>

                    <p className="mt-3 text-charcoal/70 text-sm leading-relaxed">
                      {product.longDescription}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-charcoal/70">
                          <svg className="h-4 w-4 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button href="/contact" size="sm">
                        Contact to Order
                      </Button>
                      <Button href={product.plantaUrl} variant="outline" size="sm" external>
                        View on Planta
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
