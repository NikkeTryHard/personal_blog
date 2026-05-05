'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

const modes: ThemeMode[] = ['light', 'dark', 'system'];

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system';
}

function getStoredTheme(): ThemeMode {
  const stored = localStorage.getItem('theme');
  return isThemeMode(stored) ? stored : 'system';
}

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function applyTheme(mode: ThemeMode, persist = true) {
  const dark = mode === 'dark' || (mode === 'system' && getSystemDark());
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = mode === 'system' ? (dark ? 'dark' : 'light') : mode;
  document.documentElement.dataset.themeMode = mode;

  if (persist) {
    if (mode === 'system') localStorage.removeItem('theme');
    else localStorage.setItem('theme', mode);
  }
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof document === 'undefined') return 'system';
    const stored = document.documentElement.dataset.themeMode ?? localStorage.getItem('theme');
    return isThemeMode(stored) ? stored : 'system';
  });

  useEffect(() => {
    if (mode !== 'system') {
      applyTheme(mode, false);
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system', false);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [mode]);

  function cycleTheme() {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    setMode(next);
    applyTheme(next);
  }

  return (
    <button suppressHydrationWarning className="flex w-16 justify-end text-primary hover:opacity-60" type="button" onClick={cycleTheme} aria-label={`Theme: ${mode}`} title={`Theme: ${mode}`}>
      <span className="material-symbols-outlined text-[14px]">{mode}</span>
    </button>
  );
}
