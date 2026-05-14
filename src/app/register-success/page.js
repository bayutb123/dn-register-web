import Link from "next/link";

export default async function RegisterSuccess({ searchParams }) {
  const params = await searchParams;
  const accountName = params?.accountName || "(unknown)";

  return (
    <section className="relative overflow-hidden border-b border-[#1f4e57] px-4 py-12 sm:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(74,114,170,0.32),transparent_35%),radial-gradient(circle_at_25%_25%,rgba(16,120,120,0.28),transparent_45%),linear-gradient(120deg,#0d2530,#203e57_40%,#16242f)]" />

      <div className="relative mx-auto w-full max-w-3xl">
        <section className="w-full rounded-2xl border border-[#2b5a64] bg-[#07212d]/85 p-7 shadow-2xl backdrop-blur-sm sm:p-10">
          <span className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Success
          </span>
          <h1 className="mt-4 text-3xl font-semibold text-[#f1dbb0] sm:text-4xl">Registration Complete</h1>
          <p className="mt-3 text-[#c0cfd5]">
            Account <strong className="text-[#e8dcc3]">{accountName}</strong> has been created successfully.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-[#2f6c77] bg-[#071a23] px-4 py-2.5 text-sm font-semibold text-[#d7e6e8] transition hover:bg-[#10323a]"
            >
              Back to Home Portal
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center rounded-lg border border-[#cfa45a] bg-[#7f5a2b] px-4 py-2.5 text-sm font-semibold text-[#fbe8be] transition hover:bg-[#926636]"
            >
              Register Another Account
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
