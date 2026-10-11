"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserMenu = ({ user }) => {
  const router = useRouter();

  const handleSignOut = async (e) => {
    await authClient.signOut();
    toast.success("সফলভাবে সাইন আউট হয়েছে");
    router.push("/");
    router.refresh();
  };

  const initial = user.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm sm:btn-md gap-2 px-2"
      >
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <span className="w-8 h-8 rounded-full bg-primary text-primary-content grid place-items-center font-bold">
            {initial}
          </span>
        )}
        <span className="hidden sm:inline">{user.name?.split(" ")[0]}</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 border border-base-300 rounded-box z-50 mt-2 w-60 p-2 shadow-lg"
      >
        <li className="px-3 py-2 pointer-events-none">
          <span className="block font-semibold p-0">{user.name}</span>
          <span className="block text-xs text-base-content/60 p-0">
            {user.email}
          </span>
        </li>
        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>
        <li>
          <button onClick={handleSignOut} className="text-error">
            ↩ সাইন আউট
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
