'use client';

import Link from 'next/link';
import { Sparkles, Truck, Shield, CreditCard } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function PromoSection() {
  return (
    <section className="py-20 bg-kestrel-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-kestrel-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-kestrel-pink/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-kestrel-pink to-kestrel-orange rounded-3xl p-8 sm:p-12 mb-16 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            ¡Ofertas Especiales!
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Descubre nuestros lentes con hasta 20% de descuento. Protección UV400 y estilo garantizado.
          </p>
          <Link href="/categoria/lentes">
            <Button size="lg" className="bg-white text-kestrel-pink hover:bg-white/90">
              Ver Ofertas
            </Button>
          </Link>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-kestrel-gray/50 rounded-2xl p-6 text-center group hover:bg-kestrel-gray transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-kestrel-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Truck className="w-7 h-7 text-kestrel-blue" />
            </div>
            <h3 className="text-white font-display font-bold mb-2">Envío Nacional</h3>
            <p className="text-sm text-kestrel-light">
              Enviamos a toda Venezuela con las mejores agencias
            </p>
          </div>

          <div className="bg-kestrel-gray/50 rounded-2xl p-6 text-center group hover:bg-kestrel-gray transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-kestrel-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-kestrel-gold" />
            </div>
            <h3 className="text-white font-display font-bold mb-2">Calidad Garantizada</h3>
            <p className="text-sm text-kestrel-light">
              Productos premium con garantía de satisfacción
            </p>
          </div>

          <div className="bg-kestrel-gray/50 rounded-2xl p-6 text-center group hover:bg-kestrel-gray transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <CreditCard className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="text-white font-display font-bold mb-2">Múltiples Pagos</h3>
            <p className="text-sm text-kestrel-light">
              Pago Móvil, Zelle, Binance, USD en efectivo
            </p>
          </div>

          <div className="bg-kestrel-gray/50 rounded-2xl p-6 text-center group hover:bg-kestrel-gray transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-kestrel-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-kestrel-pink" />
            </div>
            <h3 className="text-white font-display font-bold mb-2">Estilo Premium</h3>
            <p className="text-sm text-kestrel-light">
              Accesorios modernos para el hombre actual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
