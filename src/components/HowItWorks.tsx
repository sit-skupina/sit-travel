import React from "react";
import { Check, Mail, Phone } from "lucide-react";
import { home as homeContent } from "@/content/home";
import { useLocale } from "@/lib/i18n";
import { useOnScreen, useTilt } from "@/lib/interactions";
import photoHandshake from "@/assets/o-firme.webp";
import photoGlacier from "@/assets/hero-bg.webp";
import photoEvent from "@/assets/hero-bg-2.webp";

// Interaktivní sekce „Tři kroky od nápadu k akci“.
// Kroky se samy střídají (každý ~7 s), ale jen dokud je sekce vidět a uživatel se
// jí neúčastní (hover nad kroky, tažení chipu). Na kroky jde kdykoli kliknout.
// Fotka se odhaluje kruhem, chipy naskakují a jdou tahat myší, scéna se naklání za kurzorem.

const PHOTOS = [photoHandshake, photoGlacier, photoEvent];

type ChipKind = "mail" | "phone" | "field" | "check";
interface ChipSpec {
  kind: ChipKind;
  /** Pozice v procentech scény. */
  pos: React.CSSProperties;
}

const CHIP_LAYOUT: ChipSpec[][] = [
  [
    { kind: "mail", pos: { top: "9%", left: "6%" } },
    { kind: "phone", pos: { top: "22%", right: "6%" } },
    { kind: "field", pos: { top: "50%", left: "5%" } },
    { kind: "field", pos: { top: "64%", right: "8%" } },
    { kind: "field", pos: { bottom: "8%", left: "16%" } },
  ],
  [
    { kind: "check", pos: { top: "10%", left: "7%" } },
    { kind: "check", pos: { top: "18%", right: "7%" } },
    { kind: "check", pos: { bottom: "10%", left: "12%" } },
  ],
  [
    { kind: "check", pos: { top: "10%", left: "6%" } },
    { kind: "check", pos: { top: "20%", right: "6%" } },
    { kind: "check", pos: { bottom: "22%", left: "8%" } },
    { kind: "check", pos: { bottom: "9%", right: "10%" } },
  ],
];

/** Plovoucí „UI“ chip, který jde chytit myší a po puštění se pružně vrátí. */
function Chip({ spec, label, index }: { spec: ChipSpec; label: string; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const start = React.useRef<{ x: number; y: number } | null>(null);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY };
    ref.current?.classList.add("is-dragging");
  };
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!start.current || !ref.current) return;
    ref.current.style.setProperty("--dx", `${e.clientX - start.current.x}px`);
    ref.current.style.setProperty("--dy", `${e.clientY - start.current.y}px`);
  };
  const onUp = () => {
    if (!start.current || !ref.current) return;
    start.current = null;
    ref.current.classList.remove("is-dragging");
    ref.current.style.setProperty("--dx", "0px");
    ref.current.style.setProperty("--dy", "0px");
  };

  let body: React.ReactNode;
  if (spec.kind === "mail") {
    body = (
      <>
        <span className="hw-chip-icon">
          <Mail size={14} aria-hidden="true" />
        </span>
        <span className="hw-chip-text">
          {label}
          <i className="hw-caret" aria-hidden="true" />
        </span>
      </>
    );
  } else if (spec.kind === "phone") {
    body = (
      <>
        <span className="hw-chip-icon">
          <Phone size={14} aria-hidden="true" />
        </span>
        <span className="hw-chip-text">{label}</span>
      </>
    );
  } else if (spec.kind === "field") {
    const [k, ...rest] = label.split(": ");
    body = (
      <span className="hw-chip-field">
        <span className="hw-chip-key">{k}</span>
        <span className="hw-chip-text">{rest.join(": ")}</span>
      </span>
    );
  } else {
    body = (
      <>
        <span className="hw-chip-tick">
          <Check size={13} strokeWidth={3} aria-hidden="true" />
        </span>
        <span className="hw-chip-text">{label}</span>
      </>
    );
  }

  return (
    <div
      ref={ref}
      className={`hw-chip hw-chip--${spec.kind}`}
      style={{ ...spec.pos, ["--i" as string]: index }}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
    >
      <div className="hw-chip-inner">{body}</div>
    </div>
  );
}

function Scene({
  index,
  revealed,
  current,
  chips,
  ring,
}: {
  index: number;
  revealed: boolean;
  current: boolean;
  chips: string[];
  ring: string;
}) {
  return (
    <div
      className={`hw-scene${revealed ? " is-revealed" : ""}${current ? " is-current" : ""}`}
      style={{ zIndex: index + 1 }}
      aria-hidden="true"
    >
      <img src={PHOTOS[index]} alt="" className="hw-photo" loading="lazy" draggable={false} />
      <div className="hw-shade" />
      <div className="hw-layer">
        {index === 1 && (
          <div className="hw-ring">
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle className="hw-ring-track" cx="60" cy="60" r="54" />
              <circle className="hw-ring-fill" cx="60" cy="60" r="54" />
            </svg>
            <span className="hw-ring-label">{ring}</span>
          </div>
        )}
        {chips.map((label, i) => (
          <Chip key={label} spec={CHIP_LAYOUT[index][i]} label={label} index={i} />
        ))}
      </div>
    </div>
  );
}

/** Tlačítko, které se přitahuje ke kurzoru. */
function MagneticLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = React.useRef<HTMLAnchorElement>(null);
  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.28;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.4;
    el.style.translate = `${x}px ${y}px`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.translate = "0 0";
  };
  return (
    <a ref={ref} href={href} className="hw-cta" onPointerMove={onMove} onPointerLeave={onLeave}>
      <span>{children}</span>
      <span className="hw-cta-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export function HowItWorks() {
  const locale = useLocale();
  const c = homeContent[locale].how;
  const count = c.steps.length;
  const { ref: sectionRef, onScreen } = useOnScreen<HTMLElement>();
  const [active, setActive] = React.useState(0);
  const [hovering, setHovering] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const tilt = useTilt();

  const paused = !onScreen || hovering || dragging;

  return (
    <section
      id="jak-to-funguje"
      className="hw-section"
      ref={sectionRef}
      style={{ ["--p" as string]: (active + 1) / count }}
    >
      <div className="hw-grid">
        <div className="hw-left">
          <h2 className="hw-h2 font-serif">{c.heading}</h2>
          <p className="hw-sub">{c.sub}</p>

          <ol
            className="hw-steps"
            aria-label={c.stepsLabel}
            onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
            onPointerLeave={() => setHovering(false)}
          >
            {c.steps.map((s, i) => (
              <li key={s.num} className={`hw-step${i === active ? " is-active" : ""}`}>
                <button
                  type="button"
                  className="hw-step-btn"
                  onClick={() => setActive(i)}
                  aria-current={i === active ? "step" : undefined}
                  aria-label={`${c.goTo} ${s.num}`}
                >
                  <span className={`hw-num${i === active ? " is-active" : ""}`}>{s.num}</span>
                  <span className="hw-title font-serif">{s.title}</span>
                </button>
                <div className="hw-desc-wrap">
                  <div className="hw-desc-inner">
                    <p className="hw-desc">{s.desc}</p>
                    {i === active && (
                      <span
                        key={active}
                        className={`hw-timer${paused ? " is-paused" : ""}`}
                        aria-hidden="true"
                        onAnimationEnd={() => setActive((a) => (a + 1) % count)}
                      />
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <MagneticLink href="#kontakt">{c.cta}</MagneticLink>
        </div>

        <div
          className="hw-stage"
          data-step={active}
          ref={tilt.ref}
          onPointerMove={tilt.onMove}
          onPointerLeave={tilt.onLeave}
          onPointerDown={() => setDragging(true)}
          onPointerUp={() => setDragging(false)}
          onPointerCancel={() => setDragging(false)}
        >
          {c.steps.map((s, i) => (
            <Scene
              key={s.num}
              index={i}
              revealed={i <= active}
              current={i === active}
              chips={s.chips}
              ring={c.ring}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
