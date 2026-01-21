'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kestrel-black via-kestrel-dark to-kestrel-black" />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-kestrel-blue/30 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-kestrel-pink/20 rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-kestrel-light">36.5K seguidores en Instagram</span>
          </div>

          {/* Logo Text */}
          <h1 className="mb-6">
            <span className="block text-5xl sm:text-7xl lg:text-8xl font-display font-bold bg-gradient-to-r from-kestrel-pink via-kestrel-orange to-kestrel-gold bg-clip-text text-transparent">
              KESTREL
            </span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-display tracking-[0.3em] text-white mt-2">
              E-COMMERCE
            </span>
          </h1>

          {/* Slogan */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-kestrel-light font-light mb-4">
            ¡Lleva tus compras en línea a otras alturas!
          </p>

          <p className="text-lg text-kestrel-light/70 max-w-2xl mx-auto mb-10">
            Accesorios masculinos premium con estilo urbano y elegante.
            Envíos a toda Venezuela.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <Button size="lg" variant="secondary" className="gap-2">
                Explorar Colección
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/categoria/billeteras">
              <Button size="lg" variant="outline">
                Ver Billeteras
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-kestrel-light/50">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
