// Animation constants for the design system
// These constants are used with Framer Motion for consistent animations

import { AnimationVariant } from '../../types';

export const ANIMATION_KEYS: Record<string, AnimationVariant> = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  fadeRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
};

export const DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};

export const EASINGS = {
  // Framer Motion easing presets
  easeOut: [0.16, 1, 0.3, 1], // Custom easeOut that looks good
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  // Additional easings if needed
  bounce: [0.87, 0, 0.13, 1],
  spring: [0.34, 1.56, 0.64, 1],
};

// Transition presets that combine duration and easing
export const TRANSITIONS = {
  fast: {
    duration: DURATIONS.fast,
    ease: EASINGS.easeOut,
  },
  normal: {
    duration: DURATIONS.normal,
    ease: EASINGS.easeOut,
  },
  slow: {
    duration: DURATIONS.slow,
    ease: EASINGS.easeOut,
  },
  bounce: {
    duration: DURATIONS.normal,
    ease: EASINGS.bounce,
  },
  spring: {
    duration: DURATIONS.normal,
    ease: EASINGS.spring,
  },
};
