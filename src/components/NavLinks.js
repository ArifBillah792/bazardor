"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ categories }) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 overflow-x-auto">
      {categories.map((c) => {
        const href = `/category/${c.slug}`;
        const active = pathname === href;
        return (
          <Link
            key={c.slug}
            href={href}
            className={`btn btn-ghost btn-sm font-normal whitespace-nowrap ${
              active ? "bg-primary/10 text-primary font-semibold" : ""
            }`}
          >
            {c.icon} {c.nameBn}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavLinks;
