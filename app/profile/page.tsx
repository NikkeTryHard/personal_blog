import { Header, Footer } from '../chrome';
import { SearchPanel } from '../search-panel';


const projects = [
  {
    name: 'ZeroGravity',
    meta: 'Rust · AI proxy · 30 releases',
    href: 'https://github.com/NikkeTryHard/zerogravity',
    points: [
      'Open-source Rust proxy for AI coding tools with OpenAI-, Anthropic-, and Gemini-compatible APIs.',
      'Built bidirectional tool translation and Docker-first cross-platform runtime for Linux, macOS, and Windows.',
      'Reached 670 GitHub stars, 45 forks, and 9k+ GitHub downloads.',
    ],
  },
  {
    name: 'AIstudio ProxyAPI',
    meta: 'FastAPI · Playwright · Web UI',
    href: 'https://github.com/CJackHwang/AlstudioProxyAPI',
    points: [
      'Contributed to an OpenAI-compatible proxy for Google AI Studio with browser-driven AI workflows.',
      'Improved request queueing, request translation, streaming responses, tests, frontend modernization, and UI automation.',
      'Ranked #2 contributor on a 2,245-star repository.',
    ],
  },
  {
    name: 'tach-core',
    meta: 'Rust/Python · Linux snapshots · sandboxing',
    href: 'https://github.com/NikkeTryHard/tach-core',
    points: [
      'Built a test hypervisor for pytest using Linux snapshots to cut reset latency from ~200ms to under 50µs.',
      'Designed sandboxed execution with Landlock and Seccomp for untrusted tests.',
      'Validated against Django\'s 9,892-test suite, reducing runtime from ~144s to ~30s.',
    ],
  },
  {
    name: 'Hydra',
    meta: 'Rust · riichi mahjong AI · training infra',
    href: 'https://github.com/NikkeTryHard/hydra',
    points: [
      'Built an open-source riichi mahjong AI project aimed at rivaling LuckyJ with open weights.',
      'Optimized engine performance to 2.36x lower single-game latency and 8.0x higher 4-core batch throughput.',
      'Validated infrastructure across 2M+ Tenhou and 4M+ Majsoul games using NSF sponsorship.',
    ],
  },
  {
    name: 'Tenhou-to-MJAI',
    meta: 'Rust ETL · dataset publishing',
    href: 'https://github.com/NikkeTryHard/tenhou-to-mjai',
    points: [
      'Converted Tenhou Phoenix-room logs into MJAI training data across 18 yearly archives.',
      'Published and validated a 12GB dataset with 2.72B MJAI event lines.',
      'Created one of the only available datasets for mahjong AI research.',
    ],
  },
  {
    name: 'Cura',
    meta: 'HackUTD 2025 CBRE winner',
    href: 'https://github.com/armaanamatya/HackUTD2025',
    points: [
      'Contributed to a commercial real estate forecasting and analytics app built with Next.js, FastAPI, and MongoDB.',
      'Integrated full-stack workflows across frontend, backend, and agentic document/research features.',
      'Shipped under a 24-hour hackathon timeline.',
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
                <h1 className="font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">Sho Kaneko</h1>
                <div className="mt-3 flex flex-wrap gap-3 font-ui-label text-ui-label text-on-surface-variant">
                  <span>Computer Science @ UT Arlington</span>
                  <span>Arlington, TX</span>
                  <span>AI infrastructure / systems / developer tooling</span>
                </div>
                <p className="mt-5 max-w-[620px] font-code-body text-code-body text-on-surface-variant">
                  CS student building open-source Game AI, browser automation, data pipelines, and full-stack tools in Rust, Python, and TypeScript. Focused on AI infrastructure, backend systems, developer tooling, and high-performance software.
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
              <p className="mt-1 font-code-body text-code-body text-on-surface-variant">Tokyo · one of the company&apos;s first high school interns</p>
              <p className="mt-3 font-code-body text-code-body text-on-surface-variant">Developed a Gaussian Splitting Model for 3D object replication, moving processing from hours toward real-time execution. Implemented an LM optimizer for point cloud density and improved visual fidelity of generated 3D assets.</p>
            </div>
            <span className="status-pill px-2 py-1">AI / 3D</span>
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div>
            {projects.map((project) => (
              <a className="bullet-row group" href={project.href} key={project.name}>
                <div>
                  <h3 className="font-code-body text-code-body font-bold text-primary group-hover:underline">{project.name}</h3>
                  <p className="mt-1 font-status-label text-status-label text-on-surface-variant">{project.meta}</p>
                  <ul className="mt-3 space-y-1 font-code-body text-code-body text-on-surface-variant">
                    {project.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
                <span className="status-pill px-2 py-1">open</span>
              </a>
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
