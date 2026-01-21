'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-kestrel-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Explora Nuestras Categorías
          </h2>
          <p className="text-kestrel-light max-w-2xl mx-auto">
            Encuentra el accesorio perfecto para tu estilo. Calidad premium a precios accesibles.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 3).map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src={category.imagen}
                alt={category.nombre}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-kestrel-gold transition-colors">
                  {category.nombre}
                </h3>
                <p className="text-sm text-kestrel-light mb-4 line-clamp-2">
                  {category.descripcion}
                </p>
                <div className="flex items-center gap-2 text-kestrel-gold font-medium">
                  <span>Ver productos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {categories.slice(3, 5).map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative aspect-[2/1] rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <Image
                src={category.imagen}
                alt={category.nombre}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center p-6">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-kestrel-gold transition-colors">
                  {category.nombre}
                </h3>
                <p className="text-sm text-kestrel-light mb-4 max-w-xs">
                  {category.descripcion}
                </p>
                <div className="flex items-center gap-2 text-kestrel-gold font-medium">
                  <span>Ver productos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
