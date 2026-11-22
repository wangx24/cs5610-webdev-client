"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";

export default function Signup() {
  const [user, setUser] = useState({ username: "", password: "" });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const signup = async () => {
    if (!user.username || !user.password) return;
    const current = await client.signup(user);
    setCurrentUser(current);
    router.push("/account/profile");
  };
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        placeholder="verify password"
        type="password"
        className="wd-password-verify mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
