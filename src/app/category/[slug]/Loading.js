import SkeletonGrid from "@/components/SkeletonGrid";

export default function Loading() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="skeleton w-12 h-12 rounded-xl" />
        <div className="space-y-2">
          <div className="skeleton h-6 w-32" />
          <div className="skeleton h-3 w-20" />
        </div>
      </div>
      <SkeletonGrid count={6} />
    </section>
  );
}
