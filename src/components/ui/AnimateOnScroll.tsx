"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.85,
  once = true,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    const translate =
      direction === "up"
        ? "translateY(32px)"
        : direction === "down"
          ? "translateY(-32px)"
          : direction === "left"
            ? "translateX(32px)"
            : direction === "right"
              ? "translateX(-32px)"
              : "none";

    el.style.opacity = "0";
    el.style.transform = translate;
    el.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    // Check if element is already in viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30) {
      setTimeout(reveal, delay * 1000 + 50);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, duration, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  direction = "up",
  duration = 0.8,
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const childElements = Array.from(el.children) as HTMLElement[];

    const translate =
      direction === "up"
        ? "translateY(24px)"
        : direction === "left"
          ? "translateX(24px)"
          : direction === "right"
            ? "translateX(-24px)"
            : "none";

    if (prefersReducedMotion) {
      childElements.forEach((child) => {
        child.style.opacity = "1";
        child.style.transform = "none";
      });
      return;
    }

    childElements.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = translate;
    });

    const revealAll = () => {
      childElements.forEach((child, i) => {
        child.style.transition = `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s`;
        child.style.opacity = "1";
        child.style.transform = "none";
      });
    };

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 30) {
      setTimeout(revealAll, 80);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealAll();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerDelay, direction, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
