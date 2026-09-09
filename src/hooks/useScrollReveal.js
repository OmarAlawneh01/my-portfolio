import { useEffect, useRef, useState } from 'react';

// Reveals an element once it enters the viewport.
// Uses a zero threshold so tall containers still trigger on short screens, plus a
// scroll fallback so content can never stay hidden if observer callbacks don't arrive.
export function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inViewport = () => el.getBoundingClientRect().top < window.innerHeight * 0.9;

    // Already on screen at mount (deep link, refresh mid-page): show without waiting.
    if (typeof IntersectionObserver === 'undefined' || inViewport()) {
      setIsVisible(true);
      return;
    }

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setIsVisible(true);
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) reveal(); },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);

    const onScroll = () => { if (inViewport()) reveal(); };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return [ref, isVisible];
}
