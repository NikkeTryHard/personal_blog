import type { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '../chrome';
import { SearchPanel } from '../search-panel';

export const metadata: Metadata = {
  title: 'profile · SHOKANEKO',
};

const projects = [
  {
    name: 'ZeroGravity',
    meta: 'Rust · AI proxy · 30 releases',
    href: '/projects/zerogravity',
    points: [
      { lead: 'Open-source Rust proxy', rest: 'for AI coding tools with OpenAI-, Anthropic-, and Gemini-compatible APIs.' },
      { lead: 'Bidirectional tool translation', rest: 'and Docker-first cross-platform runtime for Linux, macOS, and Windows.' },
      { lead: '670 stars / 45 forks / 9k+ downloads', rest: 'across 30 public releases.' },
    ],
  },
  {
    name: 'AIstudio ProxyAPI',
    meta: 'FastAPI · Playwright · Web UI',
    href: '/projects/aistudio-proxyapi',
    points: [
      { lead: 'OpenAI-compatible Google AI Studio proxy', rest: 'built with FastAPI, Playwright, and a Web UI.' },
      { lead: 'Request queueing, translation, streaming', rest: 'plus tests, frontend modernization, and UI automation.' },
      { lead: '#2 contributor', rest: 'on a 2,245-star repository.' },
    ],
  },
  {
    name: 'tach-core',
    meta: 'Rust/Python · Linux snapshots · sandboxing',
    href: '/projects/tach-core',
    points: [
      { lead: 'Pytest test hypervisor', rest: 'using Linux snapshots to cut reset latency from ~200ms to under 50µs.' },
      { lead: 'Landlock + Seccomp sandboxing', rest: 'for untrusted test execution.' },
      { lead: 'Django 9,892-test suite', rest: 'reduced from ~144s to ~30s.' },
    ],
  },
  {
    name: 'Hydra',
    meta: 'Rust · riichi mahjong AI · training infra',
    href: '/projects/hydra',
    points: [
      { lead: 'Open-source riichi mahjong AI', rest: 'aimed at rivaling LuckyJ with open weights.' },
      { lead: '2.36x lower latency / 8.0x higher throughput', rest: 'versus upstream engine benchmarks.' },
      { lead: '2M+ Tenhou / 4M+ Majsoul games', rest: 'used to validate training and evaluation infrastructure.' },
    ],
  },
  {
    name: 'Tenhou-to-MJAI',
    meta: 'Rust ETL · dataset publishing',
    href: '/projects/tenhou-to-mjai',
    points: [
      { lead: 'Tenhou Phoenix-room ETL', rest: 'converted logs into MJAI training data across 18 yearly archives.' },
      { lead: '12GB dataset / 2.72B MJAI events', rest: 'published and validated for downstream research.' },
      { lead: 'Rare mahjong AI dataset', rest: 'created for an under-served research niche.' },
    ],
  },
  {
    name: 'Cura',
    meta: 'HackUTD 2025 CBRE winner',
    href: '/projects/cura',
    points: [
      { lead: 'Commercial real estate forecasting app', rest: 'built with Next.js, FastAPI, and MongoDB.' },
      { lead: 'Full-stack agentic workflow', rest: 'across frontend, backend, document parsing, and research features.' },
      { lead: '24-hour hackathon ship', rest: 'for the HackUTD 2025 CBRE track.' },
    ],
  },
] as const;

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-outline-variant py-10" id={id}>
      <div className="middle-column">
        <h2 className="mb-6 font-headline-primary text-[14px] font-bold text-primary">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function BulletText({ lead, rest }: { lead: string; rest: string }) {
  return (
    <p className="font-code-body text-code-body text-on-surface-variant">
      - <strong className="font-bold text-primary">{lead}</strong> {rest}
    </p>
  );
}

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-on-surface">
      <Header />
      <main className="page-shell flex-grow">
        <section className="border-b border-outline-variant pb-10 pt-32" id="profile">
          <div className="middle-column">
            <div className="grid gap-8 md:grid-cols-[160px_1fr]">
              <div className="grid h-24 w-24 place-items-center border border-outline-variant bg-primary font-headline-primary text-[28px] font-black text-on-primary">SK</div>
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h1 className="font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">Sho Kaneko</h1>
                  <a className="op-button shrink-0" href="/Sho_Kaneko_Resume_2026.pdf" download>Resume</a>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 font-ui-label text-ui-label text-on-surface-variant">
                  <span>Computer Science @ UT Arlington</span>
                  <span>Arlington, TX</span>
                  <span>AI infrastructure / systems / developer tooling</span>
                </div>
                <p className="mt-5 max-w-[620px] font-code-body text-code-body text-on-surface-variant">
                  CS student building <strong className="font-bold text-primary">open-source Game AI</strong>, <strong className="font-bold text-primary">browser automation</strong>, <strong className="font-bold text-primary">data pipelines</strong>, and <strong className="font-bold text-primary">full-stack tools</strong> in Rust, Python, and TypeScript. Focused on <strong className="font-bold text-primary">AI infrastructure</strong>, backend systems, developer tooling, and high-performance software.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a className="op-button" href="https://github.com/NikkeTryHard">GitHub</a>
                  <a className="border border-outline-variant px-3 py-1.5 font-ui-label text-ui-label text-primary" href="https://linkedin.com/in/kanekosho/">LinkedIn</a>
                  <a className="border border-outline-variant px-3 py-1.5 font-ui-label text-ui-label text-primary" href="https://kaggle.com/shokanekolouis">Kaggle</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section title="Experience">
          <div className="bullet-row">
            <div>
              <h3 className="font-code-body text-code-body font-bold text-primary">AI Engineering Intern @ Akari Inc.</h3>
              <p className="mt-1 font-status-label text-status-label text-on-surface-variant">Tokyo · one of the company&apos;s first high school interns</p>
              <div className="mt-3 space-y-1">
                <BulletText lead="Gaussian Splitting Model" rest="for 3D object replication, moving processing from hours toward real-time execution." />
                <BulletText lead="LM optimizer" rest="for point cloud density, improving visual fidelity of generated 3D assets." />
              </div>
            </div>
            <span className="status-pill px-2 py-1">AI / 3D</span>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div>
            {projects.map((project) => (
              <Link className="bullet-row group" href={project.href} key={project.name}>
                <div>
                  <h3 className="font-code-body text-code-body font-bold text-primary group-hover:underline">{project.name}</h3>
                  <p className="mt-1 font-status-label text-status-label text-on-surface-variant">{project.meta}</p>
                  <div className="mt-3 space-y-1">
                    {project.points.map((point) => <BulletText key={point.lead} lead={point.lead} rest={point.rest} />)}
                  </div>
                </div>
                <span className="status-pill px-2 py-1">open</span>
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Languages">
          <div className="grid grid-cols-1 gap-0 border border-outline-variant md:grid-cols-2">
            <div className="border-b border-outline-variant p-4 md:border-b-0 md:border-r"><strong className="text-primary">Japanese</strong><p className="font-code-body text-code-body text-on-surface-variant">Native proficiency</p></div>
            <div className="p-4"><strong className="text-primary">Mandarin Chinese</strong><p className="font-code-body text-code-body text-on-surface-variant">Native proficiency</p></div>
          </div>
        </Section>

        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}
