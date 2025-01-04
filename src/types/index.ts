export type SpacingToken = 
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl';

export type AnimationVariant = {
  initial: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  animate: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
  };
  exit?: {
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
  };
};

export type AnimationTransition = {
  duration: number;
  ease: number[];
  delay?: number;
};
