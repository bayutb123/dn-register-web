import Link from "next/link";
import RegisterForm from "./RegisterForm";

export default async function RegisterPage({ searchParams }) {
  const params = await searchParams;
  const error = params?.error || "";
  const accountName = params?.accountName || "";

  return (
    <section className="relative overflow-hidden border-b border-[#1f4e57] px-4 py-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(74,114,170,0.4),transparent_35%),radial-gradient(circle_at_25%_25%,rgba(16,120,120,0.35),transparent_45%),linear-gradient(120deg,#0d2530,#203e57_40%,#16242f)]" />

      <div className="relative mx-auto w-full max-w-[1400px]">
        <section className="mx-auto w-full max-w-[760px] rounded-2xl border border-[#88653a] bg-[linear-gradient(160deg,rgba(3,31,43,0.95),rgba(1,21,31,0.95))] p-6 shadow-[0_0_0_2px_rgba(23,92,100,0.5),0_20px_60px_rgba(0,0,0,0.55)] sm:p-9">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-[#47d6d3]">Dragon Nest Portal</p>
            <h1 className="mt-3 text-4xl font-semibold text-[#f1dbb0] sm:text-5xl">Create Your Account</h1>
            <p className="mx-auto mt-3 max-w-lg text-lg text-[#d8e4e8]">Join the world of Dragon Nest and begin your legendary adventure.</p>
          </div>

          <RegisterForm error={error} accountName={accountName} />

          <p className="mt-6 text-center text-lg text-[#c9d7db]">
            Already have an account?{" "}
            <Link href="/register" className="font-semibold text-[#29d6d8] hover:text-[#6de2e4]">
              Login
            </Link>
          </p>
        </section>
      </div>
    </section>
  );
}
