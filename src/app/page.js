import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";

const Section = ({ id, title, subtitle, products }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 py-6 scroll-mt-40">
    <h2 className="text-xl font-bold">{title}</h2>
    {subtitle && <p className="text-sm text-base-content/60">{subtitle}</p>}
    <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  </section>
);

export default async function Home() {
  const products = await getProducts();

  const risers = products
    .filter((p) => p.change?.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  const fallers = products
    .filter((p) => p.change?.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <>
      <Hero products={products} />

      <Section
        title={
          <>
            <span className="text-error">▲</span> আজ দাম বেড়েছে
          </>
        }
        products={risers}
      />
      <Section
        title={
          <>
            <span className="text-success">▼</span> আজ দাম কমেছে
          </>
        }
        products={fallers}
      />

      <Section
        id="সব-পণ্য"
        title="সব পণ্য"
        subtitle="আজকের বাজারে সব নিত্যপ্রয়োজনীয় পণ্যের দাম"
        products={products}
      />

      <div className="pb-10" />
    </>
  );
}
