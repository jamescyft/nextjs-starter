import React from 'react';
import { Flex } from '@/once-ui/components/Flex';
import { RevealFx } from '@/once-ui/components/RevealFx';
import { Icon } from '@/once-ui/components/Icon';
import { Text } from '@/once-ui/components/Text';

interface ValuePoint {
  title: string;
  description: string;
  icon: 'brain' | 'document' | 'shield';
  metrics: string[];
}

export function ValueCrystallization() {
  const values: ValuePoint[] = [
    {
      title: 'Capture Everything',
      description: 'Every call, solution, and insight is recorded automatically.',
      icon: 'brain',
      metrics: [
        'Avg. Knowledge Capture: 94%',
        'Solution Coverage: 100%',
        '/knowledge/capture/stats'
      ]
    },
    {
      title: 'Automate Documentation',
      description: 'Perfect tickets, complete records, and searchable knowledge.',
      icon: 'document',
      metrics: [
        'Documentation Rate: 100%',
        'Search Success: 98.7%',
        '/docs/automation/metrics'
      ]
    },
    {
      title: 'Prevent Problems',
      description: 'Stop repeating work, share team knowledge, and scale efficiently.',
      icon: 'shield',
      metrics: [
        'Issue Prevention: 73%',
        'Knowledge Reuse: 89%',
        '/prevention/analytics'
      ]
    }
  ];

  return (
    <Flex 
      direction="column"
      padding="xl"
      gap="xl"
      background="neutral-strong"
    >
      <Text variant="heading-strong-xl" align="center">
        Turn Knowledge Into Value
      </Text>
      
      <Flex gap="l" wrap={true}>
        {values.map((value, index) => (
          <RevealFx key={value.title} delay={index * 0.2}>
            <Flex
              direction="column"
              background="neutral-medium"
              padding="l"
              radius="m"
              gap="s"
              width={32}
              flex={1}
            >
              <Flex gap="m" alignItems="center">
                <Icon
                  name={value.icon}
                  size="l"
                  onBackground="brand-strong"
                />
                <Text
                  variant="heading-default-m"
                  onBackground="neutral-medium"
                >
                  {value.title}
                </Text>
              </Flex>
              <Text
                variant="body-default-s"
                onBackground="neutral-medium"
              >
                {value.description}
              </Text>
              {value.metrics.map((metric, idx) => (
                <Text
                  key={metric}
                  variant={idx === 2 ? "body-default-xs" : "body-default-s"}
                  onBackground={idx === 2 ? "neutral-weak" : "brand-weak"}
                >
                  {metric}
                </Text>
              ))}
            </Flex>
          </RevealFx>
        ))}
      </Flex>
    </Flex>
  );
}
