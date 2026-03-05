import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1D1C1B]">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-8 py-5 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2.5">
          <Image
            src="/strand/assets/logo-full.svg"
            alt="TwelveLabs"
            width={160}
            height={28}
            draggable={false}
            priority
          />
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://docs.twelvelabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#6B6966] hover:text-[#1D1C1B] transition-colors"
          >
            API Docs
          </a>
          <a
            href="https://playground.twelvelabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1D1C1B] text-white text-sm font-medium hover:bg-[#46423F] transition-colors"
          >
            Playground
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
              <path d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </nav>
      </header>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="max-w-[1200px] mx-auto px-8 pt-20 pb-20">
          <h1 className="text-[56px] font-bold leading-[1.08] tracking-[-3px] mb-6 max-w-2xl group">
            <span className="relative">
              DevEx Agent Boilerplate
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out rounded-full" />
            </span>
          </h1>
          <p className="text-lg text-[#6B6966] leading-[1.7] max-w-xl mb-10">
            Start building TwelveLabs sample apps with the Strand design system.
            Pre-configured for Cursor, Claude Code, and Antigravity.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.twelvelabs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1D1C1B] text-white text-sm font-medium hover:bg-[#46423F] transition-colors"
            >
              Get Started
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                <path d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://docs.twelvelabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D3D1CF] text-sm font-medium text-[#1D1C1B] hover:border-[#1D1C1B] transition-colors"
            >
              API Reference
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
                <path d="M3.5 2.5H9.5V8.5M9.5 2.5L2.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>

        {/* ── Quick Start ────────────────────────────────────────────── */}
        <section className="border-t border-[#E8E7E5]">
          <div className="max-w-[1200px] mx-auto px-8 py-20">
            <h2 className="text-[32px] font-bold tracking-[-1.5px] mb-4">
              Quick Start
            </h2>
            <p className="text-[#6B6966] mb-12 max-w-lg">
              Clone, install, and start the dev server. The Strand design system
              and AI IDE rules load automatically.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-6 group">
                <div className="w-7 h-7 rounded-full bg-[#F4F3F3] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#E8E7E5] transition-colors">
                  <span className="text-xs font-semibold text-[#6B6966]">1</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">Clone and install</p>
                  <div className="bg-[#1D1C1B] rounded-xl p-5 font-mono text-sm text-[#E8E7E5] leading-relaxed overflow-x-auto hover-lift">
                    <p><span className="text-[#8F8984]">$</span> git clone {"<repo-url>"}</p>
                    <p><span className="text-[#8F8984]">$</span> cd devex-agent-boilerplate</p>
                    <p><span className="text-[#8F8984]">$</span> npm install</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-6 group">
                <div className="w-7 h-7 rounded-full bg-[#F4F3F3] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#E8E7E5] transition-colors">
                  <span className="text-xs font-semibold text-[#6B6966]">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">Start the dev server</p>
                  <div className="bg-[#1D1C1B] rounded-xl p-5 font-mono text-sm text-[#E8E7E5] leading-relaxed hover-lift">
                    <p><span className="text-[#8F8984]">$</span> npm run dev</p>
                    <p className="text-[#6B6966] mt-2">{">"} Open http://localhost:3000</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-6 group">
                <div className="w-7 h-7 rounded-full bg-[#F4F3F3] flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#E8E7E5] transition-colors">
                  <span className="text-xs font-semibold text-[#6B6966]">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-2">Open in your AI IDE and start prompting</p>
                  <p className="text-sm text-[#6B6966] leading-relaxed">
                    The design system rules are auto-loaded. Cursor reads <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1.5 py-0.5 rounded">.cursorrules</span>,
                    Claude Code reads <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1.5 py-0.5 rounded">CLAUDE.md</span>,
                    and Antigravity activates the <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1.5 py-0.5 rounded">twelvelabs_ui</span> skill.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI IDE Configuration ───────────────────────────────────── */}
        <section className="border-t border-[#E8E7E5]">
          <div className="max-w-[1200px] mx-auto px-8 py-20">
            <h2 className="text-[32px] font-bold tracking-[-1.5px] mb-4">
              AI IDE Setup
            </h2>
            <p className="text-[#6B6966] mb-12 max-w-lg">
              Each IDE reads a config file that points to the single source of truth
              at <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1.5 py-0.5 rounded">docs/STRANDS_AGENT_RULES.md</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Cursor",
                  file: ".cursorrules",
                  description: "Auto-loads on session start. Enforces Strand token usage, spacing grid, button variants, and the white-majority aesthetic.",
                },
                {
                  name: "Claude Code",
                  file: "CLAUDE.md",
                  description: "Reads project context and repo structure. Directs all design decisions to the SSOT document.",
                },
                {
                  name: "Antigravity",
                  file: ".antigravity/skills/twelvelabs_ui/",
                  description: "Agent Skill activates on UI file changes. Includes a validation checklist that runs before returning code.",
                },
              ].map((ide) => (
                <div
                  key={ide.name}
                  className="p-6 rounded-2xl bg-[#F4F3F3] hover-lift cursor-default"
                >
                  <h3 className="text-base font-semibold mb-1">{ide.name}</h3>
                  <p className="text-xs text-[#9B9895] font-mono mb-4">{ide.file}</p>
                  <p className="text-sm text-[#6B6966] leading-relaxed">
                    {ide.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Framework Setup ────────────────────────────────────────── */}
        <section className="border-t border-[#E8E7E5]">
          <div className="max-w-[1200px] mx-auto px-8 py-20">
            <h2 className="text-[32px] font-bold tracking-[-1.5px] mb-4">
              Framework Setup
            </h2>
            <p className="text-[#6B6966] mb-12 max-w-lg">
              The Strand design system works with any framework.
              Tokens are available as Tailwind presets, CSS variables, or JSON.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Next.js */}
              <div className="p-6 rounded-2xl border border-[#E8E7E5] hover:border-[#D3D1CF] transition-colors">
                <h3 className="text-base font-semibold mb-1">Next.js</h3>
                <p className="text-xs text-[#9B9895] mb-4">Default — ready to use</p>
                <p className="text-sm text-[#6B6966] leading-relaxed mb-4">
                  Tokens are pre-wired in <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1 py-0.5 rounded text-xs">globals.css</span> via
                  Tailwind v4 <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1 py-0.5 rounded text-xs">@theme inline</span>.
                  No additional setup needed.
                </p>
              </div>

              {/* React */}
              <div className="p-6 rounded-2xl border border-[#E8E7E5] hover:border-[#D3D1CF] transition-colors">
                <h3 className="text-base font-semibold mb-1">React</h3>
                <p className="text-xs text-[#9B9895] mb-4">Vite / CRA</p>
                <div className="bg-[#1D1C1B] rounded-lg p-4 font-mono text-xs text-[#E8E7E5] leading-relaxed overflow-x-auto">
                  <p className="text-[#6B6966]">// tailwind.config.js</p>
                  <p>presets: [require(</p>
                  <p className="pl-2">{`'./strand/tailwind-preset.js'`}</p>
                  <p>)]</p>
                </div>
              </div>

              {/* Vue */}
              <div className="p-6 rounded-2xl border border-[#E8E7E5] hover:border-[#D3D1CF] transition-colors">
                <h3 className="text-base font-semibold mb-1">Vue</h3>
                <p className="text-xs text-[#9B9895] mb-4">Vue 3 + Composition API</p>
                <div className="bg-[#1D1C1B] rounded-lg p-4 font-mono text-xs text-[#E8E7E5] leading-relaxed overflow-x-auto">
                  <p className="text-[#6B6966]">/* main.css */</p>
                  <p>@import {`'strand/css/variables.css'`};</p>
                  <p>@import {`'strand/css/fonts.css'`};</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Repository Structure ───────────────────────────────────── */}
        <section className="border-t border-[#E8E7E5]">
          <div className="max-w-[1200px] mx-auto px-8 py-20">
            <h2 className="text-[32px] font-bold tracking-[-1.5px] mb-12">
              Repository Structure
            </h2>

            <div className="bg-[#1D1C1B] rounded-2xl p-8 font-mono text-sm text-[#E8E7E5] leading-[1.8] overflow-x-auto">
              <p><span className="text-[#6B6966]">strand/</span></p>
              <p className="pl-4"><span className="text-[#6B6966]">tokens/</span>        <span className="text-[#8F8984]">  # colors, typography, spacing, buttons (JSON)</span></p>
              <p className="pl-4"><span className="text-[#6B6966]">css/</span>           <span className="text-[#8F8984]">   # variables.css + fonts.css</span></p>
              <p className="pl-4"><span className="text-[#6B6966]">icons/</span>          <span className="text-[#8F8984]"> # 81 SVG icons (16x16, stroke-based)</span></p>
              <p className="pl-4"><span className="text-[#6B6966]">assets/</span>         <span className="text-[#8F8984]"> # logo-full.svg, logo-mark.svg, logo-wordmark.svg</span></p>
              <p className="pl-4">tailwind-preset.js <span className="text-[#8F8984]"># Tailwind v3 preset (React/Vue)</span></p>
              <p className="mt-2"><span className="text-[#6B6966]">docs/</span></p>
              <p className="pl-4">STRANDS_AGENT_RULES.md <span className="text-[#8F8984]"># SSOT — the complete design system spec</span></p>
              <p className="mt-2"><span className="text-[#6B6966]">src/app/</span></p>
              <p className="pl-4">globals.css     <span className="text-[#8F8984]">   # Strand tokens via @theme inline</span></p>
              <p className="pl-4">layout.tsx      <span className="text-[#8F8984]">   # Root layout with Strand fonts</span></p>
              <p className="pl-4">page.tsx        <span className="text-[#8F8984]">   # This page</span></p>
              <p className="mt-2">.cursorrules        <span className="text-[#8F8984]">   # Cursor config</span></p>
              <p>CLAUDE.md            <span className="text-[#8F8984]">  # Claude Code config</span></p>
              <p><span className="text-[#6B6966]">.antigravity/skills/</span> <span className="text-[#8F8984]"># Antigravity agent skill</span></p>
            </div>
          </div>
        </section>

        {/* ── Key Rules ──────────────────────────────────────────────── */}
        <section className="border-t border-[#E8E7E5]">
          <div className="max-w-[1200px] mx-auto px-8 py-20">
            <h2 className="text-[32px] font-bold tracking-[-1.5px] mb-12">
              Design Rules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {[
                ["White-majority layout", "Default background is pure white. Use #F4F3F3 sparingly for card accents."],
                ["No hardcoded hex colors", "Always use Strand Tailwind classes or CSS variables."],
                ["Noto Sans, not Inter", "Primary body font is Noto Sans. Inter is legacy fallback only."],
                ["4px spacing grid", "All spacing values must be multiples of 4px."],
                ["No emoji in UI", "Use SVG icons from strand/icons/ instead."],
                ["No login/auth flows", "Sample apps use API keys via env vars or inline input."],
                ["Charcoal pill buttons", "Primary CTAs use rounded-full with arrow icons."],
                ["Brand gradient sparingly", "linear-gradient(90deg, #60E21B, #FABA17, #FFB0CD) for rare accents only."],
              ].map(([title, desc]) => (
                <div key={title} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D3D1CF] mt-2 shrink-0 group-hover:bg-[#1D1C1B] transition-colors" />
                  <div>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-sm text-[#9B9895]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-[#E8E7E5]">
              <p className="text-sm text-[#9B9895]">
                Full specification in{" "}
                <span className="font-mono text-[#1D1C1B] bg-[#F4F3F3] px-1.5 py-0.5 rounded">
                  docs/STRANDS_AGENT_RULES.md
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-[#E8E7E5] px-8 py-8">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <p className="text-sm text-[#9B9895]">
            Made by{" "}
            <a
              href="https://github.com/nathanchess/tl-devex-agent-boilerplate/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1D1C1B] hover:text-[#6B6966] transition-colors"
            >
              Nathan Che
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/nathanchess/tl-devex-agent-boilerplate/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#9B9895] hover:text-[#1D1C1B] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.twelvelabs.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#9B9895] hover:text-[#1D1C1B] transition-colors"
            >
              twelvelabs.io
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
