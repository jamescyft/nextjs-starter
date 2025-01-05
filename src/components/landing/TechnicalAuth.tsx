import React from 'react';
import { Flex } from '@/once-ui/components/Flex';
import { RevealFx } from '@/once-ui/components/RevealFx';
import { Icon } from '@/once-ui/components/Icon';
import { Text } from '@/once-ui/components/Text';

interface TechnicalAuthProps {
  className?: string;
}

interface IntegrationPoint {
  title: string;
  description: string;
  icon: 'video' | 'ticket' | 'file-text' | 'clock' | 'workflow' | 'settings';
  path: string;
  status: string;
}

export function TechnicalAuth({ className }: TechnicalAuthProps) {
  const integrationPoints: IntegrationPoint[] = [
    {
      title: 'Teams & Zoom Integration',
      description: 'Automatic call recording and transcription',
      icon: 'video',
      path: '/integrations/calls/status',
      status: 'Latency: 47ms',
    },
    {
      title: 'ConnectWise Integration',
      description: 'Real-time ticket updates and tracking',
      icon: 'ticket',
      path: '/api/v1/connectwise/health',
      status: 'Success Rate: 99.9%',
    },
    {
      title: 'IT Glue Integration',
      description: 'Automated documentation maintenance',
      icon: 'file-text',
      path: '/services/itglue/sync',
      status: 'Last Sync: 3m ago',
    },
  ];

  const implementationPoints: IntegrationPoint[] = [
    {
      title: '2-Minute Setup',
      description: 'No complex configuration required',
      icon: 'clock',
      path: '/setup/requirements',
      status: 'Avg Setup: 126s',
    },
    {
      title: 'Zero Workflow Changes',
      description: 'Works with your existing processes',
      icon: 'workflow',
      path: '/system/compatibility',
      status: 'Compatibility: 100%',
    },
    {
      title: 'No Maintenance Required',
      description: 'Self-updating and self-healing',
      icon: 'settings',
      path: '/maintenance/status',
      status: 'Uptime: 99.99%',
    },
  ];

  return (
    <Flex 
      direction="column" 
      padding="xl"
      background="neutral-weak"
      gap="xl"
      className={className}
    >
      <Text variant="heading-strong-xl" align="center">
        Built for MSP Infrastructure
      </Text>
      
      {/* Integration Points */}
      <Flex direction="column" gap="l">
        <Text variant="heading-strong-l">
          Connects to Your Core Systems
        </Text>
        <Flex gap="l" wrap={true}>
          {integrationPoints.map((point, index) => (
            <RevealFx key={point.title} delay={0.2 * index}>
              <Flex
                direction="column"
                background="neutral-strong"
                padding="l"
                radius="m"
                gap="s"
                width={32}
                flex={1}
              >
                <Flex gap="m" alignItems="center">
                  <Icon
                    name={point.icon}
                    size="m"
                    onBackground="brand-strong"
                  />
                  <Text
                    variant="heading-default-m"
                    onBackground="neutral-strong"
                  >
                    {point.title}
                  </Text>
                </Flex>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-strong"
                >
                  {point.description}
                </Text>
                <Text
                  variant="body-default-xs"
                  onBackground="neutral-weak"
                >
                  {point.path}
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="brand-weak"
                >
                  {point.status}
                </Text>
              </Flex>
            </RevealFx>
          ))}
        </Flex>
      </Flex>

      {/* Implementation Points */}
      <Flex direction="column" gap="l">
        <Text variant="heading-strong-l">
          Implementation That Makes Sense
        </Text>
        <Flex gap="l" wrap={true}>
          {implementationPoints.map((point, index) => (
            <RevealFx key={point.title} delay={0.2 * index}>
              <Flex
                direction="column"
                background="neutral-strong"
                padding="l"
                radius="m"
                gap="s"
                width={32}
                flex={1}
              >
                <Flex gap="m" alignItems="center">
                  <Icon
                    name={point.icon}
                    size="m"
                    onBackground="brand-strong"
                  />
                  <Text
                    variant="heading-default-m"
                    onBackground="neutral-strong"
                  >
                    {point.title}
                  </Text>
                </Flex>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-strong"
                >
                  {point.description}
                </Text>
                <Text
                  variant="body-default-xs"
                  onBackground="neutral-weak"
                >
                  {point.path}
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="brand-weak"
                >
                  {point.status}
                </Text>
              </Flex>
            </RevealFx>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
