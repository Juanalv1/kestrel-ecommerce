'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getBestSellers } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import Button from '@/components/ui/Button';

export default function BestSellers() {
  const bestSellers = getBestSellers();

  return (
    <section className="py-20 bg-kestrel-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-2">
              Los Más Vendidos
            </h2>
            <p className="text-kestrel-light">
              Productos favoritos de nuestros clientes
            </p>
          </div>
          <Link href="/productos">
            <Button variant="outline" className="gap-2">
              Ver Todos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Products */}
        <ProductGrid products={bestSellers} columns={4} />
      </div>
    </section>
  );
}
