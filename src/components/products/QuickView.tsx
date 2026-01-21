'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import ColorSelector from './ColorSelector';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface QuickViewProps {
  product: Product;
  onClose: () => void;
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  const [selectedColor, setSelectedColor] = useState(product.colores[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
    onClose();
  };

  const hasDiscount = product.precioAnterior && product.precioAnterior > product.precio;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-kestrel-dark rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-kestrel-gray rounded-full text-white hover:text-kestrel-gold transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square">
            <Image
              src={product.imagen}
              alt={product.nombre}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col">
            <p className="text-xs text-kestrel-light uppercase tracking-wider mb-2">
              {product.categoria}
            </p>
            <h2 className="text-2xl font-display font-bold text-white mb-3">
              {product.nombre}
            </h2>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-white">
                {formatPrice(product.precio)}
              </span>
              {hasDiscount && (
                <span className="text-lg text-red-500 line-through">
                  {formatPrice(product.precioAnterior!)}
                </span>
              )}
            </div>

            <p className="text-kestrel-light text-sm mb-6">
              {product.descripcion}
            </p>

            {/* Color Selector */}
            <div className="mb-6">
              <ColorSelector
                colors={product.colores}
                selectedColor={selectedColor}
                onSelect={setSelectedColor}
              />
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-kestrel-light">Cantidad:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center bg-kestrel-gray rounded-lg text-white hover:bg-kestrel-blue transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-white font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center bg-kestrel-gray rounded-lg text-white hover:bg-kestrel-blue transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mt-auto">
              <Button onClick={handleAddToCart} className="w-full gap-2">
                <ShoppingBag className="w-5 h-5" />
                Agregar al Carrito
              </Button>
              <WhatsAppButton
                message={`¡Hola! Me interesa el producto: ${product.nombre} (${selectedColor})`}
                className="w-full"
              />
            </div>

            {/* View full details */}
            <Link
              href={`/productos/${product.slug}`}
              className="block mt-4 text-center text-sm text-kestrel-light hover:text-kestrel-gold transition-colors"
              onClick={onClose}
            >
              Ver detalles completos →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
