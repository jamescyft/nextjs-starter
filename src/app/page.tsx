"use client";

import { useState } from "react";
import { Button } from "@/components/once-ui/Button";
import { Column } from "@/components/once-ui/Column";
import { Row } from "@/components/once-ui/Row";
import { Logo } from "@/components/once-ui/Logo";
import { Dialog } from "@/components/once-ui/Dialog";
import { Text } from "@/components/once-ui/Text";
import { useToast } from "@/components/once-ui/useToast";
import { Hero } from "@/components/landing/Hero";
import { RealityMirror } from "@/components/landing/RealityMirror";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToast } = useToast();

  const handleDemoClick = () => {
    setIsDialogOpen(true);
    addToast({
      title: "Demo Started",
      description: "Watch as we capture and transform your team's knowledge.",
      variant: "info",
    });
  };

  return (
    <Column fillWidth paddingY="80" paddingX="s" alignItems="center" flex={1}>
      <Row position="fixed" top="0" fillWidth justifyContent="center" zIndex={3}>
        <Row
          data-border="rounded"
          justifyContent="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo size="m" icon={false} href="/" />
          <Row gap="12" hide="s">
            <Button
              href="https://github.com/jamescyft/nextjs-starter"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
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
        <Hero onDemoClick={handleDemoClick} />
        <RealityMirror />
      </Column>
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Watch Knowledge Capture in Action"
      >
        <Text variant="body-default-m">
          Observing live knowledge capture and documentation...
        </Text>
      </Dialog>
    </Column>
  );
}
