import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import ProductGallery from "@/components/ProductGallery";
import SpecsTable from "@/components/SpecsTable";
import ProductCard from "@/components/ProductCard";
import { greenhouses, getProductBySlug, getRelatedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return greenhouses.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Greenhouse`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Island Greenhouse Sales`,
      description: product.description,
      images: [{ url: product.thumbnail }],
    },
  };
}

const seriesLabels: Record<string, string> = {
  sungrow: "Sungrow Series",
  sigma: "Sigma Series",
  commercial: "Commercial",
  patio: "Island-Made",
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <section className="py-8 sm:py-12">
        <Container>
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-charcoal/50">
            <Link href="/" className="hover:text-forest transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/greenhouses" className="hover:text-forest transition-colors">Greenhouses</Link>
            <span className="mx-2">/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Gallery */}
            <ProductGallery images={product.images} name={product.name} />

            {/* Product info */}
            <div>
              <span className="inline-block rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest mb-3">
                {seriesLabels[product.series] || product.series}
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
                {product.name}
              </h1>
              <p className="mt-2 text-sm text-charcoal/50">
                {product.specs.width} &times; {product.specs.length} &times; {product.specs.height}
              </p>
              <div className="mt-4 text-3xl font-bold text-forest">
                {formatPrice(product.price)}
                {product.price !== null && (
                  <span className="text-sm font-normal text-charcoal/50 ml-2">CAD</span>
                )}
              </div>
              {product.price !== null && product.category === "commercial" && (
                <p className="text-sm text-charcoal/50 mt-1">Starting price &mdash; multiple sizes available</p>
              )}

              <p className="mt-6 text-charcoal/70 leading-relaxed">
                {product.longDescription}
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button href="/contact" size="lg" className="flex-1">
                  Contact Us to Order
                </Button>
                {product.plantaUrl && (
                  <Button href={product.plantaUrl} variant="outline" size="lg" external className="flex-1">
                    View on Planta
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Button>
                )}
              </div>

              {/* Quick specs */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { label: "Snow Load", value: product.specs.snowLoad },
                  { label: "Wind Rating", value: product.specs.windRating },
                  { label: "Warranty", value: product.specs.warranty },
                  { label: "Panels", value: product.specs.panelType },
                ].filter((s) => s.value && s.value !== "N/A" && !s.value.startsWith("Contact")).map((s) => (
                  <div key={s.label} className="rounded-lg bg-white border border-gray-100 p-3">
                    <div className="text-xs text-charcoal/50">{s.label}</div>
                    <div className="text-sm font-semibold text-charcoal mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features & Full Specs */}
      <section className="py-12 sm:py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6">Features</h2>
              <ul className="space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-forest flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-charcoal/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs table */}
            <div>
              <h2 className="text-2xl font-bold text-charcoal mb-6">Specifications</h2>
              <SpecsTable specs={product.specs} />
            </div>
          </div>
        </Container>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <h2 className="text-2xl font-bold text-charcoal mb-8">
              Related Models
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
