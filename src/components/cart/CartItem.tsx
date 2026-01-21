'use client';

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { formatPrice } from '@/lib/utils';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-4 border-b border-white/10">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-kestrel-gray flex-shrink-0">
        <Image
          src={item.product.imagen}
          alt={item.product.nombre}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h4 className="text-white font-medium text-sm line-clamp-1">
          {item.product.nombre}
        </h4>
        <p className="text-xs text-kestrel-light mt-1">
          Color: {item.selectedColor}
        </p>
        <p className="text-kestrel-gold font-medium mt-1">
          {formatPrice(item.product.precio)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
              className="w-7 h-7 flex items-center justify-center bg-kestrel-gray rounded text-white hover:bg-kestrel-blue transition-colors"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-white text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
              className="w-7 h-7 flex items-center justify-center bg-kestrel-gray rounded text-white hover:bg-kestrel-blue transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.product.id, item.selectedColor)}
            className="p-2 text-kestrel-light hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
