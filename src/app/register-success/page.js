import Link from "next/link";

export default async function RegisterSuccess({ searchParams }) {
  const params = await searchParams;
  const accountName = params?.accountName || "(unknown)";

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl items-center px-4 py-10 sm:px-6">
      <section className="w-full rounded-2xl border border-emerald-200 bg-white p-7 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Success
        </span>
        <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">Registration Complete</h1>
        <p className="mt-3 text-slate-600">
          Account <strong className="text-slate-900">{accountName}</strong> has been created successfully.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back to Home Portal
          </Link>
          <Link
            href="/register"
            className="inline-flex items-center rounded-lg bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Register Another Account
          </Link>
        </div>
      </section>
    </main>
  );
}
