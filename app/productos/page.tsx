'use client';

import { useState, useMemo } from 'react';
import { Filter, Grid, List, SortAsc } from 'lucide-react';
import { products, categories } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';
import Button from '@/components/ui/Button';

type SortOption = 'nombre' | 'precio-asc' | 'precio-desc';

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('nombre');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== 'all') {
      const category = categories.find(c => c.slug === selectedCategory);
      if (category) {
        filtered = filtered.filter(p => p.categoria === category.nombre);
      }
    }

    // Sort
    switch (sortBy) {
      case 'nombre':
        filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'precio-asc':
        filtered.sort((a, b) => a.precio - b.precio);
        break;
      case 'precio-desc':
        filtered.sort((a, b) => b.precio - a.precio);
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-white mb-2">
            Todos los Productos
          </h1>
          <p className="text-kestrel-light">
            {filteredProducts.length} productos encontrados
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Filtros
            </Button>

            {/* Category Pills - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-kestrel-blue text-white'
                    : 'bg-kestrel-gray text-kestrel-light hover:text-white'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-kestrel-blue text-white'
                      : 'bg-kestrel-gray text-kestrel-light hover:text-white'
                  }`}
                >
                  {category.nombre}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SortAsc className="w-4 h-4 text-kestrel-light" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-kestrel-gray border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-kestrel-blue"
            >
              <option value="nombre">Nombre A-Z</option>
              <option value="precio-asc">Precio: Menor a Mayor</option>
              <option value="precio-desc">Precio: Mayor a Menor</option>
            </select>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="lg:hidden mb-6 p-4 bg-kestrel-gray rounded-xl animate-fade-in">
            <h3 className="text-white font-medium mb-3">Categorías</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-kestrel-blue text-white'
                    : 'bg-kestrel-dark text-kestrel-light'
                }`}
              >
                Todos
              </button>
              {categories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    selectedCategory === category.slug
                      ? 'bg-kestrel-blue text-white'
                      : 'bg-kestrel-dark text-kestrel-light'
                  }`}
                >
                  {category.nombre}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <div className="text-center py-20">
            <p className="text-kestrel-light text-lg">
              No se encontraron productos con los filtros seleccionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
