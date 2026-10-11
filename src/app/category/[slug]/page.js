import ProductCard from "@/components/ProductCard";
import SortableGrid from "@/components/SortableGrid";
import { getProductsByCategory } from "@/lib/api";
import { toBn } from "@/lib/bn";
import Link from "next/link";

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const products = await getProductsByCategory(slug);

  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-4">
        <p className="text-6xl">🧺</p>
        <h1 className="text-2xl font-bold">
          এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি
        </h1>
        <p className="text-base-content/60">
          ঠিকানাটি ভুল হতে পারে, অথবা ক্যাটাগরিটি এখন খালি।
        </p>
        <Link href="/" className="btn btn-primary btn-sm sm:btn-md">
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  const { categoryIcon, categoryNameBn } = products[0];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-12 rounded-xl bg-base-200 grid place-items-center text-2xl">
          {categoryIcon}
        </span>
        <div>
          <h1 className="text-2xl font-bold">{categoryNameBn}</h1>
          <p className="text-sm text-base-content/60">
            {toBn(products.length)} টি পণ্য
          </p>
        </div>
      </div>
      <SortableGrid products={products} />
    </section>
  );
}
