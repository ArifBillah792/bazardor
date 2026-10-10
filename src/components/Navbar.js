import { getCategories } from "@/lib/api";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import { bnDate } from "@/lib/bn";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50">
      {/* Row 1: Logo + Auth (gray) */}

      <div className="bg-base-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-xl bg-primary grid place-items-center text-xl">
              🛒
            </span>
            <span className="leading-tight">
              <span className="block text-lg sm:text-xl font-bold">
                বাজার দর
              </span>
              <span className="block text-xs text-base-content/60">
                {bnDate()}
              </span>
            </span>
          </Link>

          <div className="flex gap-2">
            <Link href="/signin" className="btn btn-ghost btn-sm sm:btn-md">
              সাইন ইন
            </Link>
            <Link href="/signup" className="btn btn-primary btn-sm sm:btn-md">
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>

      {/* Row 2: Category links (white) */}

      <div className="bg-base-100 border-b border-base-300">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <NavLinks categories={categories} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
