"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import SocialButtons from "@/components/SocialButtons";

export default function SignInPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Protected page theke ashle toast
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("redirect")) {
      toast.error("এই পেজটি দেখতে আগে সাইন ইন করুন", { id: "need-login" });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email").trim();
    const password = data.get("password");

    if (!email || !password) return toast.error("ইমেইল ও পাসওয়ার্ড দিন");

    setLoading(true);
    const { error } = await authClient.signIn.email({ email, password });
    setLoading(false);

    if (error) return toast.error("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে");

    toast.success("সফলভাবে সাইন ইন হয়েছে");
    const redirect =
      new URLSearchParams(window.location.search).get("redirect") || "/";
    router.push(redirect);
    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-base-100 border border-base-300 rounded-box p-6 sm:p-8 space-y-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold">সাইন ইন করুন</h1>
          <p className="text-sm text-base-content/60">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="email"
            type="email"
            placeholder="ইমেইল"
            className="input w-full"
          />
          <input
            name="password"
            type="password"
            placeholder="পাসওয়ার্ড"
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
              "লগইন করুন"
            )}
          </button>
        </form>

        <SocialButtons/>

        <p className="text-center text-sm">
          অ্যাকাউন্ট নেই?{" "}
          <Link href="/signup" className="link link-primary">
            রেজিস্টার করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
