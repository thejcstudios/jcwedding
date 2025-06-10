// src/hooks/useScrollEffect.ts
import { useEffect, useRef } from 'react';

const useScrollEffect = <T extends HTMLElement>(
  threshold = 0.1,
  triggerOnce = true
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add('is-visible');
            if (triggerOnce) observer.unobserve(target);
          } else {
            if (!triggerOnce) target.classList.remove('is-visible');
          }
        });
      },
      { threshold }
    );

    const element = elementRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, triggerOnce]);

  return elementRef;
};

export default useScrollEffect;
