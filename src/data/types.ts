export interface ProductSpecs {
  width: string;
  length: string;
  height: string;
  snowLoad: string;
  windRating: string;
  warranty: string;
  panelType: string;
  frameMaterial: string;
  doorType?: string;
  ventilation?: string;
  weight?: string;
  growingSurface?: string;
}

export interface Product {
  slug: string;
  name: string;
  series: "sungrow" | "sigma" | "commercial" | "patio" | "accessory";
  type: "greenhouse" | "accessory";
  category?: "residential" | "commercial" | "patio";
  price: number | null; // CAD dollars, null = "Contact for pricing"
  description: string;
  longDescription: string;
  specs: ProductSpecs;
  features: string[];
  images: string[];
  thumbnail: string;
  plantaUrl: string;
  featured: boolean;
  compatibleWith?: string[];
}

export type Series = "all" | "sungrow" | "sigma" | "commercial" | "patio";
