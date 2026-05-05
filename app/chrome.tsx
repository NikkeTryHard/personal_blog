import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { FrameMarkers } from './frame';

const navItems = [
  ['home', '/'],
  ['articles', '/article'],
  ['profile', '/profile'],
] as const;

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-outline-variant bg-background/95">
      <FrameMarkers />
      <div className="page-shell h-16 border-t-0 bg-transparent">
        <FrameMarkers />
        <div className="middle-column flex h-16 items-center justify-between">
          <Link className="font-headline-primary text-[24px] font-black tracking-[-0.08em] text-primary" href="/" aria-label="SHOKANEKO home">
            SHOKANEKO
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
              {navItems.map(([item, href]) => (
                <Link className="material-symbols-outlined text-[9px] font-thin text-on-surface-variant opacity-70 hover:text-primary hover:opacity-100" href={href} key={item}>
                  {item}
                </Link>
              ))}
            </nav>
            <a className="op-button inline-flex items-center gap-2" href="#search" data-search-trigger aria-label="Search Ctrl K"><span className="material-symbols-outlined text-[14px] text-on-primary">search</span><span className="hidden font-ui-label text-ui-label md:inline">Ctrl + K</span></a>
            <ThemeToggle />
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
        <FrameMarkers />
        <div className="middle-column">
          <nav className="flex justify-center gap-6" aria-label="Footer navigation">
            {navItems.map(([item, href]) => <Link className="font-ui-label text-ui-label text-on-surface-variant hover:text-primary" href={href} key={item}>{item}</Link>)}
          </nav>
        </div>
      </div>
    </footer>
  );
}
