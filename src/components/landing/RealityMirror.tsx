import React from 'react';
import { Flex } from '@/once-ui/components/Flex';
import { RevealFx } from '@/once-ui/components/RevealFx';
import { Text } from '@/once-ui/components/Text';
import { Icon } from '@/once-ui/components/Icon';
import { TiltFx } from '@/once-ui/components/TiltFx';
import { HoloFx } from '@/once-ui/components/HoloFx';
import { Background } from '@/once-ui/components/Background';

interface RealityMirrorProps {
  className?: string;
}

type CardVariant = 'neutral-strong' | 'warning-strong' | 'brand-strong';

interface Card {
  title: string;
  subtitle?: string;
  icon: 'alert-circle' | 'check-circle' | 'repeat' | 'database' | 'file-text' | 'shield';
  variant: CardVariant;
  path?: string;
}

export function RealityMirror({ className }: RealityMirrorProps) {
  const realityCards: Card[] = [
    {
      title: '3:47 AM: Critical system down',
      subtitle: '/var/log/syslog: Error code 0x8000FFE',
      icon: 'alert-circle',
      variant: 'warning-strong',
      path: '/sys/devices/critical/status',
    },
    {
      title: 'Your best tech solves it',
      subtitle: 'Solution logged in ticket #RT-2947',
      icon: 'check-circle',
      variant: 'neutral-strong',
      path: '/api/v1/tickets/RT-2947',
    },
    {
      title: 'Three months later: Same problem, different client',
      subtitle: 'Knowledge base: 0 matching solutions',
      icon: 'repeat',
      variant: 'warning-strong',
      path: '/kb/search?q=critical+system',
    },
  ];

  const aiCards: Card[] = [
    {
      title: 'Every solution captured automatically',
      subtitle: 'API: /v1/knowledge-capture/active',
      icon: 'database',
      variant: 'brand-strong',
      path: '/metrics/capture/success-rate',
    },
    {
      title: 'Knowledge instantly documented',
      subtitle: 'Connected: IT Glue, ConnectWise',
      icon: 'file-text',
      variant: 'brand-strong',
      path: '/integrations/status',
    },
    {
      title: 'Problems never repeat',
      subtitle: 'Prevention rate: 94.7%',
      icon: 'shield',
      variant: 'brand-strong',
      path: '/analytics/prevention',
    },
  ];

  return (
    <Flex 
      justifyContent="space-around" 
      paddingX="xl"
      paddingY="64"
      background="neutral-weak"
      gap="24"
      className={className}
    >
      <Flex gap="xl">
        {/* Left side: Reality cards */}
        <TiltFx fillWidth radius="xl" overflow="hidden">
          <HoloFx fill>
            <Background
              fill
              position="absolute"
              gradient={{
                display: true,
                tilt: -45,
                height: 150,
                width: 100,
                x: 50,
                y: -25,
                colorStart: "warning-solid-strong",
                colorEnd: "warning-solid-weak",
              }}
              grid={{
                display: true,
                opacity: 90,
                width: "0.25rem",
                color: "warning-alpha-medium",
                height: "0.25rem",
              }}
              mask={{
                x: 50,
                y: 25,
                radius: 75,
              }}
            />
            <Flex direction="column" gap="l" maxWidth="xl" position="relative">
              {realityCards.map((card, index) => (
                <RevealFx key={card.title} delay={0.2 * index}>
                  <Flex
                    direction="column"
                    background="neutral-strong"
                    padding="24"
                    radius="m"
                    gap="12"
                  >
                    <Flex gap="m" alignItems="center">
                      <Icon
                        name={card.icon}
                        size="m"
                        onBackground={card.variant}
                      />
                      <Text
                        variant="heading-default-m"
                        onBackground={card.variant}
                      >
                        {card.title}
                      </Text>
                    </Flex>
                    {card.subtitle && (
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-strong"
                      >
                        {card.subtitle}
                      </Text>
                    )}
                    {card.path && (
                      <Text
                        variant="body-default-xs"
                        onBackground="neutral-weak"
                      >
                        {card.path}
                      </Text>
                    )}
                  </Flex>
                </RevealFx>
              ))}
            </Flex>
          </HoloFx>
        </TiltFx>
        
        {/* Right side: AI cards */}
        <TiltFx fillWidth radius="xl" overflow="hidden">
          <HoloFx fill>
            <Background
              fill
              position="absolute"
              gradient={{
                display: true,
                tilt: 45,
                height: 150,
                width: 100,
                x: 50,
                y: -25,
                colorStart: "brand-solid-strong",
                colorEnd: "brand-solid-weak",
              }}
            />
            <Flex direction="column" gap="l" maxWidth="xl" position="relative">
              {aiCards.map((card, index) => (
                <RevealFx key={card.title} delay={0.3 * index}>
                  <Flex
                    direction="column"
                    background="neutral-strong"
                    padding="24"
                    radius="m"
                    gap="12"
                  >
                    <Flex gap="m" alignItems="center">
                      <Icon
                        name={card.icon}
                        size="m"
                        onBackground={card.variant}
                      />
                      <Text
                        variant="heading-default-m"
                        onBackground={card.variant}
                      >
                        {card.title}
                      </Text>
                    </Flex>
                    {card.subtitle && (
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-strong"
                      >
                        {card.subtitle}
                      </Text>
                    )}
                    {card.path && (
                      <Text
                        variant="body-default-xs"
                        onBackground="neutral-weak"
                      >
                        {card.path}
                      </Text>
                    )}
                  </Flex>
                </RevealFx>
              ))}
            </Flex>
          </HoloFx>
        </TiltFx>
      </Flex>
    </Flex>
  );
}
