import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'sale' | 'new';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 text-xs font-bold uppercase tracking-wider rounded',
        {
          'bg-kestrel-gray text-white': variant === 'default',
          'bg-red-500 text-white': variant === 'sale',
          'bg-gradient-to-r from-kestrel-pink to-kestrel-orange text-white': variant === 'new',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
