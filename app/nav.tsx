'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  ['home', '/'],
  ['articles', '/article'],
  ['profile', '/profile'],
] as const;

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
      {navItems.map(([item, href]) => {
        const active = isActive(pathname, href);
        return (
          <Link className={`nav-link ${active ? 'nav-link-active' : ''}`} href={href} key={item} aria-current={active ? 'page' : undefined}>
            {item}
          </Link>
        );
      })}
    </nav>
  );
}

export function FooterNav() {
  return (
    <nav className="flex justify-center gap-6" aria-label="Footer navigation">
      {navItems.map(([item, href]) => <Link className="font-ui-label text-ui-label text-on-surface-variant hover:text-primary" href={href} key={item}>{item}</Link>)}
    </nav>
  );
}
