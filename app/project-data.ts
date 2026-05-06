export const projectArticles = [
  {
    slug: 'zerogravity',
    title: 'ZeroGravity',
    repo: 'https://github.com/NikkeTryHard/zerogravity',
    role: 'Rust AI proxy infrastructure',
    signal: '670 stars · 45 forks · 9k+ downloads',
    stack: ['Rust', 'Docker', 'HTTP/2', 'TLS', 'API translation'],
    summary: 'A Docker-first proxy that makes coding tools talk to multiple frontier-model API dialects through one operational boundary.',
    flow: ['OpenAI / Anthropic / Gemini request', 'protocol translation', 'HTTP/2 + TLS boundary', 'upstream model service', 'streamed tool response'],
    metrics: [
      ['30', 'public releases'],
      ['670+', 'GitHub stars'],
      ['9k+', 'downloads'],
    ],
    sections: [
      {
        label: 'boundary',
        title: 'One proxy surface for incompatible AI clients',
        body: 'ZeroGravity is useful because the caller sees one stable API shape while the proxy owns upstream dialect differences. The hard part is not forwarding JSON; it is preserving tool-call semantics while keeping deployment reproducible.',
      },
      {
        label: 'shipping',
        title: 'Docker-first release discipline',
        body: 'The repository exposes deployment artifacts and documentation around containerized operation. That makes the project legible as infrastructure, not a local-only script.',
      },
    ],
    cautions: ['Observed repo surface is distribution/docs oriented; source internals are not fully public.', 'Project notes indicate discontinued status in 2026.'],
  },
  {
    slug: 'aistudio-proxyapi',
    title: 'AIstudio ProxyAPI',
    repo: 'https://github.com/CJackHwang/AIstudioProxyAPI',
    role: 'Browser automation API bridge',
    signal: '2.2k+ stars · FastAPI · Playwright',
    stack: ['Python', 'FastAPI', 'Playwright', 'Camoufox', 'React', 'Docker'],
    summary: 'An OpenAI-compatible API layer that drives Google AI Studio through browser automation and streams results back to standard clients.',
    flow: ['OpenAI-compatible request', 'FastAPI middleware', 'browser session manager', 'Google AI Studio UI', 'stream parser', 'client response'],
    metrics: [
      ['#2', 'contributor rank'],
      ['2.2k+', 'repo stars'],
      ['65', 'releases'],
    ],
    sections: [
      {
        label: 'automation',
        title: 'Turning a web app into a programmable API',
        body: 'The architecture routes API traffic into controlled browser sessions. Playwright/Camoufox becomes the compatibility layer when the target system exposes UI behavior faster than stable public APIs.',
      },
      {
        label: 'reliability',
        title: 'Queueing, translation, and streaming under UI drift',
        body: 'The interesting engineering work is failure containment: request queues, response translation, streaming adapters, frontend modernization, and UI automation fixes all exist because browser-driven APIs fail differently than normal backend calls.',
      },
    ],
    cautions: ['AGPLv3 repository.', 'Browser automation depends on upstream UI stability and can be memory-heavy.'],
  },
  {
    slug: 'tach-core',
    title: 'tach-core',
    repo: 'https://github.com/NikkeTryHard/tach-core',
    role: 'Python test hypervisor',
    signal: '<50µs reset path · Linux sandboxing',
    stack: ['Rust', 'Python', 'userfaultfd', 'Landlock', 'Seccomp', 'PyO3'],
    summary: 'A Linux-specific pytest hypervisor that replaces slow process resets with memory snapshots and isolates untrusted test execution.',
    flow: ['pytest discovery', 'Rust supervisor', 'zygote worker', 'memory snapshot', 'sandboxed test run', 'reporting'],
    metrics: [
      ['<50µs', 'snapshot reset target'],
      ['~144s→~30s', 'Django suite result'],
      ['9,892', 'tests validated'],
    ],
    sections: [
      {
        label: 'reset',
        title: 'Memory snapshots instead of process churn',
        body: 'tach-core attacks the expensive part of tests: returning to a clean state. The design uses Linux primitives such as userfaultfd and zygote-style workers so reset cost moves toward microseconds instead of hundreds of milliseconds.',
      },
      {
        label: 'trust',
        title: 'Fast tests still need an honest security boundary',
        body: 'The sandbox story matters because speed without containment is a trap. Landlock and Seccomp make the runner explicit about what untrusted tests are allowed to touch.',
      },
    ],
    cautions: ['Alpha project.', 'Requires Linux kernel support and elevated capabilities for some paths.'],
  },
  {
    slug: 'hydra',
    title: 'Hydra',
    repo: 'https://github.com/NikkeTryHard/hydra',
    role: 'Open-source riichi mahjong AI',
    signal: 'Rust engine · training infrastructure',
    stack: ['Rust', 'Docker', 'Jupyter', 'cargo nextest', 'RL/BC training'],
    summary: 'A modular Rust mahjong AI stack that separates rules, runtime/search, and training so research claims can become auditable code.',
    flow: ['canonical archive claims', 'hydra-engine rules', 'hydra-core runtime/search', 'hydra-train orchestration', 'evaluation logs'],
    metrics: [
      ['2.36x', 'lower single-game latency'],
      ['8.0x', 'higher 4-core throughput'],
      ['6M+', 'games across Tenhou/Majsoul validation'],
    ],
    sections: [
      {
        label: 'layers',
        title: 'Authority separation across crates',
        body: 'Hydra keeps game rules, runtime/search, and training orchestration in distinct layers. That separation makes benchmark failures easier to localize and prevents ML experiments from rewriting rules truth.',
      },
      {
        label: 'audit',
        title: 'Research claims as the root of implementation',
        body: 'The repo carries design docs and canonical claim archives. That is not decoration: it turns training infrastructure into an audit trail where implementation choices can be traced back to explicit assumptions.',
      },
    ],
    cautions: ['Active research project with layered docs; pages should avoid implying final model strength beyond observed status.', 'Split-license model needs care for derivative work.'],
  },
  {
    slug: 'tenhou-to-mjai',
    title: 'Tenhou-to-MJAI',
    repo: 'https://github.com/NikkeTryHard/tenhou-to-mjai',
    role: 'Mahjong dataset ETL',
    signal: '12GB dataset · 2.72B events',
    stack: ['Rust', 'Python', 'JSON', 'Protobuf', 'MJAI', 'uv'],
    summary: 'A high-throughput conversion pipeline that normalizes raw Tenhou and Majsoul logs into MJAI events usable for mahjong AI research.',
    flow: ['raw XML / Protobuf logs', 'scraper', 'converter', 'MJAI normalization', 'gzip packaging', 'streaming validation'],
    metrics: [
      ['18', 'yearly archives'],
      ['12GB', 'published dataset'],
      ['2.72B', 'MJAI event lines'],
    ],
    sections: [
      {
        label: 'pipeline',
        title: 'Raw game logs into training data',
        body: 'The project is an ETL system first: scrape, decode, normalize, package, validate. Rust owns performance-critical conversion and validation so the dataset can scale beyond toy examples.',
      },
      {
        label: 'format',
        title: 'MJAI as the research boundary',
        body: 'Normalizing heterogeneous platform logs into MJAI gives downstream agents one event language. That is what turns archived games into usable training infrastructure.',
      },
    ],
    cautions: ['External platform APIs and scraping surfaces can change.', 'Dataset redistribution carries platform and CC BY 4.0 considerations.'],
  },
  {
    slug: 'cura',
    title: 'Cura',
    repo: 'https://github.com/armaanamatya/HackUTD2025',
    role: 'HackUTD 2025 CBRE winner',
    signal: 'Next.js · FastAPI · agentic CRE analytics',
    stack: ['TypeScript', 'Next.js', 'Python', 'FastAPI', 'CrewAI', 'MongoDB', 'Gemini'],
    summary: 'A commercial real-estate intelligence prototype that combines document parsing, agent orchestration, and a contextual web UI.',
    flow: ['property document', 'parser', 'FastAPI backend', 'CrewAI agents', 'MongoDB Atlas', 'Next.js dashboard'],
    metrics: [
      ['24h', 'hackathon build'],
      ['CBRE', 'track winner'],
      ['3', 'major layers'],
    ],
    sections: [
      {
        label: 'problem',
        title: 'Compressing CRE research work',
        body: 'Cura targets the slow loop in commercial real estate analysis: ingesting property material, extracting useful signals, and forming a decision-ready report from fragmented sources.',
      },
      {
        label: 'prototype',
        title: 'Agentic workflow under hackathon constraints',
        body: 'The observed repo splits frontend, parser, and backend agent systems. That shape is right for a prototype where document intelligence and dashboard iteration move in parallel.',
      },
    ],
    cautions: ['Hackathon prototype; production reliability should not be implied.', 'Some AI provider details are architecture-level observations from repo structure/docs.'],
  },
] as const;

export type ProjectArticle = (typeof projectArticles)[number];

export function getProjectArticle(slug: string) {
  return projectArticles.find((project) => project.slug === slug);
}
