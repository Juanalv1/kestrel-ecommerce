'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Minus, Plus, ShoppingBag, Truck, Shield, Package } from 'lucide-react';
import { Product } from '@/types';
import { useCartStore } from '@/store/cartStore';
import { formatPrice, generateWhatsAppMessage } from '@/lib/utils';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import ColorSelector from './ColorSelector';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colores[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'descripcion' | 'caracteristicas' | 'envio'>('descripcion');
  const addItem = useCartStore(state => state.addItem);

  const hasDiscount = product.precioAnterior && product.precioAnterior > product.precio;
  const discountPercent = hasDiscount
    ? Math.round(((product.precioAnterior! - product.precio) / product.precioAnterior!) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, selectedColor, quantity);
  };

  const whatsappMessage = generateWhatsAppMessage(
    [{ nombre: product.nombre, color: selectedColor, quantity, precio: product.precio }],
    product.precio * quantity
  );

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-kestrel-gray">
          <Image
            src={product.imagen}
            alt={product.nombre}
            fill
            className="object-cover"
            priority
          />
          {hasDiscount && (
            <div className="absolute top-4 left-4">
              <Badge variant="sale">-{discountPercent}% OFF</Badge>
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <p className="text-sm text-kestrel-light uppercase tracking-wider mb-2">
            {product.categoria}
          </p>
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            {product.nombre}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-white">
              {formatPrice(product.precio)}
            </span>
            {hasDiscount && (
              <>
                <span className="text-xl text-kestrel-light line-through">
                  {formatPrice(product.precioAnterior!)}
                </span>
                <Badge variant="sale">Ahorra ${(product.precioAnterior! - product.precio).toFixed(2)}</Badge>
              </>
            )}
          </div>
        </div>

        {/* Color Selector */}
        <ColorSelector
          colors={product.colores}
          selectedColor={selectedColor}
          onSelect={setSelectedColor}
        />

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-kestrel-light">Cantidad:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 flex items-center justify-center bg-kestrel-gray rounded-lg text-white hover:bg-kestrel-blue transition-colors"
            >
              <Minus className="w-5 h-5" />
            </button>
            <span className="w-16 text-center text-xl text-white font-medium">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 flex items-center justify-center bg-kestrel-gray rounded-lg text-white hover:bg-kestrel-blue transition-colors"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={handleAddToCart} size="lg" className="flex-1 gap-2">
            <ShoppingBag className="w-5 h-5" />
            Agregar al Carrito
          </Button>
          <WhatsAppButton
            message={decodeURIComponent(whatsappMessage)}
            className="flex-1"
          >
            Comprar por WhatsApp
          </WhatsAppButton>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-white/10">
          <div className="text-center">
            <Truck className="w-6 h-6 mx-auto text-kestrel-gold mb-2" />
            <p className="text-xs text-kestrel-light">Envío Nacional</p>
          </div>
          <div className="text-center">
            <Shield className="w-6 h-6 mx-auto text-kestrel-gold mb-2" />
            <p className="text-xs text-kestrel-light">Pago Seguro</p>
          </div>
          <div className="text-center">
            <Package className="w-6 h-6 mx-auto text-kestrel-gold mb-2" />
            <p className="text-xs text-kestrel-light">Calidad Premium</p>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex gap-4 border-b border-white/10">
            {(['descripcion', 'caracteristicas', 'envio'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-kestrel-gold border-b-2 border-kestrel-gold'
                    : 'text-kestrel-light hover:text-white'
                }`}
              >
                {tab === 'descripcion' && 'Descripción'}
                {tab === 'caracteristicas' && 'Características'}
                {tab === 'envio' && 'Envío'}
              </button>
            ))}
          </div>

          <div className="py-6">
            {activeTab === 'descripcion' && (
              <p className="text-kestrel-light leading-relaxed">
                {product.descripcion}
              </p>
            )}

            {activeTab === 'caracteristicas' && (
              <ul className="space-y-3">
                {product.caracteristicas.map((caracteristica, index) => (
                  <li key={index} className="flex items-center gap-3 text-kestrel-light">
                    <span className="w-2 h-2 bg-kestrel-gold rounded-full" />
                    {caracteristica}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === 'envio' && (
              <div className="space-y-4 text-kestrel-light">
                <p>
                  <strong className="text-white">Envíos a toda Venezuela</strong>
                </p>
                <ul className="space-y-2">
                  <li>• Delivery en Caracas: 24-48 horas</li>
                  <li>• Envíos nacionales: 3-5 días hábiles</li>
                  <li>• Opciones: MRW, Zoom, Tealca, Domesa</li>
                </ul>
                <p className="text-sm mt-4">
                  <strong className="text-white">Métodos de pago:</strong> Pago Móvil, Transferencia, Zelle, Binance Pay, Efectivo (USD)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
