'use client';

import { useCartStore } from '@/store/cartStore';
import { formatPrice, generateWhatsAppMessage } from '@/lib/utils';
import Button from '@/components/ui/Button';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface CartSummaryProps {
  onCheckout?: () => void;
}

export default function CartSummary({ onCheckout }: CartSummaryProps) {
  const { items, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  const whatsappItems = items.map(item => ({
    nombre: item.product.nombre,
    color: item.selectedColor,
    quantity: item.quantity,
    precio: item.product.precio
  }));

  const whatsappMessage = generateWhatsAppMessage(whatsappItems, total);

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="space-y-2">
        <div className="flex justify-between text-kestrel-light">
          <span>Subtotal</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-kestrel-light">
          <span>Envío</span>
          <span>A coordinar</span>
        </div>
        <div className="border-t border-white/10 pt-2">
          <div className="flex justify-between text-lg font-bold text-white">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3">
        <WhatsAppButton
          message={decodeURIComponent(whatsappMessage)}
          className="w-full"
        >
          Finalizar por WhatsApp
        </WhatsAppButton>
        {onCheckout && (
          <Button variant="outline" className="w-full" onClick={onCheckout}>
            Ver Carrito Completo
          </Button>
        )}
      </div>

      {/* Payment Methods */}
      <div className="pt-4 border-t border-white/10">
        <p className="text-xs text-kestrel-light mb-2">Métodos de pago:</p>
        <div className="flex flex-wrap gap-2">
          {['Pago Móvil', 'Zelle', 'Binance', 'USD'].map((method) => (
            <span
              key={method}
              className="text-xs px-2 py-1 bg-kestrel-gray rounded text-kestrel-light"
            >
              {method}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
