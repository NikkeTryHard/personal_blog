'use client';

import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

const modes: ThemeMode[] = ['light', 'dark', 'system'];

function isThemeMode(value: string | null | undefined): value is ThemeMode {
  return value === 'light' || value === 'dark' || value === 'system';
}

function getSystemDark() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function writeCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=31536000; samesite=lax`;
}

function applyTheme(mode: ThemeMode) {
  const dark = mode === 'dark' || (mode === 'system' && getSystemDark());
  const resolved = dark ? 'dark' : 'light';

  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themeMode = mode;
  localStorage.setItem('theme', mode);
  writeCookie('theme', mode);
  writeCookie('theme_resolved', resolved);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const serverMode = document.documentElement.dataset.themeMode;
    return isThemeMode(serverMode) ? serverMode : 'dark';
  });

  useEffect(() => {
    applyTheme(mode);

    if (mode !== 'system') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => applyTheme('system');
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [mode]);

  function cycleTheme() {
    setMode(modes[(modes.indexOf(mode) + 1) % modes.length]);
  }

  return (
    <button suppressHydrationWarning className="flex w-16 justify-end text-primary hover:opacity-60" type="button" onClick={cycleTheme} aria-label={`Theme: ${mode}`} title={`Theme: ${mode}`}>
      <span suppressHydrationWarning className="material-symbols-outlined text-[14px]">{mode}</span>
    </button>
  );
}
