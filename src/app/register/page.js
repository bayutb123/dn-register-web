import Link from "next/link";

export default async function RegisterPage({ searchParams }) {
  const params = await searchParams;
  const error = params?.error || "";
  const accountName = params?.accountName || "";

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06141c] px-4 py-10 text-[#e8dcc3] sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,120,120,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(73,112,168,0.3),transparent_35%),linear-gradient(120deg,#0b202b,#163348_45%,#0f202a)]" />
      <section className="relative mx-auto w-full max-w-3xl rounded-2xl border border-[#2b5a64] bg-[#07212d]/85 p-7 shadow-2xl backdrop-blur-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#57ddd8]">Dragon Nest</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#f1dbb0] sm:text-4xl">Create Account</h1>
        <p className="mt-2 text-[#c0cfd5]">Register your game account to start your adventure.</p>

        {error ? (
          <p className="mt-4 rounded-lg border border-rose-300/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">{error}</p>
        ) : null}

        <form action="/api/register" method="POST" className="mt-6 space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="accountName" className="text-sm font-medium text-[#d6e3e7]">Account Name</label>
            <input id="accountName" name="accountName" maxLength={12} defaultValue={accountName} required className="w-full rounded-lg border border-[#2f626d] bg-[#071a23] px-3 py-2.5 text-[#e7f0f3] outline-none transition focus:border-[#57ddd8] focus:ring-2 focus:ring-[#57ddd8]/25" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium text-[#d6e3e7]">Password</label>
            <input id="password" name="password" type="password" maxLength={12} required className="w-full rounded-lg border border-[#2f626d] bg-[#071a23] px-3 py-2.5 text-[#e7f0f3] outline-none transition focus:border-[#57ddd8] focus:ring-2 focus:ring-[#57ddd8]/25" />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-[#d6e3e7]">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" maxLength={12} required className="w-full rounded-lg border border-[#2f626d] bg-[#071a23] px-3 py-2.5 text-[#e7f0f3] outline-none transition focus:border-[#57ddd8] focus:ring-2 focus:ring-[#57ddd8]/25" />
          </div>

          <button type="submit" className="w-full rounded-lg border border-[#cfa45a] bg-[#7f5a2b] px-4 py-2.5 text-sm font-semibold text-[#fbe8be] transition hover:bg-[#926636]">
            Register Account
          </button>
        </form>

        <div className="mt-6">
          <Link href="/" className="text-sm font-semibold text-[#57ddd8] hover:text-[#8df7f2]">Back to Home Portal</Link>
        </div>
      </section>
    </main>
  );
}
