'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronRight, Instagram, MessageCircle } from 'lucide-react';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={cn(
          'fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-kestrel-dark z-50 transform transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <span className="text-xl font-display font-bold bg-gradient-to-r from-kestrel-pink to-kestrel-orange bg-clip-text text-transparent">
            KESTREL
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-kestrel-gold transition-colors"
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-white hover:text-kestrel-gold transition-colors"
          >
            Inicio
            <ChevronRight className="w-5 h-5 text-kestrel-light" />
          </Link>

          <div className="border-t border-white/10 my-2" />

          <p className="text-xs text-kestrel-light uppercase tracking-wider mb-2 mt-4">
            Categorías
          </p>

          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              onClick={onClose}
              className="flex items-center justify-between py-3 text-white hover:text-kestrel-gold transition-colors"
            >
              {category.nombre}
              <ChevronRight className="w-5 h-5 text-kestrel-light" />
            </Link>
          ))}

          <div className="border-t border-white/10 my-2" />

          <Link
            href="/productos"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-white hover:text-kestrel-gold transition-colors"
          >
            Todos los Productos
            <ChevronRight className="w-5 h-5 text-kestrel-light" />
          </Link>

          <Link
            href="/contacto"
            onClick={onClose}
            className="flex items-center justify-between py-3 text-white hover:text-kestrel-gold transition-colors"
          >
            Contacto
            <ChevronRight className="w-5 h-5 text-kestrel-light" />
          </Link>
        </nav>

        {/* Social Links */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <p className="text-xs text-kestrel-light uppercase tracking-wider mb-3">
            Síguenos
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/kestrel_ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-kestrel-gray rounded-lg text-white hover:text-kestrel-pink transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/584121234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-kestrel-gray rounded-lg text-white hover:text-green-500 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
