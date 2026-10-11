import { changeInfo, toBn, unitLine } from "@/lib/bn";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const change = changeInfo(product.change);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="block bg-base-100 border border-base-300 rounded-box p-4 transition hover:shadow-md hover:-translate-y-0.5"
    >
      {/* Top: emoji + name + unit */}
      <div className="flex items-center gap-3">
        <span className="w-11 h-11 rounded-xl bg-base-200 grid place-items-center text-2xl">
          {product.image}
        </span>
        <div>
          <h3 className="font-semibold leading-tight">{product.nameBn}</h3>
          <p className="text-xs text-base-content/60">
            {unitLine(product.unit)}
          </p>
        </div>
      </div>

      {/* Bottom: price + badge */}
      <p className="text-xs text-base-content/60 mt-4">আজকের দাম</p>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">{toBn(product.today)} টাকা</p>
        <span className={`badge badge-sm border-0 ${change.cls}`}>
          {change.text}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
