const URLS = [
  process.env.NEXT_PUBLIC_API_URL ||
    "https://api.api-store.workers.dev/api/bazardor",
  process.env.NEXT_PUBLIC_API_URL_2 ||
    "https://api.abcz.workers.dev/api/bazardor",
];

async function fetchApi(path) {
  for (const base of URLS) {
    try {
      const res = await fetch(`${base}${path}`, {
        next: { revalidate: 3600 },
      });
      if (res.ok) return await res.json();
    } catch (error) {
      console.log(`Failed: ${base} ${path}`);
    }
  }
  return null;
}

export async function getProducts() {
  const data = await fetchApi("/products");
  return Array.isArray(data) ? data : [];
}

export async function getProductBySlug(slug) {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) || null;
}

export async function getProductsByCategory(category) {
  const products = await getProducts();
  return products.filter((p) => p.category === category);
}

export async function getCategories() {
  const products = await getProducts();
  const map = new Map();

  products.forEach((p) => {
    if (!map.has(p.category)) {
      map.set(p.category, {
        slug: p.category,
        nameBn: p.categoryNameBn,
        icon: p.categoryIcon,
      });
    }
  });

  return [...map.values()];
}
