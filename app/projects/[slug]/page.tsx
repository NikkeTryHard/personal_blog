import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../chrome';
import { SearchPanel } from '../../search-panel';
import { getProjectArticle, projectArticles } from '../../project-data';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectArticles.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectArticle(slug);
  if (!project) return {};
  return {
    title: `${project.title} · SHOKANEKO`,
    description: project.summary,
  };
}

function TerminalFlow({ steps }: { steps: readonly string[] }) {
  return (
    <div className="terminal-panel">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-5 py-3">
        <span className="font-ui-label text-ui-label text-on-surface-variant">system.flow</span>
        <span className="font-ui-label text-ui-label text-on-surface-variant">read-only</span>
      </div>
      <div className="bg-primary p-5 text-on-primary">
        <ol className="space-y-3 font-code-body text-code-body">
          {steps.map((step, index) => (
            <li className="grid grid-cols-[42px_1fr] gap-4" key={step}>
              <span className="text-on-primary/60">{String(index + 1).padStart(2, '0')}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectArticle(slug);
  if (!project) notFound();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-on-surface">
      <Header />
      <main className="page-shell flex-grow">
        <article>
          <header className="section-line pt-32">
            <div className="middle-column">
              <div className="mb-3 flex flex-wrap items-center gap-3 font-ui-label text-ui-label text-on-surface-variant">
                <span>project</span>
                <span>{project.role}</span>
                <span>{project.signal}</span>
              </div>
              <div className="flex items-start justify-between gap-5">
                <h1 className="max-w-[620px] font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">{project.title}</h1>
                <a className="op-button shrink-0" href={project.repo}>repo</a>
              </div>
              <p className="mt-5 max-w-[680px] font-code-body text-code-body text-on-surface-variant">{project.summary}</p>
            </div>
          </header>

          <section className="section-line">
            <div className="middle-column">
              <h2 className="mb-6 font-headline-primary text-[16px] font-bold text-primary">Stack</h2>
              <div className="grid grid-cols-2 border border-outline-variant md:grid-cols-3">
                {project.stack.map((item, index) => (
                  <div className={`p-4 font-code-body text-code-body text-primary ${index % 3 !== 2 ? 'md:border-r' : ''} ${index < project.stack.length - 3 ? 'border-b' : ''} border-outline-variant`} key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-line">
            <div className="middle-column">
              <h2 className="mb-6 font-headline-primary text-[16px] font-bold text-primary">Data path</h2>
              <TerminalFlow steps={project.flow} />
            </div>
          </section>

          <section className="section-line">
            <div className="middle-column">
              <h2 className="mb-6 font-headline-primary text-[16px] font-bold text-primary">Signal</h2>
              <div className="grid grid-cols-1 border border-outline-variant md:grid-cols-3">
                {project.metrics.map(([value, label], index) => (
                  <div className={`p-5 ${index < project.metrics.length - 1 ? 'md:border-r' : ''} border-outline-variant`} key={label}>
                    <div className="font-headline-primary text-[26px] font-black tracking-[-0.06em] text-primary">{value}</div>
                    <div className="mt-2 font-status-label text-status-label text-on-surface-variant">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-line">
            <div className="middle-column">
              <h2 className="mb-6 font-headline-primary text-[16px] font-bold text-primary">Notes</h2>
              <div>
                {project.sections.map((section) => (
                  <div className="bullet-row" key={section.label}>
                    <div>
                      <h3 className="font-code-body text-code-body font-bold text-primary">{section.title}</h3>
                      <p className="mt-3 font-code-body text-code-body text-on-surface-variant">{section.body}</p>
                    </div>
                    <span className="status-pill px-2 py-1">{section.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section-line">
            <div className="middle-column">
              <h2 className="mb-6 font-headline-primary text-[16px] font-bold text-primary">Cautions</h2>
              <div>
                {project.cautions.map((caution) => (
                  <div className="bullet-row" key={caution}>
                    <p className="font-code-body text-code-body text-on-surface-variant">- {caution}</p>
                    <span />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}
