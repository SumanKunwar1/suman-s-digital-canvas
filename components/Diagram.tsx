// Architecture diagrams, one per case study, drawn only from what is in the code (FACTS.md).
// Nodes sit on a 360-unit-wide grid so the same SVG reads on a phone and on a desktop.

type Node = { id: string; x: number; y: number; w: number; lines: string[]; external?: boolean };
type Edge = [from: string, to: string];
type Group = { x: number; y: number; w: number; h: number; label: string };

const LINE = 16;
const PAD = 10;
const nodeHeight = (n: Node) => n.lines.length * LINE + PAD * 2 - 4;

function Diagram({ title, nodes, edges, groups = [] }: { title: string; nodes: Node[]; edges: Edge[]; groups?: Group[] }) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const height = Math.max(...nodes.map((n) => n.y + nodeHeight(n)), ...groups.map((g) => g.y + g.h)) + 2;

  return (
    <figure className="diagram">
      <svg viewBox={`0 0 360 ${height}`} role="img" aria-label={title} fontSize="12.5" fontFamily="inherit">
        <defs>
          <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
            <path d="M0 0L8 4L0 8z" fill="#000" />
          </marker>
        </defs>
        {groups.map((g) => (
          <g key={g.label}>
            <rect x={g.x} y={g.y} width={g.w} height={g.h} fill="#f2f2f2" />
            <text x={g.x + 8} y={g.y + 16} fill="#595959">
              {g.label}
            </text>
          </g>
        ))}
        {edges.map(([a, b]) => {
          const from = byId[a];
          const to = byId[b];
          const sameRow = Math.abs(from.y - to.y) < 4;
          if (sameRow) {
            const fy = from.y + nodeHeight(from) / 2;
            const fx = from.x < to.x ? from.x + from.w : from.x;
            const tx = from.x < to.x ? to.x : to.x + to.w;
            return <line key={a + b} x1={fx} y1={fy} x2={tx} y2={fy} stroke="#000" markerEnd="url(#arrow)" />;
          }
          // Straight down through the middle of where the two boxes overlap; diagonal only if they don't.
          const left = Math.max(from.x, to.x);
          const right = Math.min(from.x + from.w, to.x + to.w);
          const sx = right - left > 16 ? (left + right) / 2 : from.x + from.w / 2;
          const ex = right - left > 16 ? sx : clamp(sx, to.x + 8, to.x + to.w - 8);
          return (
            <line
              key={a + b}
              x1={sx}
              y1={from.y + nodeHeight(from)}
              x2={ex}
              y2={to.y - 1}
              stroke="#000"
              markerEnd="url(#arrow)"
            />
          );
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x + 0.5}
              y={n.y + 0.5}
              width={n.w - 1}
              height={nodeHeight(n) - 1}
              fill="#fff"
              stroke="#000"
              strokeDasharray={n.external ? "4 3" : undefined}
            />
            {n.lines.map((l, i) => (
              <text key={i} x={n.x + n.w / 2} y={n.y + PAD + 9 + i * LINE} textAnchor="middle" fontWeight={i === 0 ? 700 : 400}>
                {l}
              </text>
            ))}
          </g>
        ))}
      </svg>
      {nodes.some((n) => n.external) && <figcaption className="shot-caption">Dashed boxes are outside services.</figcaption>}
    </figure>
  );
}

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

export function ErpDiagram() {
  return (
    <Diagram
      title="FullBagERP architecture: school staff use a Next.js web app on their school's subdomain; the driver app and a third-party GPS tracker feed also report to an Express API, which uses a central database to find each school's own PostgreSQL database, Redis with BullMQ workers for SMS and email, and S3 for files. GitHub Actions builds Docker images and deploys them with Docker Compose."
      nodes={[
        { id: "web", x: 0, y: 0, w: 112, lines: ["Next.js web app", "school subdomain"] },
        { id: "driver", x: 124, y: 0, w: 112, lines: ["Driver app", "Android"] },
        { id: "vts", x: 248, y: 0, w: 112, lines: ["GPS tracker feed", "WebSocket"], external: true },
        { id: "api", x: 0, y: 84, w: 360, lines: ["Express API (Node.js)", "x-tenant-id picks the school, permissions per role"] },
        { id: "central", x: 0, y: 168, w: 84, lines: ["Central DB", "registry"] },
        { id: "school", x: 92, y: 168, w: 84, lines: ["PostgreSQL", "per school"] },
        { id: "redis", x: 184, y: 168, w: 84, lines: ["Redis", "BullMQ jobs"] },
        { id: "s3", x: 276, y: 168, w: 84, lines: ["AWS S3", "files"], external: true },
        { id: "workers", x: 154, y: 252, w: 144, lines: ["Workers", "SMS, email, provisioning"] },
      ]}
      edges={[
        ["web", "api"],
        ["driver", "api"],
        ["vts", "api"],
        ["api", "central"],
        ["api", "school"],
        ["api", "redis"],
        ["api", "s3"],
        ["redis", "workers"],
      ]}
    />
  );
}

export function AccountingDiagram() {
  return (
    <Diagram
      title="FullBagAccounting architecture: a React app served by nginx calls an Express API in TypeScript, which uses a central database to find each company's own PostgreSQL database through Prisma, and reads exchange rates from Nepal Rastra Bank's public API."
      nodes={[
        { id: "web", x: 70, y: 0, w: 220, lines: ["React app (Vite)", "served by nginx"] },
        { id: "api", x: 0, y: 84, w: 360, lines: ["Express API (TypeScript)", "Prisma, decimal.js for money"] },
        { id: "central", x: 0, y: 168, w: 112, lines: ["Central DB", "companies"] },
        { id: "books", x: 124, y: 168, w: 112, lines: ["PostgreSQL", "one DB per company"] },
        { id: "nrb", x: 248, y: 168, w: 112, lines: ["Nepal Rastra Bank", "forex API"], external: true },
      ]}
      edges={[
        ["web", "api"],
        ["api", "central"],
        ["api", "books"],
        ["api", "nrb"],
      ]}
    />
  );
}

export function TransportDiagram() {
  return (
    <Diagram
      title="FullBag transport app architecture: on the driver's phone, a GPS fix every 30 seconds goes into a SQLite outbox, and an uploader sends batches of up to 200 to the FullBagERP API, which checks the driver's roster and permission and stores positions in the school's PostgreSQL database. The admin map shows every bus; the parents' map shows only their child's bus."
      groups={[{ x: 0, y: 0, w: 360, h: 112, label: "Driver's phone" }]}
      nodes={[
        { id: "gps", x: 10, y: 28, w: 104, lines: ["GPS fix", "every 30 s"] },
        { id: "queue", x: 128, y: 28, w: 104, lines: ["SQLite", "outbox"] },
        { id: "up", x: 246, y: 28, w: 104, lines: ["Uploader", "batches ≤ 200"] },
        { id: "api", x: 0, y: 150, w: 360, lines: ["FullBagERP API", "checks roster and permission, skips duplicates"] },
        { id: "db", x: 90, y: 234, w: 180, lines: ["PostgreSQL", "the school's database"] },
        { id: "admin", x: 0, y: 318, w: 170, lines: ["Admin map", "every bus"] },
        { id: "parent", x: 190, y: 318, w: 170, lines: ["Parents' map", "their child's bus only"] },
      ]}
      edges={[
        ["gps", "queue"],
        ["queue", "up"],
        ["up", "api"],
        ["api", "db"],
        ["db", "admin"],
        ["db", "parent"],
      ]}
    />
  );
}
