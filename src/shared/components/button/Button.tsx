'use client';

import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

import { ButtonVariant, ButtonVariants } from './Button.types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: ButtonVariant;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  icon,
  variant = ButtonVariants.primary,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'w-fit h-[50px] flex items-center justify-center gap-3 rounded-full px-6 text-base font-semibold shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: `
    bg-primary
    hover:bg-primary-hover
    text-surface
    active:bg-primary-hover
  `,
    secondary: `
    bg-secondary-button
    text-secondary-button-text
    hover:bg-secondary-button-hover
    active:bg-secondary-button-hover

    dark:bg-secondary-button-dark-theme
    dark:text-dark-button-text-dark-theme
    dark:hover:bg-color-surface
    dark:active:bg-color-surface
  `,
    dark: `
    bg-dark-button
    hover:bg-dark-button-hover
    text-text-muted
    active:bg-dark-button-hover

    dark:text-dark-button-text-dark-theme
    dark:hover:bg-surface-dark
    dark:active:bg-surface-dark
  `,
    warning: `
    bg-warning
    hover:bg-warning-soft
    text-surface
    active:bg-warning-soft
  `,
  };

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant], className, { 'w-full': fullWidth })}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
};
