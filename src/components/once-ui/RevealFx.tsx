"use client";

import React, { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpacingToken } from "../../types";
import styles from "./RevealFx.module.scss";
import { Flex } from ".";
import { ANIMATION_KEYS, TRANSITIONS } from "../../lib/constants/animations";

type FlexProps = React.ComponentProps<typeof Flex>;

interface RevealFxProps extends Omit<FlexProps, 'animation'> {
  children: React.ReactNode;
  speed?: "slow" | "medium" | "fast";
  delay?: number;
  revealedByDefault?: boolean;
  translateY?: number | SpacingToken;
  trigger?: boolean;
  style?: React.CSSProperties;
  className?: string;
  animation?: keyof typeof ANIMATION_KEYS;
}

const RevealFx = forwardRef<HTMLDivElement, RevealFxProps>(
  (
    {
      children,
      speed = "medium",
      delay = 0,
      revealedByDefault = false,
      translateY,
      trigger,
      style,
      className,
      animation = 'fadeUp',
      ...rest
    },
    ref,
  ) => {
    const [isRevealed, setIsRevealed] = useState(revealedByDefault);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }, [delay]);

    useEffect(() => {
      if (trigger !== undefined) {
        setIsRevealed(trigger);
      }
    }, [trigger]);

    const getSpeedDuration = () => {
      switch (speed) {
        case "fast":
          return "1s";
        case "medium":
          return "2s";
        case "slow":
          return "3s";
        default:
          return "2s";
      }
    };

    const getTranslateYValue = () => {
      if (typeof translateY === "number") {
        return `${translateY}rem`;
      } else if (typeof translateY === "string") {
        return `var(--static-space-${translateY})`;
      }
      return undefined;
    };

    const translateValue = getTranslateYValue();

    const revealStyle: React.CSSProperties = {
      transitionDuration: getSpeedDuration(),
      transform: isRevealed ? "translateY(0)" : `translateY(${translateValue})`,
      ...style,
    };

    return (
      <motion.div
        initial={ANIMATION_KEYS[animation].initial}
        animate={isRevealed ? ANIMATION_KEYS[animation].animate : ANIMATION_KEYS[animation].initial}
        transition={{
          duration: speed === 'fast' ? 0.2 : speed === 'slow' ? 0.5 : 0.3,
          ease: TRANSITIONS.normal.ease,
          delay: delay
        }}
      >
        <Flex
          fillWidth
          position="relative"
          justifyContent="center"
          ref={ref}
          aria-hidden="true"
          style={revealStyle}
          className={`${styles.revealFx} ${isRevealed ? styles.revealed : styles.hidden} ${className || ""}`}
          {...rest}
        >
          {children}
        </Flex>
      </motion.div>
    );
  },
);

RevealFx.displayName = "RevealFx";
export { RevealFx };
