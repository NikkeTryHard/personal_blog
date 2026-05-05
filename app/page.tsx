import Link from 'next/link';
import { Header, Footer } from './chrome';
import { posts } from './content';
import { SearchPanel } from './search-panel';
import { RandomSplash } from './random-title';
import { CloneBox } from './clone-box';

function Hero() {
  return (
    <section className="section-line pt-32" id="top"><div className="middle-column"><div className="mb-8 flex items-center gap-3 font-ui-label text-ui-label text-on-surface-variant">
      <span className="bg-primary px-2 py-1 text-on-primary">New</span>
      <span>Personal devlog online. Notes, systems, and build logs.</span>
    </div>
    <h1 className="max-w-[680px] font-headline-primary text-[34px] font-black leading-tight tracking-[-0.06em] text-primary">
      <RandomSplash />
    </h1>
    <p className="mt-5 max-w-[620px] font-code-body text-code-body text-on-surface-variant">
      You can clone this tech blog and use it as a base for your own. Just keep credit to NikkeTryHard somewhere visible if you ship it.
    </p>
    <CloneBox /></div></section>
  );
}

function Posts() {
  return (
    <section className="section-line" id="articles" aria-labelledby="articles-title"><div className="middle-column"><h2 id="articles-title" className="mb-6 font-headline-primary text-[14px] font-bold text-primary">Latest articles</h2>
    <div>
      {posts.map((post) => (
        <Link className="bullet-row group" href="/article" key={post.title}>
          <div>
            <h3 className="font-code-body text-code-body font-bold text-primary group-hover:underline">{post.title}</h3>
            <p className="mt-1 font-code-body text-code-body text-on-surface-variant">{post.summary}</p>
            <div className="mt-2 flex items-center gap-2 font-status-label text-status-label text-on-surface-variant">
              <time dateTime={post.isoDate}>{post.date}</time>
              <span>—</span>
              <span>{post.tag}</span>
            </div>
          </div>
          <span className="status-pill px-2 py-1">LOC {post.loc}</span>
        </Link>
      ))}
    </div></div></section>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-on-surface">
      <Header />
      <main className="page-shell flex-grow">
        <Hero />
        <Posts />
        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}
