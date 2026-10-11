import SkeletonGrid from "@/components/SkeletonGrid";

export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="skeleton h-60 w-full rounded-box" />
      <SkeletonGrid count={6} />
    </div>
  );
}