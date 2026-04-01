import { ProductSpecs } from "@/data/types";

const specLabels: Record<string, string> = {
  width: "Width",
  length: "Length",
  height: "Height",
  snowLoad: "Snow Load Rating",
  windRating: "Wind Resistance",
  warranty: "Warranty",
  panelType: "Panel Type",
  frameMaterial: "Frame Material",
  doorType: "Door Type",
  ventilation: "Ventilation",
  weight: "Weight / Capacity",
};

export default function SpecsTable({ specs }: { specs: ProductSpecs }) {
  const entries = Object.entries(specs).filter(
    ([, value]) => value && value !== "N/A"
  );

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <tbody>
          {entries.map(([key, value], i) => (
            <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-offwhite"}>
              <td className="px-4 py-3 font-medium text-charcoal/70 w-1/3">
                {specLabels[key] || key}
              </td>
              <td className="px-4 py-3 text-charcoal font-medium">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
