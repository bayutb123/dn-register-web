import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Dragon Nest Portal",
  description: "Dragon Nest account registration portal",
};

const navItems = ["Home", "News", "Classes", "Dungeons", "Events", "Download", "Community", "Support"];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#06141c] text-[#e8dcc3]">
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 border-b border-[#1f4e57] bg-[#031015]/95 backdrop-blur">
            <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-4 py-3">
              <div className="text-3xl font-semibold tracking-wide text-[#cfa45a]">Dragon Nest</div>
              <nav className="hidden items-center gap-6 text-sm font-semibold text-[#cfd8dc] md:flex">
                {navItems.map((item) => (
                  <a key={item} href="#" className="transition hover:text-[#6de2e4]">
                    {item}
                  </a>
                ))}
              </nav>
              <div className="flex items-center gap-3">
                <Link href="/register" className="rounded-md border border-[#2f6c77] px-3 py-1.5 text-sm text-[#d7e6e8] hover:bg-[#10323a]">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-md border border-[#cfa45a] bg-[#7f5a2b] px-4 py-1.5 text-sm font-semibold text-[#fbe8be] hover:bg-[#926636]"
                >
                  Play Now
                </Link>
              </div>
            </div>
          </header>

          <div className="flex-1 bg-[#06141c]">{children}</div>

          <footer className="border-t border-[#1f4e57] bg-[#041018]">
            <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-[#8ea2a8] md:flex-row">
              <p>© 2026 Dragon Nest Portal. All rights reserved.</p>
              <Link href="/register" className="text-[#57ddd8] hover:text-[#8df7f2]">
                Create your account
              </Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
