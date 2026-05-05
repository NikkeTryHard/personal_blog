export const FRAME = {
  railClass: 'page-shell',
  contentClass: 'middle-column',
  sectionClass: 'section-line',
  markerClass: 'frame-intersections',
  accent: '[*]',
} as const;

export function FrameMarkers() {
  return (
    <div className={FRAME.markerClass} aria-hidden="true">
      <span className="frame-marker frame-marker-top-left" />
      <span className="frame-marker frame-marker-top-right" />
      <span className="frame-marker frame-marker-bottom-left" />
      <span className="frame-marker frame-marker-bottom-right" />
    </div>
  );
}
