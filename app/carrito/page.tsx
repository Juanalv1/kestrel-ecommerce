'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { formatPrice, generateWhatsAppMessage } from '@/lib/utils';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function CarritoPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();

  const whatsappItems = items.map(item => ({
    nombre: item.product.nombre,
    color: item.selectedColor,
    quantity: item.quantity,
    precio: item.product.precio
  }));

  const whatsappMessage = generateWhatsAppMessage(whatsappItems, total);

  if (items.length === 0) {
    return (
      <div className="pt-8 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <ShoppingBag className="w-20 h-20 mx-auto text-kestrel-gray mb-6" />
            <h1 className="text-3xl font-display font-bold text-white mb-4">
              Tu carrito está vacío
            </h1>
            <p className="text-kestrel-light mb-8 max-w-md mx-auto">
              Parece que aún no has agregado ningún producto. Explora nuestra colección y encuentra algo que te guste.
            </p>
            <Link href="/productos">
              <Button size="lg" className="gap-2">
                <ArrowLeft className="w-5 h-5" />
                Ver Productos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Tu Carrito
            </h1>
            <p className="text-kestrel-light">
              {items.length} {items.length === 1 ? 'producto' : 'productos'}
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-kestrel-light hover:text-red-500 transition-colors"
          >
            Vaciar carrito
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedColor}`}
                className="bg-kestrel-gray rounded-xl p-4 sm:p-6 flex gap-4 sm:gap-6"
              >
                {/* Image */}
                <Link href={`/productos/${item.product.slug}`}>
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-kestrel-dark flex-shrink-0">
                    <Image
                      src={item.product.imagen}
                      alt={item.product.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <Link href={`/productos/${item.product.slug}`}>
                    <h3 className="text-white font-medium text-lg hover:text-kestrel-gold transition-colors">
                      {item.product.nombre}
                    </h3>
                  </Link>
                  <p className="text-sm text-kestrel-light mt-1">
                    Color: {item.selectedColor}
                  </p>
                  <p className="text-kestrel-gold font-bold text-xl mt-2">
                    {formatPrice(item.product.precio)}
                  </p>

                  {/* Quantity & Actions */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center bg-kestrel-dark rounded-lg text-white hover:bg-kestrel-blue transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-white font-medium text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedColor, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center bg-kestrel-dark rounded-lg text-white hover:bg-kestrel-blue transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="text-white font-bold">
                        {formatPrice(item.product.precio * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedColor)}
                        className="p-2 text-kestrel-light hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-kestrel-gray rounded-xl p-6 sticky top-32">
              <h2 className="text-xl font-display font-bold text-white mb-6">
                Resumen del Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-kestrel-light">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-kestrel-light">
                  <span>Envío</span>
                  <span>A coordinar</span>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <WhatsAppButton
                  message={decodeURIComponent(whatsappMessage)}
                  className="w-full"
                >
                  Finalizar por WhatsApp
                </WhatsAppButton>
                <Link href="/productos" className="block">
                  <Button variant="outline" className="w-full gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Seguir Comprando
                  </Button>
                </Link>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-kestrel-light mb-3">Métodos de pago aceptados:</p>
                <div className="flex flex-wrap gap-2">
                  {['Pago Móvil', 'Transferencia', 'Zelle', 'Binance Pay', 'USD'].map((method) => (
                    <span
                      key={method}
                      className="text-xs px-2 py-1 bg-kestrel-dark rounded text-kestrel-light"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shipping Info */}
              <div className="mt-4 p-4 bg-kestrel-dark rounded-lg">
                <p className="text-sm text-white font-medium mb-2">Información de envío</p>
                <ul className="text-xs text-kestrel-light space-y-1">
                  <li>• Caracas: 24-48 horas</li>
                  <li>• Nacional: 3-5 días hábiles</li>
                  <li>• MRW, Zoom, Tealca, Domesa</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
