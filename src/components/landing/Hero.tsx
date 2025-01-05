import React from 'react';
import { Flex } from '../../once-ui/components/Flex';
import { Button } from '../../once-ui/components/Button';
import { RevealFx } from '../../once-ui/components/RevealFx';
import { Text } from '../../once-ui/components/Text';
import { Icon } from '../../once-ui/components/Icon';

interface HeroProps {
  className?: string;
  onDemoClick?: () => void;
}

export function Hero({ className, onDemoClick }: HeroProps) {
  // Technical authenticity marker - system status
  const systemStatus = {
    uptime: '99.99%',
    latency: '< 100ms',
    activeNodes: 12,
  };

  return (
    <Flex
      fillHeight
      alignItems="center"
      justifyContent="space-between"
      paddingX="s"
      paddingY="m"
      background="neutral-weak"
      className={className}
      data-testid="hero-section"
    >
      <Flex direction="column" gap="xl" maxWidth="xl">
        <RevealFx>
          <Text as="h1" variant="display-strong-xl" className="leading-tight">
            Your team is brilliant. They&apos;re also human.
          </Text>
        </RevealFx>
        
        <RevealFx delay={0.2}>
          <Text as="h2" variant="heading-default-l" onBackground="neutral-weak" className="leading-relaxed">
            Every conversation contains critical knowledge. 
            Most of it evaporates within hours.
          </Text>
        </RevealFx>
        
        <RevealFx delay={0.4}>
          <Flex gap="s" alignItems="center">
            <Icon name="alert-triangle" size="s" onBackground="warning-strong" />
            <Text variant="body-default-s" onBackground="neutral-weak">
              73% of solutions are never documented
            </Text>
          </Flex>
        </RevealFx>
        
        <RevealFx delay={0.6}>
          <Button 
            variant="primary" 
            size="l"
            onClick={onDemoClick}
            prefixIcon="play"
            data-testid="demo-button"
          >
            See it capture everything →
          </Button>
        </RevealFx>

        {/* Technical authenticity markers */}
        <RevealFx delay={0.8}>
          <Flex gap="xl" marginTop="m">
            {Object.entries(systemStatus).map(([key, value]) => (
              <Flex key={key} gap="s" alignItems="center">
                <Icon 
                  name={key === 'uptime' ? 'activity' : key === 'latency' ? 'zap' : 'server'} 
                  size="s"
                  onBackground="success-strong"
                />
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {value}
                </Text>
              </Flex>
            ))}
          </Flex>
        </RevealFx>
      </Flex>
      
      <Flex className="relative">
        <RevealFx delay={0.3}>
          {/* Knowledge Flow Diagram with technical markers */}
          <Flex background="neutral-strong" padding="m" radius="m">
            <Text variant="code-default-s" onBackground="neutral-weak" className="font-mono">
              system.capture.status: active
            </Text>
          </Flex>
        </RevealFx>
      </Flex>
    </Flex>
  );
}
