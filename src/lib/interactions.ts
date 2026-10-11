import React from "react";

// Sdílené interakce pro „živé“ sekce (naklánění za kurzorem, tažení prvků,
// počítání čísel, spuštění při vstupu do viewportu).

export function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v));
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Naklápění prvku podle kurzoru (jen myš). Nastavuje CSS proměnné --tx a --ty (−1…1). */
export function useTilt<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T>(null);
  const raf = React.useRef(0);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse" || raf.current) return;
    const { clientX, clientY } = e;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--tx", String(clamp(((clientX - r.left) / r.width) * 2 - 1, -1, 1)));
      el.style.setProperty("--ty", String(clamp(((clientY - r.top) / r.height) * 2 - 1, -1, 1)));
    });
  };
  const onLeave = () => {
    ref.current?.style.setProperty("--tx", "0");
    ref.current?.style.setProperty("--ty", "0");
  };
  return { ref, onMove, onLeave };
}

/** Tažení prvku myší; po puštění se pružně vrátí (CSS řeší --dx/--dy). */
export function useDrag<T extends HTMLElement = HTMLDivElement>() {
  const ref = React.useRef<T>(null);
  const start = React.useRef<{ x: number; y: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { x: e.clientX, y: e.clientY };
    ref.current?.classList.add("is-dragging");
  };
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (!start.current || !ref.current) return;
    ref.current.style.setProperty("--dx", `${e.clientX - start.current.x}px`);
    ref.current.style.setProperty("--dy", `${e.clientY - start.current.y}px`);
  };
  const end = () => {
    if (!start.current || !ref.current) return;
    start.current = null;
    ref.current.classList.remove("is-dragging");
    ref.current.style.setProperty("--dx", "0px");
    ref.current.style.setProperty("--dy", "0px");
  };
  return {
    ref,
    handlers: { onPointerDown, onPointerMove, onPointerUp: end, onPointerCancel: end },
  };
}

/** Vrátí true, jakmile je prvek poprvé vidět (a zůstane true). */
export function useSeenOnce<T extends Element>(threshold = 0.3) {
  const ref = React.useRef<T>(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

/** Plynulé dopočítání čísla od 0 po `target`, jakmile je `run` true. */
export function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = clamp((now - t0) / duration, 0, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return run ? value : 0;
}

/** Je prvek na obrazovce a je karta prohlížeče aktivní? */
export function useOnScreen<T extends Element>(threshold = 0.35) {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);
  const [tabActive, setTabActive] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold,
    });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  React.useEffect(() => {
    const onVis = () => setTabActive(!document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return { ref, onScreen: visible && tabActive };
}
