import React from 'react';
import { Flex } from '@/once-ui/components/Flex';
import { Text } from '@/once-ui/components/Text';
import { Button } from '@/once-ui/components/Button';
import { RevealFx } from '@/once-ui/components/RevealFx';

interface NextStepProps {
  className?: string;
}

export function NextStep({ className }: NextStepProps) {
  return (
    <Flex 
      direction="column" 
      padding="xl"
      gap="l"
      background="brand-weak"
      alignItems="center"
      className={className}
    >
      <RevealFx>
        <Flex direction="column" gap="m" alignItems="center">
          <Text 
            variant="heading-strong-xl"
            align="center"
          >
            See it working in your environment
          </Text>
          
          <Text 
            variant="body-default-l"
            align="center"
            onBackground="brand-medium"
          >
            2-minute setup. No workflow changes.
          </Text>

          <Text
            variant="body-default-s"
            align="center"
            onBackground="neutral-weak"
          >
            /setup/quickstart
          </Text>

          <Button 
            variant="primary"
            size="l"
          >
            Watch a live demo →
          </Button>
        </Flex>
      </RevealFx>
    </Flex>
  );
}
