import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attach to a container ref. Finds all [data-reveal] children
 * and animates them in on scroll.
 */
export function useGsapReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current.querySelectorAll("[data-reveal]");

      elements.forEach((el) => {
        const type = el.dataset.reveal; // 'fade', 'up', 'left', 'scale'
        const delay = parseFloat(el.dataset.delay || 0);

        const from = {
          fade: { opacity: 0 },
          up: { opacity: 0, y: 60 },
          left: { opacity: 0, x: -50 },
          scale: { opacity: 0, scale: 0.92 },
        }[type] || { opacity: 0, y: 40 };

        gsap.from(el, {
          ...from,
          duration: options.duration || 1.2,
          delay,
          ease: options.ease || "power3.out",
          scrollTrigger: {
            trigger: el,
            start: options.start || "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
