import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { FooterNav, PrimaryNav } from './nav';



export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-outline-variant bg-background/95">
      <div className="page-shell h-16 border-t-0 bg-transparent">
        <div className="middle-column flex h-16 items-center justify-between">
          <Link className="font-headline-primary text-[24px] font-black tracking-[-0.08em] text-primary" href="/" aria-label="SHOKANEKO home">
            SHOKANEKO
          </Link>
          <div className="flex min-w-[500px] items-center justify-end gap-6">
            <PrimaryNav />
            <a className="op-button inline-flex items-center gap-2" href="#search" data-search-trigger aria-label="Search Ctrl K"><span className="material-symbols-outlined text-[14px] text-on-primary">search</span><span className="hidden font-ui-label text-ui-label md:inline">Ctrl + K</span></a>
            <div className="theme-toggle-slot"><ThemeToggle /></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="page-shell border-t border-outline-variant py-8">
        <div className="middle-column">
          <FooterNav />
        </div>
      </div>
    </footer>
  );
}
