export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* ── Header ───────────────────────────────────────────────────── */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-border-default">
        <div className="flex items-center gap-3">
          {/* TwelveLabs logo-mark inline SVG */}
          <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="#1D1C1B" />
            <path d="M25 35H75V45H55V75H45V45H25V35Z" fill="#00FF00" />
            <rect x="60" y="50" width="15" height="25" rx="2" fill="#00DC82" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">
            TwelveLabs <span className="text-text-secondary font-normal">DevEx Boilerplate</span>
          </span>
        </div>
        <a
          href="https://docs.twelvelabs.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-text-secondary hover:text-accent transition-colors"
        >
          API Docs →
        </a>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-16">
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ letterSpacing: '-2px', lineHeight: 1.1 }}>
            Build with the
            <br />
            <span className="bg-gradient-to-r from-[#60E21B] via-[#FABA17] to-[#FFB0CD] bg-clip-text text-transparent">
              Strand Design System
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-xl mt-6" style={{ lineHeight: 1.6 }}>
            An AI-agent-optimized boilerplate for the TwelveLabs DevEx team.
            Ships with design tokens, Tailwind integration, and IDE rules for
            Cursor, Claude Code, and Antigravity.
          </p>
          <div className="flex gap-3 mt-8">
            <a
              href="https://github.com/twelvelabs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-charcoal text-brand-white text-sm font-medium hover:bg-gray-600 transition-colors"
            >
              Get Started
            </a>
            <a
              href="#design-system"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border-default text-sm font-medium hover:bg-surface transition-colors"
            >
              View Tokens
            </a>
          </div>
        </div>

        {/* ── Color Palette ──────────────────────────────────────────── */}
        <section id="design-system" className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6" style={{ letterSpacing: '-1px' }}>Color Palette</h2>

          <h3 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wider">Brand</h3>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {[
              { name: 'Brand Green', color: '#00FF00', className: 'bg-brand-green' },
              { name: 'Charcoal', color: '#1D1C1B', className: 'bg-brand-charcoal', light: true },
              { name: 'White', color: '#F4F3F3', className: 'bg-brand-white' },
              { name: 'Grey', color: '#D3D1CF', className: 'bg-brand-grey' },
            ].map((c) => (
              <div key={c.name} className="flex flex-col gap-2">
                <div className={`h-16 rounded-lg ${c.className} border border-border-default`} />
                <span className="text-xs font-medium">{c.name}</span>
                <span className="text-xs text-text-tertiary font-mono">{c.color}</span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wider">Masterbrand</h3>
          <div className="grid grid-cols-4 gap-3 mb-8">
            {[
              { name: 'Green', color: '#60E21B', bg: '#60E21B' },
              { name: 'Orange', color: '#FABA17', bg: '#FABA17' },
              { name: 'Peach', color: '#FFB592', bg: '#FFB592' },
              { name: 'Pink', color: '#FFB0CD', bg: '#FFB0CD' },
            ].map((c) => (
              <div key={c.name} className="flex flex-col gap-2">
                <div className="h-16 rounded-lg border border-border-default" style={{ backgroundColor: c.bg }} />
                <span className="text-xs font-medium">{c.name}</span>
                <span className="text-xs text-text-tertiary font-mono">{c.color}</span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wider">Gray Ramp</h3>
          <div className="grid grid-cols-8 gap-2 mb-8">
            {[
              { step: '50', color: '#F4F3F3' },
              { step: '100', color: '#ECECEC' },
              { step: '200', color: '#E2E2E2' },
              { step: '300', color: '#D3D1CF' },
              { step: '400', color: '#BDBCBB' },
              { step: '500', color: '#8F8984' },
              { step: '600', color: '#46423F' },
              { step: '700', color: '#1D1C1B' },
            ].map((c) => (
              <div key={c.step} className="flex flex-col items-center gap-1">
                <div className="w-full h-12 rounded-md border border-border-default" style={{ backgroundColor: c.color }} />
                <span className="text-[10px] text-text-tertiary">{c.step}</span>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-medium text-text-secondary mb-3 uppercase tracking-wider">Product Lines</h3>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { name: 'Search', colors: ['#7B5880', '#F6AFFF', '#FBDFFF'] },
              { name: 'Generate', colors: ['#7D5D0C', '#FABA17', '#FDE3A2'] },
              { name: 'Embed', colors: ['#366B7F', '#6CD5FD', '#C4EEFE'] },
            ].map((p) => (
              <div key={p.name} className="flex flex-col gap-2">
                <div className="flex h-12 rounded-lg overflow-hidden border border-border-default">
                  {p.colors.map((c, i) => (
                    <div key={i} className="flex-1" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <span className="text-xs font-medium">{p.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Button Variants ────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6" style={{ letterSpacing: '-1px' }}>Button System</h2>
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-brand-charcoal text-brand-white text-sm font-medium hover:bg-gray-600 transition-all duration-200">
              Black
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-white text-brand-charcoal text-sm font-medium border border-border-default hover:bg-gray-100 transition-all duration-200">
              White
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gray-200 text-brand-charcoal text-sm font-medium hover:bg-gray-300 transition-all duration-200">
              Gray
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-brand-charcoal text-brand-charcoal text-sm font-medium hover:bg-brand-charcoal hover:text-brand-white transition-all duration-200">
              Outline
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-transparent text-brand-charcoal text-sm font-medium hover:bg-gray-100 transition-all duration-200">
              Ghost
            </button>
            <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-gray-400 text-gray-500 text-sm font-medium cursor-not-allowed">
              Disabled
            </button>
          </div>
        </section>

        {/* ── Typography Scale ───────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6" style={{ letterSpacing: '-1px' }}>Typography Scale</h2>
          <div className="space-y-4 bg-surface rounded-xl border border-border-default p-6">
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">jumbo</span>
              <span className="text-[64px] font-bold leading-[1.1]" style={{ letterSpacing: '-3px' }}>Aa</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">h1</span>
              <span className="text-5xl font-bold leading-[1.2]" style={{ letterSpacing: '-2px' }}>Heading 1</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">h2</span>
              <span className="text-[40px] font-semibold leading-[1.2]" style={{ letterSpacing: '-2px' }}>Heading 2</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">h3</span>
              <span className="text-[32px] font-semibold leading-[1.3]" style={{ letterSpacing: '-1px' }}>Heading 3</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">h4</span>
              <span className="text-2xl font-semibold leading-[1.33]" style={{ letterSpacing: '-1px' }}>Heading 4</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">body</span>
              <span className="text-sm leading-[1.43]">The quick brown fox jumps over the lazy dog.</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-xs text-text-tertiary font-mono w-16 shrink-0">mono</span>
              <span className="text-sm leading-[1.43] font-mono">const api = new TwelveLabs(key);</span>
            </div>
          </div>
        </section>

        {/* ── AI IDE Configs ─────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight mb-6" style={{ letterSpacing: '-1px' }}>AI IDE Configurations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Cursor', file: '.cursorrules', desc: 'Auto-ingests Strand rules on every session' },
              { name: 'Claude Code', file: 'CLAUDE.md', desc: 'Project vision + pointer to SSOT' },
              { name: 'Antigravity', file: '.antigravity/skills/', desc: 'Agent Skill enforcing Strand UI rules' },
            ].map((ide) => (
              <div key={ide.name} className="p-5 rounded-xl bg-surface border border-border-default">
                <h3 className="text-sm font-semibold mb-1">{ide.name}</h3>
                <p className="text-xs text-text-tertiary font-mono mb-2">{ide.file}</p>
                <p className="text-sm text-text-secondary">{ide.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────── */}
      <footer className="border-t border-border-default px-8 py-6 text-center text-sm text-text-tertiary">
        TwelveLabs DevEx · Strand Design System v1.1.0
      </footer>
    </div>
  );
}
