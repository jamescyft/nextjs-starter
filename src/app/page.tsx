"use client";

import React from "react";
import {
  Logo,
  Column,
  Row,
  Background,
  Button,
  IconButton,
  StyleOverlay,
  Fade,
  Text,
} from "@/once-ui/components";

import { Hero } from '@/components/landing/Hero';
import { RealityMirror } from '@/components/landing/RealityMirror';
import { TechnicalAuth } from '@/components/landing/TechnicalAuth';
import { ValueCrystallization } from '@/components/landing/ValueCrystallization';
import { ProofPoint } from '@/components/landing/ProofPoint';
import { NextStep } from '@/components/landing/NextStep';

export default function Home() {
  return (
    <Column fillWidth paddingY="80" paddingX="s" alignItems="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth justifyContent="center" zIndex={3}>
        <Row
          data-border="rounded"
          justifyContent="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" icon={false} href="https://cyft.ai" />
          <Row gap="12" hide="s">
            <Button
              href="https://cyft.ai/demo"
              size="s"
              label="Watch Demo"
              weight="default"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
          <Row gap="16" show="s" alignItems="center" paddingRight="24">
            <IconButton
              href="https://cyft.ai/demo"
              icon="play"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        alignItems="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Hero />
        <RealityMirror />
        <TechnicalAuth />
        <ValueCrystallization />
        <ProofPoint />
        <NextStep />
      </Column>
      <Row
        position="relative"
        as="footer"
        fillWidth
        paddingX="l"
        paddingTop="128"
        paddingBottom="80"
      >
        <Background
          borderTop="brand-alpha-strong"
          mask={{
            x: 50,
            y: 0,
          }}
          position="absolute"
          grid={{
            display: true,
            width: "0.25rem",
            color: "brand-alpha-strong",
            height: "0.25rem",
          }}
        />
        <Column
          position="relative"
          textVariant="body-default-xs"
          onBackground="neutral-medium"
          alignItems="center"
          align="center"
          fillWidth
          gap="16"
        >
          <Logo wordmark={false} size="s" />
          <Text size="m">
            <Text onBackground="neutral-weak">2024 /</Text> Cyft
          </Text>
        </Column>
      </Row>
    </Column>
  );
}
