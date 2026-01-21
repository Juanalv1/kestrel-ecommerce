'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Eye } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import Badge from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const addItem = useCartStore(state => state.addItem);

  const hasDiscount = product.precioAnterior && product.precioAnterior > product.precio;
  const discountPercent = hasDiscount
    ? Math.round(((product.precioAnterior! - product.precio) / product.precioAnterior!) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.colores[0]);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView?.(product);
  };

  return (
    <Link href={`/productos/${product.slug}`}>
      <div
        className="group relative bg-kestrel-gray rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-kestrel-blue/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          {/* Skeleton loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-kestrel-dark animate-pulse" />
          )}

          <Image
            src={product.imagen}
            alt={product.nombre}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {hasDiscount && (
              <Badge variant="sale">-{discountPercent}%</Badge>
            )}
          </div>

          {/* Quick Actions */}
          <div
            className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-kestrel-black font-medium rounded-lg hover:bg-kestrel-gold transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm">Agregar</span>
            </button>
            {onQuickView && (
              <button
                onClick={handleQuickView}
                className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-xs text-kestrel-light uppercase tracking-wider mb-1">
            {product.categoria}
          </p>
          <h3 className="text-white font-medium mb-2 line-clamp-1 group-hover:text-kestrel-gold transition-colors">
            {product.nombre}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              {formatPrice(product.precio)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-kestrel-light line-through">
                {formatPrice(product.precioAnterior!)}
              </span>
            )}
          </div>

          {/* Colors */}
          <div className="flex items-center gap-1 mt-3">
            {product.colores.slice(0, 4).map((color, index) => (
              <span
                key={index}
                className="text-xs text-kestrel-light"
              >
                {color}{index < Math.min(product.colores.length, 4) - 1 ? ' •' : ''}
              </span>
            ))}
            {product.colores.length > 4 && (
              <span className="text-xs text-kestrel-light">+{product.colores.length - 4}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
