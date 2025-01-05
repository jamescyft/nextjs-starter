"use client";

import React from 'react';
import { Flex } from '.';
import { Icon } from './Icon';
import type { ComponentProps } from '../../interfaces';

interface OptionProps extends ComponentProps {
  value: string;
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

export const Option: React.FC<OptionProps> = ({
  value,
  label,
  selected,
  onClick,
  ...rest
}) => {
  return (
    <Flex
      fillWidth
      padding="md"
      radius="4"
      cursor="pointer"
      onClick={onClick}
      background={selected ? 'surface-selected' : undefined}
      {...rest}
    >
      <Flex fillWidth gap="xs" alignItems="center">
        {label}
        {selected && (
          <Flex marginLeft="2xl">
            <Icon name="check" size="s" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
