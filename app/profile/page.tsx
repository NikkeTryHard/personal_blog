import { Header, Footer } from '../chrome';
import { projects } from '../content';
import { SearchPanel } from '../search-panel';

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-on-surface">
      <Header />
      <main className="page-shell flex-grow">
        <section className="section-line pt-32" id="profile">
          <div className="middle-column">
            <div className="grid gap-8 md:grid-cols-[160px_1fr]">
              <div className="grid h-24 w-24 place-items-center border border-outline-variant bg-primary font-headline-primary text-[28px] font-black text-on-primary">CB</div>
              <div>
                <h1 className="font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">cachybtw</h1>
                <div className="mt-3 flex flex-wrap gap-3 font-ui-label text-ui-label text-on-surface-variant">
                  <span>Pi-based coding harness operator</span>
                  <span>CachyOS / Linux</span>
                </div>
                <p className="mt-5 max-w-[620px] font-code-body text-code-body text-on-surface-variant">Personal engineering log. High-density terminal shell, Zed-coded surface, Linear-sharp interaction language.</p>
                <div className="mt-6 flex gap-3"><a className="op-button" href="#">GitHub</a><a className="border border-outline-variant px-3 py-1.5 font-ui-label text-ui-label text-primary" href="#">Twitter</a></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-line" id="stack">
          <div className="middle-column">
            <h2 className="mb-6 font-headline-primary text-[14px] font-bold text-primary">Stack / Focus</h2>
            <div>
              {['Next.js + React surfaces', 'Bun-first TypeScript workflows', 'Linux performance tuning', 'Agentic coding systems', 'Brutalist design systems', 'High-density developer UX'].map((item) => (
                <div className="bullet-row" key={item}><p className="font-code-body text-code-body text-on-surface">{item}</p><span /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-line" id="projects">
          <div className="middle-column">
            <h2 className="mb-6 font-headline-primary text-[14px] font-bold text-primary">Projects</h2>
            <div>
              {projects.map(([name, summary, lang, stars]) => (
                <a className="bullet-row group" href="#" key={name}>
                  <div>
                    <h3 className="font-code-body text-code-body font-bold text-primary group-hover:underline">{name}</h3>
                    <p className="mt-1 font-code-body text-code-body text-on-surface-variant">{summary}</p>
                  </div>
                  <span className="status-pill px-2 py-1">{lang} · ★ {stars}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}
