"use client";

import React from 'react';
import { Icon } from './Icon';

export interface NavIconProps {
  name: string;
  size?: 's' | 'm' | 'l';
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export const NavIcon: React.FC<NavIconProps> = ({
  name,
  size = 'm',
  active = false,
  onClick,
  className,
}) => {
  const sizeMap = {
    s: 's',
    m: 'm',
    l: 'l',
  } as const;

  return (
    <Icon
      name={name}
      size={sizeMap[size]}
      className={className}
      onClick={onClick}
      style={{
        opacity: active ? 1 : 0.6,
        cursor: onClick ? 'pointer' : 'default',
      }}
    />
  );
};

NavIcon.displayName = 'NavIcon';
