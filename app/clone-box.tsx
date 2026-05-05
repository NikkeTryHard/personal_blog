'use client';

const gitUrl = 'https://github.com/NikkeTryHard/personal_blog.git';
const cloneCommand = `git clone ${gitUrl}`;

export function CloneBox() {
  async function copyGitUrl() {
    await navigator.clipboard.writeText(cloneCommand);
  }

  return (
    <div className="mt-8 terminal-panel">
      <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low">
        <span className="border-b border-primary px-5 py-3 font-ui-label text-ui-label text-primary">git</span>
        <button className="px-5 py-3 font-ui-label text-ui-label text-on-surface-variant hover:text-primary" type="button" onClick={copyGitUrl}>copy</button>
      </div>
      <div className="px-5 py-4 font-code-body text-code-body text-primary">
        <span className="text-on-surface-variant">$</span> {cloneCommand}
      </div>
    </div>
  );
}
