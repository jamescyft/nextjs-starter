"use client";

import React from 'react';
import { Flex } from './Flex';
import { Text } from './Text';

export interface TagProps {
  label?: string;
  size?: 's' | 'm';
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  className?: string;
  children?: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  label,
  size = 'm',
  variant = 'default',
  className,
  children,
  ...rest
}) => {
  const sizeMap = {
    s: {
      padding: '8' as const,
      fontSize: 'xs' as const,
    },
    m: {
      padding: '16' as const,
      fontSize: 'sm' as const,
    },
  };

  return (
    <Flex
      className={className}
      padding={sizeMap[size].padding}
      radius="8"
      background={`surface-${variant}`}
      {...rest}
    >
      <Text
        variant={`body-strong-${sizeMap[size].fontSize}`}
        onBackground={`${variant}-strong`}
      >
        {children || label}
      </Text>
    </Flex>
  );
};

Tag.displayName = 'Tag';
