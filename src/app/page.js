import Hero from "@/components/Hero";
import { getProducts } from "@/lib/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Hero products={products} />

      <section
        id="সব-পণ্য"
        className="max-w-6xl mx-auto px-4 py-10 min-h-screen scroll-mt-40"
      >
        <h2 className="text-xl font-bold">সব পণ্য</h2>
      </section>
    </>
  );
}
