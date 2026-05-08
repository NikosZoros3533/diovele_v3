import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../hooks/useLenis";
import { useGsapReveal } from "../hooks/useGsapReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const heroRef = useRef(null);
  const revealRef = useGsapReveal();

  // Scope body class
  useEffect(() => {
    document.body.classList.add("portfolio");
    return () => document.body.classList.remove("portfolio");
  }, []);

  // Hero title intro timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ delay: 0.2 })
        .from(".smoke-eyebrow", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".smoke-title span",
          {
            y: "100%",
            opacity: 0,
            duration: 1.1,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.4",
        )
        .from(
          ".smoke-sub",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".smoke-line",
          {
            scaleX: 0,
            duration: 1.2,
            ease: "power3.inOut",
            transformOrigin: "left center",
          },
          "-=0.6",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <Cursor />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative flex flex-col justify-end min-h-screen px-8 pb-16 md:px-16 md:pb-20"
        style={{ background: "var(--color-background)" }}
      >
        {/* Top-left label */}
        <p
          className="smoke-eyebrow label-sm absolute top-10 left-8 md:left-16"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          Smoke Test — v0.1
        </p>

        {/* Top-right label */}
        <p
          className="label-sm absolute top-10 right-8 md:right-16"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          Lenis + GSAP + Tailwind v4
        </p>

        {/* Main title */}
        <div className="smoke-title overflow-hidden mb-6">
          <h1 className="display-2xl">
            {"Everything".split("").map((char, i) => (
              <span key={i} style={{ display: "inline-block" }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <h1 className="display-2xl" style={{ color: "var(--color-accent)" }}>
            {"Works.".split("").map((char, i) => (
              <span key={i} style={{ display: "inline-block" }}>
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Divider line */}
        <div
          className="smoke-line mb-6"
          style={{
            height: "1px",
            background: "var(--color-border-strong)",
            width: "100%",
          }}
        />

        {/* Subtitle */}
        <p
          className="smoke-sub body-md"
          style={{ color: "var(--color-muted-foreground)", maxWidth: "480px" }}
        >
          Fonts, scroll, cursor, tokens, and animations — all confirmed
          operational.
        </p>
      </section>

      {/* ── SCROLL TEST SECTION ── */}
      <section
        ref={revealRef}
        className="min-h-screen flex flex-col justify-center px-8 md:px-16 gap-16"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="flex items-start gap-12">
          <p
            className="label-sm pt-1"
            style={{ color: "var(--color-accent)", minWidth: "120px" }}
          >
            01 — Scroll
          </p>
          <h2
            data-reveal="up"
            className="display-lg"
            style={{ maxWidth: "700px" }}
          >
            ScrollTrigger is alive and watching.
          </h2>
        </div>

        <div className="flex items-start gap-12">
          <p
            className="label-sm pt-1"
            style={{
              color: "var(--color-muted-foreground)",
              minWidth: "120px",
            }}
          >
            02 — Fonts
          </p>
          <div data-reveal="up" data-delay="0.1" style={{ maxWidth: "700px" }}>
            <h3 className="display-md mb-4">Clash Display — Heading</h3>
            <p
              className="body-md"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Cabinet Grotesk — body text running at weight 300, line-height
              1.7. Both fonts loaded from Fontshare. Both rendering correctly.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-12">
          <p
            className="label-sm pt-1"
            style={{
              color: "var(--color-muted-foreground)",
              minWidth: "120px",
            }}
          >
            03 — Tokens
          </p>
          <div
            data-reveal="up"
            data-delay="0.2"
            className="flex gap-4 flex-wrap"
          >
            {[
              {
                label: "background",
                bg: "var(--color-background)",
                border: true,
              },
              { label: "surface", bg: "var(--color-surface)" },
              { label: "surface-2", bg: "var(--color-surface-2)" },
              { label: "foreground", bg: "var(--color-foreground)" },
              { label: "accent", bg: "var(--color-accent)" },
              { label: "muted", bg: "var(--color-muted-foreground)" },
            ].map(({ label, bg, border }) => (
              <div key={label} className="flex flex-col gap-2">
                <div
                  style={{
                    width: 80,
                    height: 80,
                    background: bg,
                    border: border
                      ? "1px solid var(--color-border-strong)"
                      : "none",
                  }}
                />
                <p
                  className="label-sm"
                  style={{ color: "var(--color-muted-foreground)" }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-12">
          <p
            className="label-sm pt-1"
            style={{
              color: "var(--color-muted-foreground)",
              minWidth: "120px",
            }}
          >
            04 — Cursor
          </p>
          <div data-reveal="up" data-delay="0.3">
            <p
              className="body-md"
              style={{ color: "var(--color-muted-foreground)" }}
            >
              Move your mouse. The dot follows instantly. The ring lags behind
              with lerp.{" "}
              <span
                className="cursor-hover-target"
                style={{
                  color: "var(--color-foreground)",
                  borderBottom: "1px solid var(--color-border-strong)",
                  cursor: "none",
                }}
              >
                Hover this text to see the ring expand.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER LINE ── */}
      <div
        className="px-8 md:px-16 py-8 flex justify-between items-center"
        style={{
          borderTop: "1px solid var(--color-border)",
          background: "var(--color-background)",
        }}
      >
        <p
          className="label-sm"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          Foundation complete
        </p>
        <p className="label-sm" style={{ color: "var(--color-accent)" }}>
          Step 2 →
        </p>
      </div>
    </>
  );
}

/* ── CURSOR COMPONENT (global, lives here for now) ── */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      gsap.set(dot, { x: e.clientX, y: e.clientY });
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);
      gsap.set(ringEl, { x: ring.current.x, y: ring.current.y });
      rafRef.current = requestAnimationFrame(tick);
    };

    // Hover states
    const addHover = () => ringEl.classList.add("is-hovering");
    const removeHover = () => ringEl.classList.remove("is-hovering");

    const hoverTargets = document.querySelectorAll(
      "a, button, .cursor-hover-target",
    );
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
