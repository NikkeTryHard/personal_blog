import type { Metadata } from 'next';
import { Header, Footer } from '../chrome';
import { SearchPanel } from '../search-panel';

export const metadata: Metadata = {
  title: 'articles · SHOKANEKO',
};

const nodes = ['Node 01|status: active\\nload: 12%\\nmem: 1024MB', 'Node 02|status: standby\\nload: 2%\\nmem: 512MB', 'Worker A|processing queue...\\njobs: 42\\nlatency: 12ms', 'DB Primary|syncing... [OK]\\niops: 1420\\nconn: 84'];

export default function ArticlePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-on-surface">
      <Header />
      <main className="page-shell flex-grow">
        <article id="article">
          <header className="section-line pt-32"><div className="middle-column"><div className="mb-3 flex items-center gap-3 font-ui-label text-ui-label text-on-surface-variant">
            <time dateTime="2023-10-24">October 24, 2023</time>
            <span>1,204 LOC</span>
            <span>Architecture</span>
          </div>
          <h1 className="max-w-[760px] font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">Building a Monolithic Minimalist UI Architecture</h1>
          <p className="mt-5 max-w-[640px] font-code-body text-code-body text-on-surface-variant">
            Exploring the tension between utility-driven developer infrastructure aesthetics and modern web capabilities. Why sometimes, less really is just less.
          </p></div></header>

          <section className="section-line"><div className="middle-column"><h2 className="mb-4 font-headline-primary text-[16px] font-bold text-primary">What is this system?</h2>
          <p className="font-code-body text-code-body text-on-surface-variant">
            Depth is communicated through a brightness-step ladder rather than traditional drop shadows. Higher levels in the UI surface are represented by lighter values and separated by strict one-pixel rules.
          </p>
          <div className="mt-6">
            {['Tonal Elevation — lighter grays for elevated surfaces.', 'Recessed Areas — pure black for code blocks and terminals.', 'Spotlight Glows — sparse radial gradients for focal points.'].map((item) => (
              <div className="bullet-row" key={item}><p className="font-code-body text-code-body text-on-surface">{item}</p><span /></div>
            ))}
          </div></div></section>

          <section className="section-line"><div className="middle-column"><h3 className="mb-4 font-headline-primary text-[16px] font-bold text-primary">Implementation Strategy</h3>
          <div className="terminal-panel">
            <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-5 py-3">
              <span className="font-ui-label text-ui-label text-on-surface-variant">tailwind.config.js</span>
              <span className="font-ui-label text-ui-label text-on-surface-variant">copy</span>
            </div>
            <pre className="overflow-x-auto bg-primary p-5 font-code-body text-code-body leading-relaxed text-on-primary"><code>{`theme: {
            extend: {
              colors: {
                'canvas-deep': '#000000',
                'surface-card': '#181818',
                'surface-elevated': '#222222',
              }
            }
          }`}</code></pre>
          </div></div></section>

          <section className="section-line"><div className="middle-column"><h3 className="mb-4 font-headline-primary text-[16px] font-bold text-primary">System Output</h3>
          <div className="grid grid-cols-1 border border-outline-variant md:grid-cols-2">
            {nodes.map((item, index) => {
              const [title, body] = item.split('|');
              return <div className={`p-5 ${index % 2 === 0 ? 'md:border-r' : ''} ${index < 2 ? 'border-b' : ''} border-outline-variant`} key={title}><span className="mb-2 block font-ui-label text-ui-label uppercase text-on-surface-variant">{title}</span><div className="whitespace-pre-line font-code-body text-code-body text-primary">{body}</div></div>;
            })}
          </div></div></section>
        </article>
        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}
