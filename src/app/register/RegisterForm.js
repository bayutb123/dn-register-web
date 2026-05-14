"use client";

import { useState } from "react";

export default function RegisterForm({ error, accountName }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <>
      {error ? (
        <p className="mt-6 rounded-lg border border-rose-300/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p>
      ) : null}

      <form action="/api/register" method="POST" className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="accountName" className="text-2xl text-[#ecf4f6]">
            Username
          </label>
          <input
            id="accountName"
            name="accountName"
            maxLength={12}
            defaultValue={accountName}
            required
            placeholder="Choose your username"
            className="w-full rounded-md border border-[#8d6e43] bg-[#032534] px-4 py-3 text-lg text-[#e7f0f3] outline-none transition focus:border-[#57ddd8] focus:ring-2 focus:ring-[#57ddd8]/30"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-2xl text-[#ecf4f6]">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            maxLength={12}
            required
            placeholder="Create a strong password"
            className="w-full rounded-md border border-[#8d6e43] bg-[#032534] px-4 py-3 text-lg text-[#e7f0f3] outline-none transition focus:border-[#57ddd8] focus:ring-2 focus:ring-[#57ddd8]/30"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-2xl text-[#ecf4f6]">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            maxLength={12}
            required
            placeholder="Re-enter your password"
            className="w-full rounded-md border border-[#8d6e43] bg-[#032534] px-4 py-3 text-lg text-[#e7f0f3] outline-none transition focus:border-[#57ddd8] focus:ring-2 focus:ring-[#57ddd8]/30"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-[#d5e4e7]">
          <input type="checkbox" required className="mt-0.5 h-5 w-5 rounded border-[#8d6e43] bg-[#032534] accent-[#2ecfd0]" />
          <span>
            I have read and agree to the <a href="#" className="text-[#29d6d8] hover:text-[#6de2e4]">Terms of Service</a> and{" "}
            <a href="#" className="text-[#29d6d8] hover:text-[#6de2e4]">Privacy Policy</a>.
          </span>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg border border-[#d6b071] bg-[linear-gradient(180deg,#176d71,#0e5156)] px-5 py-3 text-3xl font-semibold tracking-wide text-[#fbe8be] shadow-[inset_0_1px_0_rgba(255,244,211,0.45)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-80"
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>
    </>
  );
}
