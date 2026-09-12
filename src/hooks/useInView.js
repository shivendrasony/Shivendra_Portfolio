import { useEffect, useRef, useState } from "react";

export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [inView, setInView] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) observer.unobserve(node);
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
