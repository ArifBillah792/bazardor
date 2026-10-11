import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function ProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/signin?redirect=/profile");

  const { user } = session;
  const initial = user.name?.charAt(0).toUpperCase() || "U";

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-base-100 border border-base-300 rounded-box p-6 sm:p-8 text-center space-y-4">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            referrerPolicy="no-referrer"
            className="w-24 h-24 rounded-full object-cover mx-auto"
          />
        ) : (
          <span className="w-24 h-24 rounded-full bg-primary text-primary-content grid place-items-center text-4xl font-bold mx-auto">
            {initial}
          </span>
        )}
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-base-content/60">{user.email}</p>
        </div>
        <Link href="/profile/update" className="btn btn-primary w-full">
          তথ্য আপডেট করুন
        </Link>
      </div>
    </div>
  );
}
