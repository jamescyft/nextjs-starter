"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './RevealFx.module.scss';

interface RevealFxProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const RevealFx: React.FC<RevealFxProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      className={`${styles.revealFx} ${className || ''}`}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

RevealFx.displayName = 'RevealFx';
