export const FRAME = {
  railClass: 'page-shell',
  contentClass: 'middle-column',
  sectionClass: 'section-line',
  accent: '[*]',
} as const;

export function sectionWrap(inner: string) {
  return `<section className="${FRAME.sectionClass}"><div className="${FRAME.contentClass}">${inner}</div></section>`;
}
