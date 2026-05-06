import type { ReactNode } from 'react';

export function ProjectArticleLayout({
  title,
  role,
  signal,
  repo,
  summary,
  children,
}: {
  title: string;
  role: string;
  signal: string;
  repo: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <article>
      <header className="section-line pt-32">
        <div className="middle-column">
          <div className="mb-3 flex flex-wrap items-center gap-3 font-ui-label text-ui-label text-on-surface-variant">
            <span>article</span>
            <span>{role}</span>
            <span>{signal}</span>
          </div>
          <div className="flex items-start justify-between gap-5">
            <h1 className="max-w-[620px] font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">{title}</h1>
            <a className="op-button shrink-0" href={repo}>repo</a>
          </div>
          <p className="mt-5 max-w-[680px] font-code-body text-code-body text-on-surface-variant">{summary}</p>
        </div>
      </header>
      <div className="project-mdx">{children}</div>
    </article>
  );
}

export function ArticleSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="section-line">
      <div className="middle-column">
        <h2 className="mb-6 font-headline-primary text-[16px] font-bold text-primary">{title}</h2>
        <div className="space-y-4 font-code-body text-code-body text-on-surface-variant">{children}</div>
      </div>
    </section>
  );
}

export function MetricGrid({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="not-prose grid grid-cols-1 border border-outline-variant md:grid-cols-3">
      {items.map(([value, label], index) => (
        <div className={`p-5 ${index < items.length - 1 ? 'md:border-r' : ''} border-outline-variant`} key={label}>
          <div className="font-headline-primary text-[26px] font-black tracking-[-0.06em] text-primary">{value}</div>
          <div className="mt-2 font-status-label text-status-label text-on-surface-variant">{label}</div>
        </div>
      ))}
    </div>
  );
}

export function FlowTrace({ steps }: { steps: readonly string[] }) {
  return (
    <div className="not-prose terminal-panel">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-5 py-3">
        <span className="font-ui-label text-ui-label text-on-surface-variant">reasoning.trace</span>
        <span className="font-ui-label text-ui-label text-on-surface-variant">scroll</span>
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

export function DecisionCard({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <div className="bullet-row not-prose">
      <div>
        <h3 className="font-code-body text-code-body font-bold text-primary">{title}</h3>
        <div className="mt-3 space-y-3 font-code-body text-code-body text-on-surface-variant">{children}</div>
      </div>
      <span className="status-pill px-2 py-1">{label}</span>
    </div>
  );
}
