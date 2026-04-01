import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/types";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const href = product.type === "greenhouse"
    ? `/greenhouses/${product.slug}`
    : `/accessories#${product.slug}`;

  return (
    <Link href={href} className="group">
      <div className="bg-white rounded-2xl overflow-hidden border border-sage/15 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-sage/30">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-cream overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Series badge */}
          <span className="absolute top-3 left-3 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-forest capitalize">
            {product.series}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-forest-dark group-hover:text-forest transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-earth/70 line-clamp-2">
            {product.description}
          </p>
          {product.type === "greenhouse" && (
            <p className="mt-1 text-xs text-earth-light">
              {product.specs.width} &times; {product.specs.length} &times; {product.specs.height}
            </p>
          )}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-bold text-forest">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm font-medium text-forest group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Details
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
