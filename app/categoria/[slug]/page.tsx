import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getCategoryBySlug, getProductsByCategory, categories } from '@/data/products';
import ProductGrid from '@/components/products/ProductGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Categoría no encontrada | Kestrel E-commerce',
    };
  }

  return {
    title: `${category.nombre} | Kestrel E-commerce`,
    description: category.descripcion,
    openGraph: {
      title: `${category.nombre} - Kestrel E-commerce`,
      description: category.descripcion,
      images: [category.imagen],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);

  return (
    <div className="pt-8">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src={category.imagen}
          alt={category.nombre}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kestrel-black via-kestrel-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <nav className="mb-4">
              <ol className="flex items-center gap-2 text-sm text-white/70">
                <li>
                  <a href="/" className="hover:text-white transition-colors">Inicio</a>
                </li>
                <li>/</li>
                <li>
                  <a href="/productos" className="hover:text-white transition-colors">Productos</a>
                </li>
                <li>/</li>
                <li className="text-white">{category.nombre}</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">
              {category.nombre}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              {category.descripcion}
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <p className="text-kestrel-light">
            {categoryProducts.length} productos encontrados
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <ProductGrid products={categoryProducts} columns={4} />
        ) : (
          <div className="text-center py-20">
            <p className="text-kestrel-light text-lg">
              No hay productos en esta categoría.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
