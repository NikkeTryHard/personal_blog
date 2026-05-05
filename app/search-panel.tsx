'use client';

import { useEffect, useRef, useState } from 'react';
import { searchResults } from './content';

export function SearchPanel() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;

      if ((event.ctrlKey || event.metaKey) && event.code === 'KeyK') {
        event.preventDefault();
        event.stopPropagation();
        setOpen(true);
        return;
      }

      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (!isTyping && event.key === '/') {
        event.preventDefault();
        setOpen(true);
      }
    }

    function onTrigger(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.closest('[data-search-trigger]')) {
        event.preventDefault();
        setOpen(true);
      }
    }

    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('click', onTrigger);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.removeEventListener('click', onTrigger);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  return (
    <>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-start justify-center px-2 pt-[106px]" role="dialog" aria-modal="true" aria-label="Search">
          <button className="absolute inset-0 cursor-default bg-transparent" aria-label="Close search" onClick={() => setOpen(false)} type="button" />
          <div className="relative z-10 flex w-full max-w-[720px] flex-col overflow-hidden border border-outline-variant bg-background/90">
            <div className="flex items-center border-b border-outline-variant bg-surface-container-low px-3 py-2">
              <span className="status-pill px-1.5 py-1 uppercase tracking-widest">Search</span>
              <span className="ml-auto status-pill px-1.5 py-1 uppercase tracking-widest">Ctrl + K</span>
            </div>
            <div className="flex items-center border-b border-outline-variant px-3 py-2">
              <input ref={inputRef} className="flex-1 border-none bg-transparent p-0 font-code-body text-code-body text-on-surface outline-none placeholder:text-outline" defaultValue="/" placeholder="Search" />
              <span className="status-pill px-1.5 py-1 uppercase tracking-widest">esc</span>
            </div>
            <SearchResults />
          </div>
        </div>
      ) : null}
    </>
  );
}

function SearchResults() {
  return (
    <div className="bg-background p-1.5">
      <div className="grid grid-cols-[72px_1fr_160px] border-b border-outline-variant px-2 py-2 font-status-label text-status-label uppercase tracking-widest text-on-surface-variant">
        <span>Type</span>
        <span>Target</span>
        <span className="text-right">Status</span>
      </div>
      {searchResults.map(([href, desc, icon], index) => (
        <a className={`grid grid-cols-[72px_1fr_160px] border-b border-outline-variant px-2 py-3 text-left ${index === 0 ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'}`} key={href} href={href}>
          <span className="font-status-label text-status-label uppercase">[{icon}]</span>
          <span className="font-code-body text-code-body">{href}</span>
          <span className="text-right font-status-label text-status-label">{desc}</span>
        </a>
      ))}
    </div>
  );
}
