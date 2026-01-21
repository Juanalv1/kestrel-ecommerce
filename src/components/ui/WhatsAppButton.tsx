'use client';

import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'fixed' | 'inline';
}

const WHATSAPP_PHONE = '584121234567'; // Reemplazar con número real

export default function WhatsAppButton({
  message = '¡Hola! Me interesa obtener más información sobre sus productos.',
  phone = WHATSAPP_PHONE,
  className,
  children,
  variant = 'inline'
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  if (variant === 'fixed') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'flex items-center justify-center',
          'w-14 h-14 rounded-full',
          'bg-green-500 hover:bg-green-600',
          'shadow-lg shadow-green-500/30',
          'transition-all duration-300 hover:scale-110',
          className
        )}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'px-6 py-3 rounded-lg',
        'bg-green-500 hover:bg-green-600',
        'text-white font-medium',
        'transition-all duration-300',
        className
      )}
    >
      <MessageCircle className="w-5 h-5" />
      {children || 'Pedir por WhatsApp'}
    </a>
  );
}
