"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import { greenhouses } from "@/data/products";
import type { Series } from "@/data/types";

const filters: { value: Series; label: string }[] = [
  { value: "all", label: "All Greenhouses" },
  { value: "sungrow", label: "Sungrow Series" },
  { value: "sigma", label: "Sigma Series" },
  { value: "commercial", label: "Commercial" },
  { value: "patio", label: "Patio / Cedar" },
];

function GreenhouseGrid() {
  const searchParams = useSearchParams();
  const initialSeries = (searchParams.get("series") as Series) || "all";
  const [activeSeries, setActiveSeries] = useState<Series>(initialSeries);

  const filtered = activeSeries === "all"
    ? greenhouses
    : greenhouses.filter((p) => p.series === activeSeries);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveSeries(f.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeSeries === f.value
                ? "bg-forest text-white"
                : "bg-white text-charcoal/60 hover:bg-forest/5 hover:text-forest border border-gray-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal/50 py-12">No greenhouses found.</p>
      )}
    </>
  );
}

export default function GreenhousesPage() {
  return (
    <>
      <section className="bg-white border-b border-gray-100">
        <Container className="py-12 sm:py-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">
            Our Greenhouses
          </h1>
          <p className="mt-3 text-charcoal/60 max-w-2xl">
            Offgrid and homestead greenhouses in glass, cedar wood, and polycarbonate. European-manufactured Planta greenhouses
            and island-made cedar structures. Built to withstand Canadian winters.
          </p>
        </Container>
      </section>

      <section className="py-10 sm:py-16">
        <Container>
          <Suspense fallback={
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm h-80 animate-pulse" />
              ))}
            </div>
          }>
            <GreenhouseGrid />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
