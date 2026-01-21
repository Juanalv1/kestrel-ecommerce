'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-kestrel-blue hover:bg-kestrel-blue/90 text-white': variant === 'primary',
            'bg-gradient-to-r from-kestrel-pink to-kestrel-orange hover:opacity-90 text-white': variant === 'secondary',
            'border-2 border-white/20 hover:border-white/40 bg-transparent text-white': variant === 'outline',
            'bg-transparent hover:bg-white/10 text-white': variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm rounded-lg': size === 'sm',
            'px-6 py-3 text-base rounded-lg': size === 'md',
            'px-8 py-4 text-lg rounded-xl': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
