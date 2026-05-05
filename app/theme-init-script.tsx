import Script from 'next/script';

const themeInit = `(() => { try { const stored = localStorage.getItem('theme'); const mode = stored === 'light' || stored === 'dark' ? stored : 'system'; const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const dark = mode === 'dark' || (mode === 'system' && systemDark); document.documentElement.classList.toggle('dark', dark); document.documentElement.dataset.theme = mode === 'system' ? (dark ? 'dark' : 'light') : mode; document.documentElement.dataset.themeMode = mode; } catch (_) {} })();`;

export function ThemeInitScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeInit}
    </Script>
  );
}
