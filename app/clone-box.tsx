'use client';

const gitUrl = 'https://github.com/NikkeTryHard/personal_blog.git';
const repoPath = 'NikkeTryHard/personal_blog';
const cloneCommand = `git clone ${gitUrl}`;

export function CloneBox() {
  async function copyGitUrl() {
    await navigator.clipboard.writeText(cloneCommand);
  }

  return (
    <div className="mt-8 overflow-hidden rounded border border-outline-variant bg-surface-container-lowest">
      <div className="border-b border-outline-variant bg-surface-container-low">
        <span className="inline-flex border-b border-primary px-5 py-3 font-code-body text-code-body text-primary">git</span>
      </div>
      <div className="flex items-center gap-2 px-5 py-4 font-code-body text-code-body text-primary">
        <span>git clone https://github.com/</span>
        <strong className="font-bold text-primary">{repoPath}</strong>
        <span>.git</span>
        <button className="ml-1 grid h-5 w-5 place-items-center text-on-surface-variant hover:text-primary" type="button" onClick={copyGitUrl} aria-label="Copy git clone command" title="Copy git clone command">
          <span className="material-symbols-outlined text-[16px]">content_copy</span>
        </button>
      </div>
    </div>
  );
}
