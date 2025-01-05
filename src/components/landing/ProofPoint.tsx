import React from 'react';
import { Flex } from '@/once-ui/components/Flex';
import { RevealFx } from '@/once-ui/components/RevealFx';
import { Text } from '@/once-ui/components/Text';

interface ProofPointProps {
  className?: string;
}

export function ProofPoint({ className }: ProofPointProps) {
  return (
    <Flex 
      direction="column" 
      padding="xl"
      gap="l"
      background="neutral-weak"
      className={className}
    >
      <RevealFx>
        <Flex direction="column" gap="l" alignItems="center">
          <Text 
            variant="heading-strong-xl"
            align="center"
          >
            Your team had 12 client conversations yesterday.
          </Text>
          
          <Text 
            variant="heading-default-l"
            align="center"
            onBackground="brand-strong"
          >
            Quick: What was discussed in the third call?
          </Text>
          
          <Text 
            variant="body-default-m"
            align="center"
            onBackground="neutral-medium"
          >
            That knowledge is already fading.
          </Text>

          <Flex direction="column" gap="s" alignItems="center">
            <Text
              variant="body-default-s"
              align="center"
              onBackground="neutral-weak"
            >
              Knowledge Loss Rate: 40% after 24 hours
            </Text>
            <Text
              variant="body-default-s"
              align="center"
              onBackground="neutral-weak"
            >
              /metrics/knowledge-retention
            </Text>
          </Flex>
        </Flex>
      </RevealFx>
    </Flex>
  );
}
