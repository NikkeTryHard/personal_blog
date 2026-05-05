export const posts = [
  {
    slug: 'component-registry',
    title: 'Architecting the Component Registry',
    date: 'Oct 12, 2023',
    isoDate: '2023-10-12',
    loc: '1,204',
    tag: 'Architecture',
    summary: 'Deep dive into structuring a shared JSON schema for UI components across disparate frameworks.',
  },
  {
    slug: 'brightness-step-ladder',
    title: 'The Brightness-Step Ladder Pattern',
    date: 'Sep 28, 2023',
    isoDate: '2023-09-28',
    loc: '845',
    tag: 'Design Systems',
    summary: 'Why dropping shadows in favor of strict tonal elevation creates a more cohesive dark mode experience.',
  },
  {
    slug: 'conflict-resolution-protocol',
    title: 'Building the Conflict Resolution Protocol',
    date: 'Sep 15, 2023',
    isoDate: '2023-09-15',
    loc: '2,150',
    tag: 'Protocols',
    summary: 'A deterministic approach to handling styling conflicts between localized JSON and global design systems.',
  },
  {
    slug: 'radial-glow-performance',
    title: 'Optimizing Radial Glows for Performance',
    date: 'Aug 30, 2023',
    isoDate: '2023-08-30',
    loc: '432',
    tag: 'Performance',
    summary: 'CSS techniques for achieving high-end atmospheric lighting effects without causing repaints.',
  },
] as const;

export const projects = [
  ['nexus-core', 'High-performance distributed message broker written in Rust. Features zero-copy routing.', 'Rust', '1.2k'],
  ['spectre-cli', 'A lightning-fast terminal UI for monitoring Docker containers and Kubernetes pods.', 'Go', '850'],
  ['ts-morpher', 'AST transformation toolkit for TypeScript. Simplifies complex codemods and code generation.', 'TypeScript', '4.5k'],
] as const;

export const searchResults = [
  ['/', 'Home / latest articles', 'home'],
  ['/article', 'Full article page', 'description'],
  ['/profile', 'Profile and projects', 'person'],
] as const;
