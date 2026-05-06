'use client';

import { useState } from 'react';

const gitUrl = 'https://github.com/NikkeTryHard/personal_blog.git';
const cloneCommand = `git clone ${gitUrl}`;

export function CloneBox() {
  const [copied, setCopied] = useState(false);

  async function copyGitUrl() {
    await navigator.clipboard.writeText(cloneCommand);
    setCopied(true);
  }

  return (
    <div className="mt-8 overflow-hidden rounded border border-outline-variant bg-surface-container-lowest">
      <div className="border-b border-outline-variant bg-surface-container-low">
        <span className="inline-flex border-b border-primary px-5 py-3 font-code-body text-code-body text-primary">git</span>
      </div>
      <div className="flex items-center px-5 py-4 font-code-body text-code-body text-primary">
        <span>git clone https://github.com/</span><strong className="font-bold text-primary">NikkeTryHard/personal_blog</strong><span>.git</span>
        <button className={`ml-3 font-code-body text-code-body ${copied ? 'text-[#22c55e]' : 'text-on-surface-variant hover:text-primary'}`} type="button" onClick={copyGitUrl} aria-label="Copy git clone command" title="Copy git clone command">
          {copied ? '✓' : 'copy'}
        </button>
      </div>
    </div>
  );
}
