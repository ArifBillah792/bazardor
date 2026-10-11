"use client";

import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

const SocialButtons = () => {
  const handleSocial = async (provider) => {
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: "/",
    });
    if (error) toast.error(error.message || "সোশ্যাল লগইন ব্যর্থ হয়েছে");
  };

  return (
    <div className="space-y-2">
      <div className="divider text-xs text-base-content/50">অথবা</div>
      <button
        type="button"
        onClick={() => handleSocial("google")}
        className="btn btn-outline w-full"
      >
        <FcGoogle className="text-xl" /> Google দিয়ে চালিয়ে যান
      </button>
      <button
        type="button"
        onClick={() => handleSocial("github")}
        className="btn btn-outline w-full"
      >
        <FaGithub className="text-xl" /> GitHub দিয়ে চালিয়ে যান
      </button>
    </div>
  );
};

export default SocialButtons;
