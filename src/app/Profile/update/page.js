"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = new FormData(e.currentTarget).get("name").trim();
    if (!name) return toast.error("নাম লিখুন");

    setLoading(true);
    const { error } = await authClient.updateUser({ name });
    setLoading(false);

    if (error) return toast.error("আপডেট ব্যর্থ হয়েছে");

    toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-base-100 border border-base-300 rounded-box p-6 sm:p-8 space-y-5">
        <h1 className="text-2xl font-bold text-center">তথ্য আপডেট করুন</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            key={session?.user?.name}
            name="name"
            type="text"
            defaultValue={session?.user?.name}
            placeholder="নতুন নাম"
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
              "Update Information"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
