"use client";
import { useEffect, useRef } from 'react';

export default function CinematicMotion() {
  const rafRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanup = [];

    const showFallback = () => {
      document.querySelectorAll('.motion-reveal, .reveal').forEach((el) => {
        el.classList.add('visible');
        el.classList.add('motion-visible');
      });
    };

    const spotlight = document.querySelector('.cinematic-spotlight');
    if (spotlight && !reduceMotion) {
      const onPointerMove = (event) => {
        if (rafRef.current) return;
        rafRef.current = window.requestAnimationFrame(() => {
          spotlight.style.setProperty('--spotlight-x', event.clientX + 'px');
          spotlight.style.setProperty('--spotlight-y', event.clientY + 'px');
          rafRef.current = null;
        });
      };
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      cleanup.push(() => window.removeEventListener('pointermove', onPointerMove));
    }

    if (reduceMotion) {
      showFallback();
      return () => {
        cleanup.forEach((fn) => fn());
        if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      };
    }

    let active = true;
    (async () => {
      try {
        const gsapModule = await import('gsap');
        const triggerModule = await import('gsap/ScrollTrigger');
        if (!active) return;

        const gsap = gsapModule.gsap || gsapModule.default || gsapModule;
        const ScrollTrigger = triggerModule.ScrollTrigger || triggerModule.default;
        if (!gsap || !ScrollTrigger) throw new Error('GSAP ScrollTrigger unavailable');

        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
          gsap.utils.toArray('.motion-reveal, .reveal').forEach((el, index) => {
            gsap.fromTo(el,
              { autoAlpha: 0, y: 34, scale: 0.985 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.82,
                ease: 'power3.out',
                delay: Math.min(index % 4, 3) * 0.04,
                scrollTrigger: { trigger: el, start: 'top 86%', once: true }
              }
            );
          });

          gsap.utils.toArray('.motion-parallax').forEach((el) => {
            gsap.to(el, {
              yPercent: -8,
              ease: 'none',
              scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.8 }
            });
          });

          gsap.utils.toArray('.cinematic-frame img').forEach((img) => {
            gsap.to(img, {
              scale: 1.08,
              ease: 'none',
              scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
            });
          });

          const hero = document.querySelector('[data-cinematic-hero]');
          if (hero) {
            gsap.timeline({
              scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
            })
              .to('[data-hero-bg]', { scale: 1.12, yPercent: 7, ease: 'none' }, 0)
              .to('[data-hero-copy]', { yPercent: -12, autoAlpha: 0.82, ease: 'none' }, 0);
          }
        });
        cleanup.push(() => ctx.revert());
      } catch (err) {
        showFallback();
        if (process.env.NODE_ENV !== 'production') {
          console.warn('[cinematic-motion]', err.message);
        }
      }
    })();

    return () => {
      active = false;
      cleanup.forEach((fn) => fn());
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div className="cinematic-spotlight" aria-hidden="true" />;
}
