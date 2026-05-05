'use client';

import { useEffect, useState } from 'react';
import { getSplashLine, splashLines } from './splash-lines';

function getNextSplashIndex() {
  const stored = window.localStorage.getItem('splash-index');
  const current = stored ? Number.parseInt(stored, 10) : -1;
  const next = Number.isFinite(current) ? current + 1 : 0;
  const normalized = next % splashLines.length;
  window.localStorage.setItem('splash-index', String(normalized));
  return normalized;
}

export function RandomSplash() {
  const [line, setLine] = useState('code go brrr');

  useEffect(() => {
    setLine(getSplashLine(getNextSplashIndex()));
  }, []);

  return <>{line}</>;
}
