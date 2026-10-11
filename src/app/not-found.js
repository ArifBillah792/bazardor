import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-4">
      <p className="text-7xl font-bold text-primary">৪০৪</p>
      <h1 className="text-2xl font-bold">পেইজটি খুঁজে পাওয়া যায়নি</h1>
      <p>আপনি যে পেইজটি খুঁজছেন সেটি নেই, অথবা ঠিকানাটি ভুল হতে পারে।</p>
      <Link>হোম পেজে ফিরে যান</Link>
    </div>
  );
}
