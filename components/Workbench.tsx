"use client";

// Three small working demos of real mechanisms from Suman's products (see FACTS.md).
// All names and amounts are made up. Nothing moves until the visitor does something.

import { useEffect, useRef, useState } from "react";

const TABS = [
  { id: "erp", product: "FullBagERP", task: "Attendance" },
  { id: "acc", product: "FullBagAccounting", task: "Vouchers" },
  { id: "app", product: "Transport app", task: "Offline queue" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function Workbench() {
  const [tab, setTab] = useState<TabId>("erp");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    const next = (i + step + TABS.length) % TABS.length;
    setTab(TABS[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="bench">
      <div className="bench-bar" role="tablist" aria-label="Try a feature">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="bench-product">{t.product}</span>
            <span className="bench-task">{t.task}</span>
          </button>
        ))}
      </div>
      <div className="bench-body" role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`}>
        {tab === "erp" && <AttendanceDemo />}
        {tab === "acc" && <VoucherDemo />}
        {tab === "app" && <OfflineQueueDemo />}
      </div>
    </div>
  );
}

/* FullBagERP: marking a student absent queues an SMS to the parent; a worker sends it. */

const STUDENTS = ["Aarav Shrestha", "Sita Gurung", "Kiran Thapa", "Maya Rai", "Bikash Tamang"];
type Job = { id: number; student: string; status: "queued" | "sending" | "sent" };

function AttendanceDemo() {
  const [absent, setAbsent] = useState<Set<string>>(new Set());
  const [jobs, setJobs] = useState<Job[]>([]);
  const nextId = useRef(1);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const setStatus = (id: number, status: Job["status"]) =>
    setJobs((js) => js.map((j) => (j.id === id ? { ...j, status } : j)));

  const toggle = (name: string) => {
    const isAbsent = absent.has(name);
    setAbsent((s) => {
      const n = new Set(s);
      if (isAbsent) n.delete(name);
      else n.add(name);
      return n;
    });
    if (isAbsent) return;
    const id = nextId.current++;
    setJobs((js) => [{ id, student: name, status: "queued" as const }, ...js].slice(0, 4));
    timers.current.push(setTimeout(() => setStatus(id, "sending"), 700));
    timers.current.push(setTimeout(() => setStatus(id, "sent"), 1600));
  };

  return (
    <div className="demo">
      <p className="demo-head">
        <strong>Class 7 B</strong>
        <span>Morning roll call</span>
      </p>
      <ul className="roll">
        {STUDENTS.map((s) => {
          const off = absent.has(s);
          return (
            <li key={s}>
              <span>{s}</span>
              <button
                type="button"
                className={off ? "mark absent" : "mark"}
                aria-pressed={off}
                onClick={() => toggle(s)}
              >
                {off ? "Absent" : "Present"}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="queue" aria-live="polite">
        <p className="queue-title">SMS queue</p>
        {jobs.length === 0 ? (
          <p className="queue-empty">Mark a student absent to notify their parent.</p>
        ) : (
          <ul>
            {jobs.map((j) => (
              <li key={j.id}>
                <span>SMS to {j.student.split(" ")[0]}&apos;s parent</span>
                <span className={`state ${j.status}`}>{j.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* FullBagAccounting: numbers per voucher type and Nepali financial year, never repeated. */

const TYPES = [
  { code: "PV", name: "Payment" },
  { code: "RV", name: "Receipt" },
  { code: "JV", name: "Journal" },
];
const NARRATIONS = ["Office rent, Kartik", "Stationery", "Fee collection", "Internet bill", "Fuel", "Supplier payment"];
const AMOUNTS = [12500, 3450, 86000, 2200, 7800, 41250];
type Row = { no: string; narration: string; amount: number; together?: boolean };

const fy = "2083/084";
const voucherNo = (type: string, seq: number) => `${type}-${fy}-${String(seq).padStart(4, "0")}`;
const rupees = (n: number) => `Rs ${n.toLocaleString("en-IN")}.00`;

function VoucherDemo() {
  const [type, setType] = useState("PV");
  const [seq, setSeq] = useState<Record<string, number>>({ PV: 0, RV: 0, JV: 0 });
  const [rows, setRows] = useState<Row[]>([]);
  const count = useRef(0);

  const make = (n: number, together = false) => {
    const start = seq[type];
    const fresh: Row[] = Array.from({ length: n }, (_, i) => {
      const k = count.current++;
      return {
        no: voucherNo(type, start + i + 1),
        narration: NARRATIONS[k % NARRATIONS.length],
        amount: AMOUNTS[k % AMOUNTS.length],
        together,
      };
    });
    setSeq((s) => ({ ...s, [type]: start + n }));
    setRows((r) => [...fresh.reverse(), ...r].slice(0, 5));
  };

  return (
    <div className="demo">
      <p className="demo-head">
        <strong>New voucher</strong>
        <span>Financial year {fy}</span>
      </p>
      <div className="seg" role="radiogroup" aria-label="Voucher type">
        {TYPES.map((t) => (
          <button key={t.code} type="button" role="radio" aria-checked={type === t.code} onClick={() => setType(t.code)}>
            {t.name} <span>{t.code}</span>
          </button>
        ))}
      </div>
      <p className="next-no">
        Next number <strong>{voucherNo(type, seq[type] + 1)}</strong>
      </p>
      <div className="demo-actions">
        <button type="button" className="go" onClick={() => make(1)}>
          Save voucher
        </button>
        <button type="button" className="ghost" onClick={() => make(2, true)}>
          Two people save at once
        </button>
      </div>
      <div className="register" aria-live="polite">
        {rows.length === 0 ? (
          <p className="queue-empty">Saved vouchers appear here.</p>
        ) : (
          <table>
            <tbody>
              {rows.map((r) => (
                <tr key={r.no} className={r.together ? "together" : undefined}>
                  <td className="num">{r.no}</td>
                  <td>{r.narration}</td>
                  <td className="amt">{rupees(r.amount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {rows.some((r) => r.together) && <p className="legend">Marked rows were saved at the same moment and still got different numbers.</p>}
      </div>
    </div>
  );
}

/* Transport app: positions go to an on-phone outbox first, then upload in batches. */

const ROUTE: [number, number][] = [
  [24, 168], [52, 160], [80, 150], [100, 128], [112, 104], [138, 96], [166, 92], [190, 78], [204, 56],
  [228, 46], [254, 50], [276, 40],
];

type Ping = { i: number; sent: boolean };

function OfflineQueueDemo() {
  const [driving, setDriving] = useState(false);
  const [online, setOnline] = useState(true);
  const [step, setStep] = useState(0);
  const [pings, setPings] = useState<Ping[]>([]);
  const [note, setNote] = useState("Start a drive. Then turn the signal off for a few seconds.");
  const onlineRef = useRef(online);
  const stepRef = useRef(0);
  const pingsRef = useRef<Ping[]>([]);
  useEffect(() => {
    onlineRef.current = online;
  }, [online]);

  // One tick = one GPS fix (every 30 s in the real app, sped up here).
  useEffect(() => {
    if (!driving) return;
    const t = setInterval(() => {
      const i = (stepRef.current + 1) % ROUTE.length;
      const base = i === 0 ? [] : pingsRef.current;
      const waiting = base.filter((p) => !p.sent).length;
      let next: Ping[];
      if (onlineRef.current) {
        next = [...base.map((p) => ({ ...p, sent: true })), { i, sent: true }];
        setNote(waiting > 0 ? `Signal back. Uploaded ${waiting + 1} positions in one batch.` : "Position sent to FullBagERP.");
      } else {
        next = [...base, { i, sent: false }];
        setNote(`No signal. ${waiting + 1} position${waiting ? "s" : ""} waiting in the outbox.`);
      }
      stepRef.current = i;
      pingsRef.current = next;
      setStep(i);
      setPings(next);
    }, 1100);
    return () => clearInterval(t);
  }, [driving]);

  const waiting = pings.filter((p) => !p.sent).length;
  const [bx, by] = ROUTE[step];

  return (
    <div className="demo app-demo">
      <div className="phone" aria-hidden="true">
        <svg viewBox="0 0 300 200">
          <rect width="300" height="200" fill="#eceae7" />
          <path d="M0 120H300M0 60H300M70 0V200M160 0V200M240 0V200" stroke="#fff" strokeWidth="9" />
          <polyline points={ROUTE.map((p) => p.join(",")).join(" ")} fill="none" stroke="#a8a29e" strokeWidth="3" strokeDasharray="2 5" strokeLinecap="round" />
          {pings.map((p) => (
            <circle
              key={p.i}
              cx={ROUTE[p.i][0]}
              cy={ROUTE[p.i][1]}
              r="4.5"
              fill={p.sent ? "#16a34a" : "#fff"}
              stroke={p.sent ? "#15803d" : "#57534e"}
              strokeWidth="2"
            />
          ))}
          <circle cx={bx} cy={by} r="8" fill="#1c1917" className="bus-dot" />
        </svg>
        <p className={online ? "signal on" : "signal off"}>{online ? "Online" : "No signal"}</p>
      </div>
      <div className="app-side">
        <div className="demo-actions">
          <button type="button" className={driving ? "ghost" : "go"} onClick={() => setDriving((d) => !d)}>
            {driving ? "Stop drive" : "Start drive"}
          </button>
          <button type="button" className="switch" role="switch" aria-checked={online} onClick={() => setOnline((o) => !o)}>
            <span className="knob" aria-hidden="true" />
            Signal
          </button>
        </div>
        <dl className="outbox">
          <div>
            <dt>Outbox</dt>
            <dd>{waiting}</dd>
          </div>
          <div>
            <dt>Sent</dt>
            <dd>{pings.length - waiting}</dd>
          </div>
        </dl>
        <p className="app-note" aria-live="polite">
          {note}
        </p>
      </div>
    </div>
  );
}
