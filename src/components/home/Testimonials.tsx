'use client';

import { Star, Instagram } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    location: 'Caracas',
    text: 'Excelente calidad en las billeteras. La textura es premium y el envío llegó muy rápido.',
    rating: 5,
    product: 'Billetera Clásica'
  },
  {
    name: 'José R.',
    location: 'Valencia',
    text: 'Los lentes hexagonales son increíbles. La protección UV es real y el estilo es único.',
    rating: 5,
    product: 'Lentes Hexagonales'
  },
  {
    name: 'Miguel A.',
    location: 'Maracaibo',
    text: 'El bolso bandolero es perfecto para el día a día. El puerto USB es muy práctico.',
    rating: 5,
    product: 'Bolso Bandolero'
  },
  {
    name: 'Andrea P.',
    location: 'Barquisimeto',
    text: 'El set de carteras es hermoso. Cuatro piezas de excelente calidad a un precio increíble.',
    rating: 5,
    product: 'Set de Carteras'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-kestrel-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-kestrel-light max-w-2xl mx-auto">
            Más de 36.5K seguidores confían en nosotros. Lee las experiencias de nuestra comunidad.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-kestrel-gray/50 rounded-2xl p-6 border border-white/5 hover:border-kestrel-gold/30 transition-colors"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-kestrel-gold text-kestrel-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white mb-4 text-sm leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Product tag */}
              <span className="inline-block text-xs px-2 py-1 bg-kestrel-blue/20 text-kestrel-blue rounded mb-4">
                {testimonial.product}
              </span>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-kestrel-light text-xs">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/kestrel_ecommerce"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-5 h-5" />
            Síguenos en Instagram @kestrel_ecommerce
          </a>
        </div>
      </div>
    </section>
  );
}
