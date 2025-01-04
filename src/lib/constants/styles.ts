// Desert System Design Tokens
// This system is bridged with Once UI tokens via bridge.scss

export const desertSystem = {
  // Foundation Colors
  foundation: {
    primary: 'var(--desert-color-primary)',
    secondary: 'var(--desert-color-secondary)',
    neutral: 'var(--desert-color-neutral)',
    background: {
      primary: 'var(--desert-bg-primary)',
      secondary: 'var(--desert-bg-secondary)',
      neutral: 'var(--desert-bg-neutral)',
    },
    text: {
      primary: 'var(--desert-text-primary)',
      secondary: 'var(--desert-text-secondary)',
      neutral: 'var(--desert-text-neutral)',
    }
  },
  
  // Spacing Scale
  spacing: {
    1: 'var(--desert-space-1)',  // 4px
    2: 'var(--desert-space-2)',  // 8px
    3: 'var(--desert-space-3)',  // 12px
    4: 'var(--desert-space-4)',  // 16px
    5: 'var(--desert-space-5)',  // 20px
    6: 'var(--desert-space-6)',  // 24px
    8: 'var(--desert-space-8)',  // 32px
    10: 'var(--desert-space-10)', // 40px
    12: 'var(--desert-space-12)', // 48px
  },
  
  // Border Radius
  radius: {
    sm: 'var(--desert-radius-sm)',
    md: 'var(--desert-radius-md)',
    lg: 'var(--desert-radius-lg)',
  },
  
  // Shadows
  shadow: {
    sm: 'var(--desert-shadow-sm)',
    md: 'var(--desert-shadow-md)',
    lg: 'var(--desert-shadow-lg)',
  }
};

// Export individual token groups for convenience
export const { foundation, spacing, radius, shadow } = desertSystem;
