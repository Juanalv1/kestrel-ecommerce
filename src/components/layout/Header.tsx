'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { categories } from '@/data/products';
import { cn } from '@/lib/utils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { getTotalItems, openCart } = useCartStore();
  const totalItems = getTotalItems();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-kestrel-black/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white hover:text-kestrel-gold transition-colors"
              aria-label="Abrir menú"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <span className="text-2xl sm:text-3xl font-display font-bold bg-gradient-to-r from-kestrel-pink to-kestrel-orange bg-clip-text text-transparent">
                  KESTREL
                </span>
                <span className="hidden sm:block text-xs text-kestrel-light tracking-widest">
                  E-COMMERCE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-white hover:text-kestrel-gold transition-colors font-medium"
              >
                Inicio
              </Link>
              <div className="relative group">
                <Link
                  href="/productos"
                  className="text-white hover:text-kestrel-gold transition-colors font-medium flex items-center gap-1"
                >
                  Productos
                </Link>
                {/* Dropdown */}
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-kestrel-dark border border-white/10 rounded-lg shadow-xl overflow-hidden min-w-[200px]">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/categoria/${category.slug}`}
                        className="block px-4 py-3 text-white hover:bg-kestrel-gray hover:text-kestrel-gold transition-colors"
                      >
                        {category.nombre}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/contacto"
                className="text-white hover:text-kestrel-gold transition-colors font-medium"
              >
                Contacto
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-white hover:text-kestrel-gold transition-colors"
                aria-label="Buscar"
              >
                {isSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2 text-white hover:text-kestrel-gold transition-colors"
                aria-label="Carrito"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-kestrel-pink to-kestrel-orange rounded-full text-xs font-bold flex items-center justify-center animate-pulse">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="pb-4 animate-fade-in">
              <input
                type="search"
                placeholder="Buscar productos..."
                className="w-full px-4 py-3 bg-kestrel-gray border border-white/10 rounded-lg text-white placeholder:text-kestrel-light/50 focus:outline-none focus:ring-2 focus:ring-kestrel-blue"
                autoFocus
              />
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
