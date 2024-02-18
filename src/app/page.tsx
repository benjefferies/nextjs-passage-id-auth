"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();
  useEffect(() => {
    require("@passageidentity/passage-elements/passage-auth");
  }, []);
  const user = useCurrentUser();

  if (user.isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </main>
    );
  }

  if (!user.isAuthorized) {
    // redirect to login
    return redirect("/login");
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col items-center space-y-4">
        <p>Welcome {user.username}!</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            user.signOut();
            push("/login");
          }}
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
