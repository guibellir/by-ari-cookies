import { useEffect, useRef, useState } from 'react'

type UseRevealOptions = {
  /** How much of the element must be visible (0–1). Default 0.12 */
  threshold?: number
  /** Root margin to trigger a bit earlier/later. Default '0px 0px -8% 0px' */
  rootMargin?: string
  /** Only animate once. Default true */
  once?: boolean
}

/**
 * Intersection Observer hook for scroll-reveal animations.
 * Returns a ref to attach and whether the element is (or was) in view.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
) {
  const { threshold = 0.12, rootMargin = '0px 0px -8% 0px', once = true } =
    options
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion: show immediately
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setVisible(true)
      return
    }

    // Already in viewport on mount (e.g. hero) — still animate via CSS delay
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, visible }
}
