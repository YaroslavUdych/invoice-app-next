export const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  dark: 'dark',
  warning: 'warning',
} as const;

export type ButtonVariant = (typeof ButtonVariants)[keyof typeof ButtonVariants];
