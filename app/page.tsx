'use client';
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, Menu, X } from "lucide-react";

// Linear-inspired, dark, clean landing page for Nexa
// - TailwindCSS
// - Framer Motion for subtle animations
// - shadcn/ui-like primitives via simple Tailwind comps
// - Inter font assumed globally; if not, add it in your app layout

const words = ["Supercharge", "your", "e‑learning", "content", "creation."]; // animated headline

function classNames(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export default function NexaLanding() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] text-white selection:bg-white/10 selection:text-white">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        {/* subtle grid */}
        <div
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)",
            backgroundSize: "32px 32px, 32px 32px",
          }}
        />
        {/* gradient glow */}
        <div className="absolute -top-32 left-1/2 h-[480px] w-[880px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0b0b0f]/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <img
             src="/nexa-logo.png"
             alt="Nexa logo"
             className="h-8 w-auto"
            />
            <span className="text-xl font-semibold tracking-tight">Nexa</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 md:flex">
            <NavLink>Translate</NavLink>
            <NavLink>Scenario</NavLink>
            <NavLink>Tutor</NavLink>
            <Dropdown label="Creator Hub">
              <DropdownItem>Articles & Guides</DropdownItem>
              <DropdownItem>Templates</DropdownItem>
              <DropdownItem>API & Examples</DropdownItem>
              <DropdownItem>Changelog</DropdownItem>
            </Dropdown>
            <NavLink>Contact</NavLink>
            <a
              href="#get-started"
              className="ml-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile sheet */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0b0b0f]/90 px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              <MobileLink>Translate</MobileLink>
              <MobileLink>Scenario</MobileLink>
              <MobileLink>Tutor</MobileLink>
              <details className="group">
                <summary className="cursor-pointer list-none rounded-lg px-2 py-2 text-sm/6 opacity-90 hover:opacity-100">
                  <span className="inline-flex items-center gap-2">Creator Hub <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></span>
                </summary>
                <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3">
                  <MobileSublink>Articles & Guides</MobileSublink>
                  <MobileSublink>Templates</MobileSublink>
                  <MobileSublink>API & Examples</MobileSublink>
                  <MobileSublink>Changelog</MobileSublink>
                </div>
              </details>
              <MobileLink>Contact</MobileLink>
              <a
                href="#get-started"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10"
              >
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Built for Articulate Storyline creators</Badge>

          <h1 className="mt-6 text-balance font-semibold tracking-tight text-white">
            <span className="sr-only">Supercharge your e‑learning content creation</span>
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  className={classNames(
                    "inline-block will-change-transform",
                    i === 0 ? "mr-2 font-extrabold" : "mr-2"
                  )}
                  variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                >
                  {w}
                </motion.span>
              ))}
            </motion.div>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base/7 text-white/70">
            Nexa gives you modern AI tools — <span className="text-white/90">Translate</span>,
            <span className="text-white/90"> Scenario</span>, <span className="text-white/90">Tutor</span>, and <span className="text-white/90">Creator Hub</span> — to
            craft engaging Storyline experiences, faster. Less fiddly workflows. More creative control.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              id="get-started"
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-white/90"
            >
              Try for free <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10"
            >
              Book a demo
            </a>
          </div>
        </div>

        {/* Product cards */}
        <section className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard title="Translate" blurb="Upload XLIFF. Get polished, on‑brand translations with round‑tripping to Word for review.">
            <li>Glossary & tone control</li>
            <li>Word export / re‑import</li>
            <li>Batch projects</li>
          </ProductCard>
          <ProductCard title="Scenario" blurb="AI‑driven role‑plays with branching logic — exportable as Storyline web objects.">
            <li>Realistic characters</li>
            <li>Variables & scoring</li>
            <li>Export to LMS</li>
          </ProductCard>
          <ProductCard title="Tutor" blurb="Context‑aware assistant that answers course questions and tracks understanding.">
            <li>Embeds in slides</li>
            <li>Analytics ready</li>
            <li>Low latency</li>
          </ProductCard>
        </section>

        {/* CTA band */}
        <section className="mx-auto mt-20 max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Ship courses your learners actually want to finish.</h2>
              <p className="mt-2 text-white/70">
                Bring a Linear‑grade toolkit to e‑learning. Cleaner workflows, stronger outcomes.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90" href="#">
                Start building <ArrowRight className="h-4 w-4" />
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10" href="#">
                View docs
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Nexa. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-white/80" href="#">Privacy</a>
            <a className="hover:text-white/80" href="#">Terms</a>
            <a className="hover:text-white/80" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* -------------------- Small UI primitives -------------------- */
function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="rounded-lg px-3 py-2 text-sm/6 text-white/80 ring-white/10 transition hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}

function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm/6 text-white/80 hover:bg-white/5 hover:text-white"
      >
        {label} <ChevronDown className={classNames("h-4 w-4 transition", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[220px] overflow-hidden rounded-xl border border-white/10 bg-[#0e0e13] p-1 shadow-2xl">
          {children}
        </div>
      )}
    </div>
  );
}

function DropdownItem({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="block rounded-lg px-3 py-2 text-sm/6 text-white/80 hover:bg-white/5 hover:text-white"
    >
      {children}
    </a>
  );
}

function MobileLink({ children }: { children: React.ReactNode }) {
  return (
    <a className="rounded-lg px-2 py-2 text-sm/6 opacity-90 hover:bg-white/5 hover:opacity-100" href="#">
      {children}
    </a>
  );
}
function MobileSublink({ children }: { children: React.ReactNode }) {
  return (
    <a className="rounded-md px-2 py-1 text-sm/6 opacity-80 hover:bg-white/5 hover:opacity-100" href="#">
      {children}
    </a>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-40" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white/80" />
      </span>
      {children}
    </span>
  );
}

function ProductCard({ title, blurb, children }: { title: string; blurb: string; children: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_60%)] opacity-0 transition group-hover:opacity-100" />
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm text-white/70">{blurb}</p>
      <ul className="mt-4 grid gap-1 text-sm text-white/80 [list-style:inside_disc]">
        {children}
      </ul>
      <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
        Learn more <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
