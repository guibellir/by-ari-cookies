import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react'
import { useReveal } from '../hooks/useReveal'

export type RevealVariant =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'scale'
  | 'fade'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Animation direction/style. Default 'up' */
  variant?: RevealVariant
  /** Stagger index for grids (0-based). Adds delay via CSS */
  delay?: number
  /** Extra delay in ms on top of stagger */
  delayMs?: number
  /** Render as this HTML tag. Default 'div' */
  as?: ElementType
  /** Observer threshold */
  threshold?: number
  style?: CSSProperties
}

/**
 * Wraps content with a scroll-triggered reveal animation.
 * Uses Intersection Observer — lightweight and mobile-friendly.
 */
export function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  delayMs = 0,
  as = 'div',
  threshold,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>({ threshold })

  const classes = [
    'reveal',
    `reveal-${variant}`,
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const combinedStyle: CSSProperties = {
    ...style,
    ...(delay > 0 || delayMs > 0
      ? {
          transitionDelay: `${delay * 70 + delayMs}ms`,
        }
      : undefined),
  }

  return createElement(
    as,
    { ref, className: classes, style: combinedStyle },
    children,
  )
}
