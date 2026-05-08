// Reusable GSAP animation configs and helpers

export const ease = {
  smooth: "power3.out",
  cinematic: "power4.out",
  expo: "expo.out",
  back: "back.out(1.4)",
};

export const duration = {
  fast: 0.6,
  normal: 1.0,
  slow: 1.4,
  xslow: 2.0,
};

/**
 * Staggered reveal for a list of elements
 */
export function staggerReveal(elements, options = {}) {
  return {
    opacity: 0,
    y: options.y ?? 50,
    stagger: options.stagger ?? 0.1,
    duration: options.duration ?? duration.slow,
    ease: options.ease ?? ease.cinematic,
    delay: options.delay ?? 0,
  };
}

/**
 * Parallax config for ScrollTrigger scrub
 */
export function parallax(yPercent = 20) {
  return {
    yPercent,
    ease: "none",
    scrollTrigger: {
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  };
}
