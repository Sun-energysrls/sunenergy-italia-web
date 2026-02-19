import { useEffect, useRef } from "react";

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
}

const useScrollReveal = <T extends HTMLElement>({ threshold = 0.15, delay = 0 }: ScrollRevealOptions = {}) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
};

export default useScrollReveal;
