export type SpacingToken = 
  | '0' | '1' | '2' | '4' | '8' | '12' | '16' | '20' | '24' | '32'
  | '40' | '48' | '56' | '64' | '80' | '104' | '128' | '160'
  | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  | '3xl' | '4xl' | '5xl' | '6xl'
  | '-1';

export type ColorScheme = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
export type ColorWeight = 'weak' | 'medium' | 'strong';
export type TextVariant = `${string}-${string}-${string}`;

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
