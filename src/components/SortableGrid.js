"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ProductCard from "./ProductCard";

const SortableGrid = ({ products }) => {
  const [sort, setSort] = useState("default");

  const sorted = [...products];
  if (sort === "asc") sorted.sort((a, b) => Number(a.today) - Number(b.today));
  if (sort === "desc") sorted.sort((a, b) => Number(b.today) - Number(a.today));

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <label htmlFor="sort" className="text-sm text-base-content/70">
          সাজান:
        </label>
        <div className="relative">
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-sm sm:select-md pr-9"
          >
            <option value="default">ডিফল্ট</option>
            <option value="asc">দাম: কম থেকে বেশি</option>
            <option value="desc">দাম: বেশি থেকে কম</option>
          </select>
          <FiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </>
  );
};

export default SortableGrid;
