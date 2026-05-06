import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer } from '../../chrome';
import { SearchPanel } from '../../search-panel';
import { getProjectArticle, projectArticles } from '../../project-data';
import ZeroGravity from './zerogravity.mdx';
import AIstudioProxyAPI from './aistudio-proxyapi.mdx';
import TachCore from './tach-core.mdx';
import Hydra from './hydra.mdx';
import TenhouToMJAI from './tenhou-to-mjai.mdx';
import Cura from './cura.mdx';

type Props = {
  params: Promise<{ slug: string }>;
};

const articles = {
  zerogravity: ZeroGravity,
  'aistudio-proxyapi': AIstudioProxyAPI,
  'tach-core': TachCore,
  hydra: Hydra,
  'tenhou-to-mjai': TenhouToMJAI,
  cura: Cura,
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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const Article = articles[slug as keyof typeof articles];
  if (!Article) notFound();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden text-on-surface">
      <Header />
      <main className="page-shell flex-grow">
        <Article />
        <SearchPanel />
      </main>
      <Footer />
    </div>
  );
}
