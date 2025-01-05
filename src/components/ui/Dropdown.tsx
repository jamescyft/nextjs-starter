"use client";

import React, { ReactNode, forwardRef, SyntheticEvent } from "react";
import { Flex } from "./Flex";
import type { FlexProps, SpacingProps, SizeProps, StyleProps, CommonProps, DisplayProps, ConditionalProps } from "../../interfaces";

interface DropdownProps extends FlexProps, SpacingProps, SizeProps, StyleProps, CommonProps, DisplayProps, ConditionalProps {
  selectedOption?: string;
  onEscape?: () => void;
  onSelect?: (event: string) => void;
  radius?: string;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ selectedOption, className, children, onEscape, onSelect, radius = "l", ...rest }, ref) => {
    const handleSelect = (event: SyntheticEvent<HTMLDivElement>) => {
      const value = event.currentTarget.getAttribute("data-value");
      if (onSelect && value) {
        onSelect(value);
      }
    };

    return (
      <Flex
        flex={1}
        overflowY="auto"
        direction="column"
        border="neutral-medium"
        background="surface"
        gap="2"
        ref={ref}
        role="listbox"
        onClick={handleSelect}
        radius={radius}
        {...rest}
      >
        {children}
      </Flex>
    );
  },
);

Dropdown.displayName = "Dropdown";

export { Dropdown };
export type { DropdownProps };
