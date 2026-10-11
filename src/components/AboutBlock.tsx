import React from "react";
import { Plane, ShieldCheck } from "lucide-react";
import { home as homeContent } from "@/content/home";
import { useLocale } from "@/lib/i18n";
import {
  clamp,
  prefersReducedMotion,
  useCountUp,
  useDrag,
  useSeenOnce,
  useTilt,
} from "@/lib/interactions";
// Fotka: Amari Shutters (Unsplash, volná licence, https://unsplash.com/photos/9h8Nhj8fy_E)
import oFirme from "@/assets/o-firme-handshake.webp";

// „O společnosti“ — živá varianta: číslo 35 se dopočítá, klíčová věta se zvýrazní,
// fotka se naklání za kurzorem a „stárne“ podle časové osy (1991 → 1995 → dnes),
// odznaky IATA / ACK ČR jsou plovoucí chipy, které jde chytit myší.

function DragBadge({
  className,
  children,
  index,
}: {
  className: string;
  children: React.ReactNode;
  index: number;
}) {
  const { ref, handlers } = useDrag<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`ab-badge ${className}`}
      style={{ ["--i" as string]: index }}
      {...handlers}
    >
      <div className="ab-badge-inner">{children}</div>
    </div>
  );
}

export function AboutBlock() {
  const locale = useLocale();
  const c = homeContent[locale].about;
  const { ref: rootRef, seen } = useSeenOnce<HTMLDivElement>(0.3);
  const tilt = useTilt<HTMLDivElement>();

  // Nadpis: úvodní číslo se dopočítá (35 let. Jedno pravidlo.)
  const headingMatch = c.heading.match(/^(\d+)(.*)$/);
  const years = useCountUp(headingMatch ? Number(headingMatch[1]) : 0, seen);

  // Klíčová věta ve druhém odstavci
  const [before, after] = c.p2.split(c.mark);

  // Časová osa — při prvním zobrazení se sama „přehraje“, pak ji ovládá návštěvník
  const last = c.timeline.length - 1;
  const [m, setM] = React.useState(0);
  const interacted = React.useRef(false);
  React.useEffect(() => {
    if (!seen) return;
    if (prefersReducedMotion()) {
      setM(last);
      return;
    }
    const timers = c.timeline.map((_, i) =>
      window.setTimeout(
        () => {
          if (!interacted.current) setM(i);
        },
        500 + i * 1100,
      ),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [seen, last, c.timeline]);

  const choose = (i: number) => {
    interacted.current = true;
    setM(clamp(i, 0, last));
  };

  const trackRef = React.useRef<HTMLDivElement>(null);
  const scrubbing = React.useRef(false);
  const scrubTo = (clientX: number) => {
    const r = trackRef.current?.getBoundingClientRect();
    if (!r) return;
    choose(Math.round(clamp((clientX - r.left) / r.width, 0, 1) * last));
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      choose(m + 1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      choose(m - 1);
    }
  };

  return (
    <div className={`ab${seen ? " is-in" : ""}`} ref={rootRef}>
      <div className="ab-text">
        <span className="about-eyebrow">{c.eyebrow}</span>
        <h2 className="ab-heading font-serif" aria-label={c.heading}>
          {headingMatch ? (
            <>
              <span className="ab-count" aria-hidden="true">
                {years}
              </span>
              <span aria-hidden="true">{headingMatch[2]}</span>
            </>
          ) : (
            c.heading
          )}
        </h2>
        <p className="ab-body">{c.p1}</p>
        <p className="ab-body">
          {before}
          <mark className="ab-mark">{c.mark}</mark>
          {after}
        </p>

        <div className="ab-scrub" role="group" aria-label={c.timelineLabel}>
          <div
            className="ab-track"
            ref={trackRef}
            style={{ ["--m" as string]: m / last }}
            onPointerDown={(e) => {
              scrubbing.current = true;
              e.currentTarget.setPointerCapture(e.pointerId);
              scrubTo(e.clientX);
            }}
            onPointerMove={(e) => scrubbing.current && scrubTo(e.clientX)}
            onPointerUp={() => (scrubbing.current = false)}
            onPointerCancel={() => (scrubbing.current = false)}
          >
            <div className="ab-track-line" />
            <div className="ab-track-fill" />
            {c.timeline.map((t, i) => (
              <button
                key={t.year}
                type="button"
                className={`ab-stop${i <= m ? " is-passed" : ""}${i === m ? " is-current" : ""}`}
                style={{ left: `${(i / last) * 100}%` }}
                onClick={() => choose(i)}
                onKeyDown={onKey}
                aria-pressed={i === m}
                aria-label={`${t.year}: ${t.label}`}
              >
                <span className="ab-stop-dot" />
                <span className="ab-stop-year">{t.year}</span>
              </button>
            ))}
            <div className="ab-thumb" aria-hidden="true" />
          </div>
          <p className="ab-caption" key={m} aria-live="polite">
            {c.timeline[m].label}
          </p>
        </div>
      </div>

      <div
        className="ab-stage"
        ref={tilt.ref}
        data-m={m}
        onPointerMove={tilt.onMove}
        onPointerLeave={tilt.onLeave}
      >
        <div className="ab-photo-wrap">
          <img
            src={oFirme}
            alt={c.imageAlt}
            className="ab-photo"
            loading="lazy"
            draggable={false}
          />
          <div className="ab-photo-tint" aria-hidden="true" />
        </div>

        <div className="ab-stamp" aria-hidden="true">
          <svg viewBox="0 0 120 120" className="ab-stamp-ring">
            <defs>
              <path id="ab-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
            </defs>
            <text>
              <textPath href="#ab-circle" startOffset="0" textLength="285">
                {c.stamp}
              </textPath>
            </text>
          </svg>
          <Plane className="ab-stamp-plane" size={22} />
        </div>

        <DragBadge className="ab-badge--iata" index={0}>
          <span className="ab-badge-icon">
            <Plane size={15} aria-hidden="true" />
          </span>
          {c.badges[0]}
        </DragBadge>
        <DragBadge className="ab-badge--ack" index={1}>
          <span className="ab-badge-icon">
            <ShieldCheck size={15} aria-hidden="true" />
          </span>
          {c.badges[1]}
        </DragBadge>
      </div>
    </div>
  );
}
