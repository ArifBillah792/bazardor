"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const password = data.get("password");

    if (!name || !email || !password) return toast.error("সব ঘর পূরণ করুন");
    if (password.length < 8)
      return toast.error("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");

    setLoading(true);
    const { error } = await authClient.signUp.email({ name, email, password });
    setLoading(false);

    if (error)
      return toast.error(error.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে");

    toast.success("রেজিস্ট্রেশন সফল! এবার সাইন ইন করুন");
    router.push("/signin");
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-base-100 border border-base-300 rounded-box p-6 sm:p-8 space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold">নতুন অ্যাকাউন্ট খুলুন</h1>
          <p className="text-sm text-base-content/60">বাজার দর-এ যোগ দিন</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="আপনার নাম"
            className="input w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="ইমেইল"
            className="input w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="পাসওয়ার্ড (কমপক্ষে ৮ অক্ষর)"
            className="input w-full"
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full"
          >
            {loading ? (
              <span className="loading loading-spinner loading-sm" />
            ) : (
              "রেজিস্টার করুন"
            )}
          </button>
        </form>

        {/* Social buttons */}

        <p className="text-center text-sm">
          আগে থেকেই অ্যাকাউন্ট আছে?
          <Link href="/signin/" className="link link-primary">
            {" "}
            সাইন ইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
