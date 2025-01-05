"use client";

import React from 'react';
import { Flex } from './Flex';
import { Text } from './Text';
import { Icon } from './Icon';

export interface ChipProps {
  label: string;
  onRemove?: () => void;
  size?: 's' | 'm';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  onRemove,
  size = 'm',
  variant = 'default',
  className,
}) => {
  const sizeMap = {
    s: {
      padding: '4' as const,
      fontSize: 'xs' as const,
      iconSize: 's' as const,
    },
    m: {
      padding: '8' as const,
      fontSize: 'sm' as const,
      iconSize: 'm' as const,
    },
  };

  return (
    <Flex
      className={className}
      padding={sizeMap[size].padding}
      radius="8"
      background={`surface-${variant}`}
      gap="4"
      align="center"
    >
      <Text
        variant={`body-strong-${sizeMap[size].fontSize}`}
        onBackground={`${variant}-strong`}
      >
        {label}
      </Text>
      {onRemove && (
        <Icon
          name="x"
          size={sizeMap[size].iconSize}
          onClick={onRemove}
          style={{ cursor: 'pointer' }}
        />
      )}
    </Flex>
  );
};

Chip.displayName = 'Chip';
