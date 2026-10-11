import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { getProductBySlug } from "@/lib/api";
import { changeInfo, priceStats, toBn, unitBn, unitLine } from "@/lib/bn";


export default async function ProductPage({ params }) {
  const { slug } = await params;

  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect(`/signin?redirect=/product/${slug}`);

  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const { min, max, avg } = priceStats(product.markets);
  const change = changeInfo(product.change);

  const stats = [
    { label: "সর্বনিম্ন দাম", value: min, cls: "text-success" },
    { label: "সর্বোচ্চ দাম", value: max, cls: "text-error" },
    { label: "গড় দাম", value: avg, cls: "text-primary" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Top: summary */}
      <div className="bg-base-100 border border-base-300 rounded-box p-5 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="w-20 h-20 rounded-2xl bg-base-200 grid place-items-center text-5xl">
            {product.image}
          </span>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold">{product.nameBn}</h1>
            <p className="text-base-content/70">
              দেশের {toBn(product.markets.length)}টি বাজারে আজ {product.nameBn}
              -এর দাম {toBn(min)} থেকে {toBn(max)} টাকা/{unitBn(product.unit)} —
              গড় দাম {toBn(avg)} টাকা।
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href={`/category/${product.category}`}
                className="badge bg-primary/10 text-primary border-0"
              >
                {product.categoryIcon} {product.categoryNameBn}
              </Link>
              <span className="badge badge-ghost">
                {unitLine(product.unit)}
              </span>
              <span className={`badge border-0 ${change.cls}`}>
                {change.text}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Price summary */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-base-100 border border-base-300 rounded-box p-5"
          >
            <p className="text-sm text-base-content/60">{s.label}</p>
            <p className={`text-3xl font-bold ${s.cls}`}>
              {toBn(s.value)}{" "}
              <span className="text-base font-normal">টাকা</span>
            </p>
            <p className="text-xs text-base-content/60">
              {unitLine(product.unit)}
            </p>
          </div>
        ))}
      </div>

      {/* Markets */}

      <div className="bg-base-100 border border-base-300 rounded-box p-5">
        <h2 className="text-xl font-bold mb-4">বাজারভিত্তিক আজকের দাম</h2>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>বাজার</th>
                <th>বিভাগ</th>
                <th className="text-right">সর্বনিম্ন</th>
                <th className="text-right">সর্বোচ্চ</th>
              </tr>
            </thead>
            <tbody>
              {product.markets.map((m) => (
                <tr key={m.market} className="hover">
                  <td className="font-medium">{m.market}</td>
                  <td>{m.division}</td>
                  <td className="text-right">{toBn(m.min)} টাকা</td>
                  <td className="text-right">{toBn(m.max)} টাকা</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
