"use client";

import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { Flex, Icon, Heading } from ".";
import styles from "./Accordion.module.scss";

import {
  FlexProps,
  SpacingProps,
  SizeProps,
  StyleProps,
  CommonProps,
  DisplayProps,
  ConditionalProps,
} from "../../interfaces";

export interface AccordionHandle {
  toggle: () => void;
  open: () => void;
  close: () => void;
}

interface ComponentProps
  extends FlexProps,
    SpacingProps,
    SizeProps,
    StyleProps,
    CommonProps,
    DisplayProps,
    ConditionalProps {}

interface AccordionProps extends Omit<ComponentProps, 'children'> {
  title: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
}

const Accordion = forwardRef<HTMLDivElement & AccordionHandle, AccordionProps>(
  ({ title, children, open = false, ...rest }, ref) => {
    const [isOpen, setIsOpen] = useState(open);
    const containerRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    useImperativeHandle(
      ref,
      () => {
        const element = containerRef.current;
        if (!element) {
          return {
            toggle: toggleAccordion,
            open: () => setIsOpen(true),
            close: () => setIsOpen(false),
          } as HTMLDivElement & AccordionHandle;
        }
        return {
          ...element,
          toggle: toggleAccordion,
          open: () => setIsOpen(true),
          close: () => setIsOpen(false),
        } as HTMLDivElement & AccordionHandle;
      },
      [containerRef, toggleAccordion],
    );

    return (
      <Flex fillWidth direction="column" className={styles.border} ref={containerRef} {...rest}>
        <Flex
          tabIndex={0}
          className={styles.accordion}
          cursor="pointer"
          transition="macro-medium"
          paddingY="16"
          paddingX="20"
          alignItems="center"
          justifyContent="between"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls="accordion-content"
        >
          <Heading as="h3" variant="heading-strong-s">
            {title}
          </Heading>
          <Icon
            name="chevronDown"
            size="m"
            style={{
              display: "flex",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "var(--transition-micro-medium)",
            }}
          />
        </Flex>
        <Flex
          id="accordion-content"
          fillWidth
          direction="column"
          style={{
            display: "grid",
            gridTemplateRows: isOpen ? "1fr" : "0fr",
            transition:
              "grid-template-rows var(--transition-duration-macro-medium) var(--transition-eased)",
          }}
          aria-hidden={!isOpen}
          {...rest}
        >
          <Flex fillWidth minHeight={0} overflow="hidden" direction="column">
            <Flex fillWidth paddingX="20" paddingTop="8" paddingBottom="16">
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  },
);

Accordion.displayName = "Accordion";

export { Accordion };
