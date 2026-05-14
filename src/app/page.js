import Link from "next/link";

const classes = [
  {
    name: "Warrior",
    description:
      "A front-line melee fighter focused on fast close-range combos, strong physical attacks, and direct pressure.",
  },
  {
    name: "Archer",
    description:
      "An agile ranged attacker who fights with bows, mobility, and evasive movement to stay safe while dealing damage.",
  },
  {
    name: "Sorceress",
    description:
      "A magic caster specializing in elemental and wide-area spells, with strong burst damage and crowd control.",
  },
  {
    name: "Cleric",
    description:
      "A durable holy fighter with defensive tools, light-based attacks, and strong party utility.",
  },
  {
    name: "Academic",
    description:
      "A mid-range tech/alchemy class that uses cannons, gadgets, grenades, and support-oriented utility.",
  },
  {
    name: "Kali",
    description:
      "A graceful mid-range fighter who blends dance-like movement with dark energy, spirits, and summoning themes.",
  },
];

export default function HomePortal() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#1f4e57]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(74,114,170,0.4),transparent_35%),radial-gradient(circle_at_25%_25%,rgba(16,120,120,0.35),transparent_45%),linear-gradient(120deg,#0d2530,#203e57_40%,#16242f)]" />
        <div className="relative mx-auto w-full max-w-[1300px] px-4 py-16 lg:py-24">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#47d6d3]">An Epic Fantasy MMORPG</p>
            <h1 className="max-w-[520px] text-5xl font-semibold leading-[1.05] text-[#f1dbb0] sm:text-6xl">Begin Your Adventure</h1>
            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-[#d7e1e5] sm:text-lg">
              Explore vast worlds, conquer dangerous nests, and forge your legacy with allies in thrilling PvE and PvP battles.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-md border border-[#37aab0] bg-[#0e5058] px-5 py-3 text-sm font-semibold text-[#c8fbfd] hover:bg-[#136570]"
              >
                Download Game
              </Link>
              <Link
                href="/register"
                className="rounded-md border border-[#cfa45a] bg-[#7f5a2b] px-5 py-3 text-sm font-semibold text-[#fbe8be] hover:bg-[#926636]"
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1f4e57] bg-[#071a24]">
        <div className="mx-auto w-full max-w-[1300px] px-4 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#47d6d3]">Choose Your Path</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#f1dbb0] sm:text-4xl">Classes</h2>
            </div>
            <p className="hidden text-sm text-[#9cb2b8] md:block">Swipe on mobile or scroll horizontally</p>
          </div>

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-color:#2a5a65_#06141c]">
            {classes.map((item) => (
              <article
                key={item.name}
                className="min-w-[85%] snap-start rounded-xl border border-[#2b5a64] bg-[#0b2430] p-5 sm:min-w-[60%] lg:min-w-[32%]"
              >
                <h3 className="text-2xl font-semibold text-[#7be6e1]">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#ced8dc]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
