'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, color: string, quantity?: number) => void;
  removeItem: (productId: string, color: string) => void;
  updateQuantity: (productId: string, color: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, color, quantity = 1) => {
        const items = get().items;
        const existingItem = items.find(
          item => item.product.id === product.id && item.selectedColor === color
        );

        if (existingItem) {
          set({
            items: items.map(item =>
              item.product.id === product.id && item.selectedColor === color
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
            isOpen: true
          });
        } else {
          set({
            items: [...items, { product, quantity, selectedColor: color }],
            isOpen: true
          });
        }
      },

      removeItem: (productId, color) => {
        set({
          items: get().items.filter(
            item => !(item.product.id === productId && item.selectedColor === color)
          )
        });
      },

      updateQuantity: (productId, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, color);
          return;
        }

        set({
          items: get().items.map(item =>
            item.product.id === productId && item.selectedColor === color
              ? { ...item, quantity }
              : item
          )
        });
      },

      clearCart: () => set({ items: [] }),

      openCart: () => set({ isOpen: true }),

      closeCart: () => set({ isOpen: false }),

      toggleCart: () => set(state => ({ isOpen: !state.isOpen })),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.precio * item.quantity,
          0
        );
      }
    }),
    {
      name: 'kestrel-cart',
      partialize: (state) => ({ items: state.items })
    }
  )
);
