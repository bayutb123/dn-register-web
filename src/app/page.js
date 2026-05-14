import Link from "next/link";

const updates = [
  { title: "v107.1 Update Highlights", text: "Balance tuning, QoL improvements, and new event rewards." },
  { title: "Spring Festival", text: "Limited-time missions, bonus drops, and community quests." },
  { title: "Sunset Training Ground", text: "New raid mechanics with high-end equipment progression." },
  { title: "May Patch Notes", text: "System updates, fixes, and dungeon accessibility changes." },
];

const media = [
  { title: "Cinematic Trailer", text: "The Dragon's Return" },
  { title: "Screenshots", text: "World of Dragon Nest" },
  { title: "Community Spotlight", text: "Nest Explorer Stories" },
];

export default function HomePortal() {
  return (
    <main className="min-h-screen bg-[#06141c] text-[#e8dcc3]">
      <header className="sticky top-0 z-20 border-b border-[#1f4e57] bg-[#031015]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1300px] items-center justify-between px-4 py-3">
          <div className="text-3xl font-semibold tracking-wide text-[#cfa45a]">Dragon Nest</div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#cfd8dc] md:flex">
            {['Home', 'News', 'Classes', 'Dungeons', 'Events', 'Download', 'Community', 'Support'].map((item) => (
              <a key={item} href="#" className="transition hover:text-[#6de2e4]">{item}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/register" className="rounded-md border border-[#2f6c77] px-3 py-1.5 text-sm text-[#d7e6e8] hover:bg-[#10323a]">
              Login
            </Link>
            <Link href="/register" className="rounded-md border border-[#cfa45a] bg-[#7f5a2b] px-4 py-1.5 text-sm font-semibold text-[#fbe8be] hover:bg-[#926636]">
              Play Now
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#1f4e57]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(74,114,170,0.4),transparent_35%),radial-gradient(circle_at_25%_25%,rgba(16,120,120,0.35),transparent_45%),linear-gradient(120deg,#0d2530,#203e57_40%,#16242f)]" />
        <div className="relative mx-auto grid w-full max-w-[1300px] gap-8 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#47d6d3]">An Epic Fantasy MMORPG</p>
            <h1 className="max-w-[520px] text-5xl font-semibold leading-[1.05] text-[#f1dbb0] sm:text-6xl">
              Begin Your Adventure
            </h1>
            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-[#d7e1e5] sm:text-lg">
              Explore vast worlds, conquer dangerous nests, and forge your legacy with allies in thrilling PvE and PvP battles.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/register" className="rounded-md border border-[#37aab0] bg-[#0e5058] px-5 py-3 text-sm font-semibold text-[#c8fbfd] hover:bg-[#136570]">
                Download Game
              </Link>
              <Link href="/register" className="rounded-md border border-[#cfa45a] bg-[#7f5a2b] px-5 py-3 text-sm font-semibold text-[#fbe8be] hover:bg-[#926636]">
                Create Account
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-[#2b5a64] bg-[#07212d]/70 p-5">
            <h2 className="text-xl font-semibold text-[#f1dbb0]">News Update</h2>
            <div className="mt-4 space-y-3">
              {updates.map((u) => (
                <article key={u.title} className="rounded-lg border border-[#244d58] bg-[#061820]/80 p-3">
                  <h3 className="text-sm font-semibold text-[#7be6e1]">{u.title}</h3>
                  <p className="mt-1 text-sm text-[#b8c7cc]">{u.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1300px] gap-4 px-4 pb-12 lg:grid-cols-3">
        {media.map((item) => (
          <article key={item.title} className="rounded-lg border border-[#2a545f] bg-[#081d26] p-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#57ddd8]">{item.title}</h3>
            <p className="mt-2 text-2xl font-semibold text-[#f1dbb0]">{item.text}</p>
          </article>
        ))}
      </section>

      <footer className="border-t border-[#1f4e57] bg-[#041018]">
        <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-[#8ea2a8] md:flex-row">
          <p>© 2026 Dragon Nest Portal. All rights reserved.</p>
          <Link href="/register" className="text-[#57ddd8] hover:text-[#8df7f2]">Create your account</Link>
        </div>
      </footer>
    </main>
  );
}
