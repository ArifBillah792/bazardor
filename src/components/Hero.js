import { bnDate, toBn } from "@/lib/bn";
import Image from "next/image";
import React from "react";

const Hero = ({ products }) => {
  const marketCount = products[0]?.markets.length || 0;
  const divisions = new Set(
    products.flatMap((p) => p.markets.map((m) => m.division)),
  );

  const stats = [
    {
      label: "পণ্য",
      value: products.length,
      note: "টি নিত্যদিনের পণ্য",
      accent: true,
    },
    { label: "বাজার", value: marketCount, note: "টি বাজার অন্তর্ভুক্ত" },
    { label: "বিভাগ", value: divisions.size, note: "টি বিভাগের তথ্য" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 pt-6">
      <div className="bg-base-100 border border-base-300 rounded-box p-5 sm:p-8 grid gap-6 lg:grid-cols-2 lg:items-center">
        {/* Left: text */}

        <div className="space-y-4">
          <span className="badge bg-primary/10 text-primary border-0">
            {bnDate()}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
            আজকের বাজারের দাম এক নজরে
          </h1>
          <p className="text-base-content/70">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <a
            href="#সব-পণ্য"
            className="btn btn-outline btn-primary btn-sm sm:btn-md"
          >
            সব পণ্য দেখুন ↓
          </a>
        </div>

        {/* Right: stats + image */}
        <div className="space-y-4">
          <div className="grid grid-cols-3 border border-base-300 rounded-box bg-base-200/50 divide-x divide-dashed divide-base-300">
            {stats.map((s) => (
              <div key={s.label} className="p-3 sm:p-4">
                <p className="text-xs text-base-content/60">{s.label}</p>
                <p
                  className={`text-2xl sm:text-3xl font-bold ${s.accent ? "text-primary" : ""}`}
                >
                  {toBn(s.value)}
                </p>
                <p className="text-xs text-base-content/60">{s.note}</p>
              </div>
            ))}
          </div>
          <div className="relative h-40 sm:h-52 rounded-box overflow-hidden">
            <Image
              src="/bazar-hero.png"
              alt="তাজা সবজির বাজার"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
