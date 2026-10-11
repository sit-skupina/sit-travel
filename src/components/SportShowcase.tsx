import React from "react";
import { Check, MapPin, X } from "lucide-react";
import { sport as sportContent, SPORT_IDS, type SportId } from "@/content/sport";
import { useLocale } from "@/lib/i18n";
import { useDrag, useOnScreen, useTilt } from "@/lib/interactions";

import nbaMain from "@/assets/sport/nba-main.webp";
import nhlMain from "@/assets/sport/nhl-main.webp";
import nflMain from "@/assets/sluzby-bentogrid/sport-travel.webp";
import nascarMain from "@/assets/sport/nascar-main.webp";
import tenisMain from "@/assets/sport/tenis-main.webp";
import maratonMain from "@/assets/sport/maraton-main.webp";

import pNba1 from "@/assets/sport/p-nba-1.webp";
import pNba2 from "@/assets/sport/p-nba-2.webp";
import pNba3 from "@/assets/sport/p-nba-3.webp";
import pNhl1 from "@/assets/sport/p-nhl-1.webp";
import pNhl2 from "@/assets/sport/p-nhl-2.webp";
import pNhl3 from "@/assets/sport/p-nhl-3.webp";
import pNfl1 from "@/assets/sport/p-nfl-1.webp";
import pNfl2 from "@/assets/sport/p-nfl-2.webp";
import pNfl3 from "@/assets/sport/p-nfl-3.webp";
import pNascar1 from "@/assets/sport/p-nascar-1.webp";
import pNascar2 from "@/assets/sport/p-nascar-2.webp";
import pNascar3 from "@/assets/sport/p-nascar-3.webp";
import pTenis1 from "@/assets/sport/p-tenis-1.webp";
import pTenis2 from "@/assets/sport/p-tenis-2.webp";
import pTenis3 from "@/assets/sport/p-tenis-3.webp";
import pMaraton1 from "@/assets/sport/p-maraton-1.webp";
import pMaraton2 from "@/assets/sport/p-maraton-2.webp";

import gEverglades from "@/assets/sport/g-everglades.webp";
import gSeaworld from "@/assets/sport/g-seaworld.webp";
import gSeattle from "@/assets/sport/g-seattle.webp";
import gMarket from "@/assets/sport/g-market.webp";
import gSfo from "@/assets/sport/g-sfo.webp";
import gEmpire from "@/assets/sport/g-empire.webp";
import gBeach from "@/assets/sport/g-beach.webp";
import gWheel from "@/assets/sport/g-wheel.webp";
import gGstaad from "@/assets/sport/g-gstaad.webp";
import gBoston from "@/assets/sport/g-boston.webp";

// Fotky: hlavní záběry NBA / NASCAR / maraton jsou z Unsplash (volná licence;
// With Paul, Tim Trad, Henry Ren), NHL a tenis ze starého webu Sport Travel,
// „polaroidy“ a galerie jsou autentické fotky z cest SIT Travel.
const MAIN: Record<SportId, { src: string; pos: string }> = {
  nba: { src: nbaMain, pos: "50% 34%" },
  nhl: { src: nhlMain, pos: "50% 55%" },
  nfl: { src: nflMain, pos: "50% 50%" },
  nascar: { src: nascarMain, pos: "40% 50%" },
  tenis: { src: tenisMain, pos: "50% 60%" },
  maraton: { src: maratonMain, pos: "35% 50%" },
};
const POLAROIDS: Record<SportId, string[]> = {
  nba: [pNba1, pNba2, pNba3],
  nhl: [pNhl1, pNhl2, pNhl3],
  nfl: [pNfl1, pNfl2, pNfl3],
  nascar: [pNascar1, pNascar2, pNascar3],
  tenis: [pTenis1, pTenis2, pTenis3],
  maraton: [pMaraton1, pMaraton2],
};
const GALLERY = [
  gEverglades,
  gSeaworld,
  gSeattle,
  gMarket,
  gSfo,
  gEmpire,
  gBeach,
  gWheel,
  gGstaad,
  gBoston,
];

// Pozice polaroidů a chipů na scéně (procenta)
const POLAROID_POS: React.CSSProperties[] = [
  { left: "-4%", bottom: "10%", ["--r" as string]: "-7deg" },
  { right: "-5%", bottom: "26%", ["--r" as string]: "5deg" },
  { left: "30%", bottom: "-5%", ["--r" as string]: "-2.5deg" },
];
const CHIP_POS: React.CSSProperties[] = [
  { top: "7%", left: "6%" },
  { top: "14%", right: "5%" },
  { top: "28%", left: "4%" },
  { top: "36%", right: "7%" },
  { top: "46%", left: "7%" },
  { top: "52%", right: "4%" },
];

function Polaroid({
  src,
  style,
  index,
}: {
  src: string;
  style: React.CSSProperties;
  index: number;
}) {
  const { ref, handlers } = useDrag<HTMLDivElement>();
  return (
    <div ref={ref} className="stv-pol" style={{ ...style, ["--i" as string]: index }} {...handlers}>
      <div className="stv-pol-inner">
        <img src={src} alt="" loading="lazy" draggable={false} />
      </div>
    </div>
  );
}

function PlaceChip({
  label,
  style,
  index,
}: {
  label: string;
  style: React.CSSProperties;
  index: number;
}) {
  const { ref, handlers } = useDrag<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="stv-chip"
      style={{ ...style, ["--i" as string]: index }}
      {...handlers}
    >
      <div className="stv-chip-inner">
        <MapPin size={14} aria-hidden="true" />
        {label}
      </div>
    </div>
  );
}

function Scene({
  id,
  index,
  revealed,
  current,
  places,
  name,
}: {
  id: SportId;
  index: number;
  revealed: boolean;
  current: boolean;
  places: string[];
  name: string;
}) {
  const main = MAIN[id];
  return (
    <div
      className={`stv-scene${revealed ? " is-revealed" : ""}${current ? " is-current" : ""}`}
      style={{ zIndex: index + 1 }}
    >
      <div className="stv-photo-wrap">
        <img
          src={main.src}
          alt={current ? name : ""}
          className="stv-photo"
          style={{ objectPosition: main.pos }}
          loading={index === 0 ? "eager" : "lazy"}
          draggable={false}
        />
        <div className="stv-shade" aria-hidden="true" />
      </div>
      <div className="stv-layer">
        {places.slice(0, 6).map((p, i) => (
          <PlaceChip key={p} label={p} style={CHIP_POS[i]} index={i} />
        ))}
        {POLAROIDS[id].map((src, i) => (
          <Polaroid key={src} src={src} style={POLAROID_POS[i]} index={i + places.length} />
        ))}
      </div>
    </div>
  );
}

export function SportShowcase() {
  const locale = useLocale();
  const c = sportContent[locale];
  const count = SPORT_IDS.length;
  const { ref: rootRef, onScreen } = useOnScreen<HTMLDivElement>(0.3);
  const [active, setActive] = React.useState(0);
  const [hovering, setHovering] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);
  const tilt = useTilt<HTMLDivElement>();
  const paused = !onScreen || hovering || dragging;
  const current = SPORT_IDS[active];
  const t = c.sports[current];

  const [tab, setTab] = React.useState<"in" | "out">("in");

  // Galerie — tažení myší
  const stripRef = React.useRef<HTMLDivElement>(null);
  const strip = React.useRef<{ x: number; left: number } | null>(null);

  return (
    <>
      {/* ── Výběr sportu ─────────────────────────────────────────────── */}
      <section className="stv" ref={rootRef}>
        <div className="stv-inner">
          <div className="stv-head">
            <span className="stv-eyebrow">{c.eyebrow}</span>
            <h2 className="stv-h2 font-serif">{c.heading}</h2>
            <p className="stv-sub">{c.sub}</p>
          </div>

          <div className="stv-grid">
            <ol
              className="stv-list"
              aria-label={c.selectLabel}
              onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
              onPointerLeave={() => setHovering(false)}
            >
              {SPORT_IDS.map((id, i) => {
                const s = c.sports[id];
                const isActive = i === active;
                return (
                  <li key={id} className={`stv-item${isActive ? " is-active" : ""}`}>
                    <button
                      type="button"
                      className="stv-item-btn"
                      onClick={() => setActive(i)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="stv-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="stv-item-text">
                        <span className="stv-name font-serif">{s.name}</span>
                        <span className="stv-tag">{s.tag}</span>
                      </span>
                    </button>
                    {isActive && (
                      <span
                        key={active}
                        className={`stv-timer${paused ? " is-paused" : ""}`}
                        aria-hidden="true"
                        onAnimationEnd={() => setActive((a) => (a + 1) % count)}
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            <div
              className="stv-stage"
              data-step={active}
              ref={tilt.ref}
              onPointerMove={tilt.onMove}
              onPointerLeave={tilt.onLeave}
              onPointerDown={() => setDragging(true)}
              onPointerUp={() => setDragging(false)}
              onPointerCancel={() => setDragging(false)}
            >
              {SPORT_IDS.map((id, i) => (
                <Scene
                  key={id}
                  id={id}
                  index={i}
                  revealed={i <= active}
                  current={i === active}
                  places={c.sports[id].places}
                  name={c.sports[id].name}
                />
              ))}
            </div>
          </div>

          {/* Detail vybraného sportu */}
          <div className="stv-detail" key={current} aria-live="polite">
            <div className="stv-detail-main">
              <h3 className="stv-detail-name font-serif">{t.name}</h3>
              <p className="stv-detail-text">{t.text}</p>
              <p className="stv-detail-label">{c.placesLabel}</p>
              <ul className="stv-places">
                {t.places.map((p, i) => (
                  <li key={p} style={{ ["--i" as string]: i }}>
                    {p}
                  </li>
                ))}
              </ul>
              {current === "maraton" && (
                <a className="stv-ext" href={c.marathonLink.href} target="_blank" rel="noreferrer">
                  {c.marathonLink.label}
                </a>
              )}
            </div>
            <div className="stv-detail-prog">
              <p className="stv-detail-label">{t.programTitle}</p>
              <ol className="stv-prog">
                {t.program.map((d, i) => (
                  <li key={d} style={{ ["--i" as string]: i }}>
                    <span className="stv-prog-dot">{i + 1}</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Co zahrnuje cesta ────────────────────────────────────────── */}
      <section className="stv-incl">
        <div className="stv-incl-inner">
          <div>
            <h2 className="stv-h2 font-serif">{c.incl.heading}</h2>
            <p className="stv-sub">{c.incl.sub}</p>
            <div className="stv-seg" role="tablist">
              <span
                className={`stv-seg-thumb${tab === "out" ? " is-out" : ""}`}
                aria-hidden="true"
              />
              <button
                type="button"
                role="tab"
                aria-selected={tab === "in"}
                className={tab === "in" ? "is-active" : ""}
                onClick={() => setTab("in")}
              >
                {c.incl.tabIn}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={tab === "out"}
                className={tab === "out" ? "is-active" : ""}
                onClick={() => setTab("out")}
              >
                {c.incl.tabOut}
              </button>
            </div>
            <p className="stv-incl-note">{c.incl.note}</p>
          </div>
          <ul className="stv-incl-list" key={tab}>
            {(tab === "in" ? c.incl.included : c.incl.excluded).map((item, i) => (
              <li key={item} style={{ ["--i" as string]: i }}>
                <span className={`stv-incl-mark${tab === "out" ? " is-out" : ""}`}>
                  {tab === "in" ? (
                    <Check size={14} strokeWidth={3} />
                  ) : (
                    <X size={14} strokeWidth={3} />
                  )}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Galerie z cest ───────────────────────────────────────────── */}
      <section className="stv-gal">
        <div className="stv-gal-head">
          <h2 className="stv-h2 font-serif">{c.gallery.heading}</h2>
          <p className="stv-sub">{c.gallery.sub}</p>
        </div>
        <div
          className="stv-strip"
          ref={stripRef}
          onPointerDown={(e) => {
            if (e.pointerType !== "mouse") return;
            strip.current = { x: e.clientX, left: stripRef.current?.scrollLeft ?? 0 };
            stripRef.current?.classList.add("is-grabbing");
          }}
          onPointerMove={(e) => {
            if (!strip.current || !stripRef.current) return;
            stripRef.current.scrollLeft = strip.current.left - (e.clientX - strip.current.x);
          }}
          onPointerUp={() => {
            strip.current = null;
            stripRef.current?.classList.remove("is-grabbing");
          }}
          onPointerLeave={() => {
            strip.current = null;
            stripRef.current?.classList.remove("is-grabbing");
          }}
        >
          {GALLERY.map((src, i) => (
            <figure
              key={src}
              className="stv-card"
              style={{ ["--r" as string]: `${[-3, 2.5, -1.5, 3.5, -2.5][i % 5]}deg` }}
            >
              <img src={src} alt={c.gallery.captions[i]} loading="lazy" draggable={false} />
              <figcaption>{c.gallery.captions[i]}</figcaption>
            </figure>
          ))}
        </div>
        <p className="stv-hint">{c.gallery.hint}</p>
      </section>

      {/* ── Další sporty ─────────────────────────────────────────────── */}
      <section className="stv-more">
        <div className="stv-more-inner">
          <h2 className="stv-more-h font-serif">{c.more.heading}</h2>
          <ul className="stv-more-list">
            {c.more.items.map((it, i) => (
              <li key={it} style={{ ["--i" as string]: i }}>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
