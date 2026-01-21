'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { cn } from '@/lib/utils';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartDrawer() {
  const { items, isOpen, closeCart } = useCartStore();

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
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full sm:w-96 bg-kestrel-dark z-50 transform transition-transform duration-300 ease-out flex flex-col',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-kestrel-gold" />
            <span className="text-lg font-display font-bold text-white">
              Tu Carrito ({items.length})
            </span>
          </div>
          <button
            onClick={closeCart}
            className="p-2 text-white hover:text-kestrel-gold transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="w-16 h-16 text-kestrel-gray mb-4" />
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Tu carrito está vacío
            </h3>
            <p className="text-kestrel-light mb-6">
              Agrega productos para comenzar tu compra
            </p>
            <Link
              href="/productos"
              onClick={closeCart}
              className="px-6 py-3 bg-kestrel-blue text-white font-medium rounded-lg hover:bg-kestrel-blue/90 transition-colors"
            >
              Ver Productos
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.map((item) => (
                <CartItem
                  key={`${item.product.id}-${item.selectedColor}`}
                  item={item}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="p-4 border-t border-white/10 bg-kestrel-black">
              <CartSummary onCheckout={closeCart} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
