import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, products, getProductsByCategory } from '@/data/products';
import ProductDetail from '@/components/products/ProductDetail';
import ProductGrid from '@/components/products/ProductGrid';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Producto no encontrado | Kestrel E-commerce',
    };
  }

  return {
    title: `${product.nombre} | Kestrel E-commerce`,
    description: product.descripcion,
    openGraph: {
      title: product.nombre,
      description: product.descripcion,
      images: [product.imagen],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categorySlug = product.categoria.toLowerCase().replace(/ /g, '-');
  const relatedProducts = getProductsByCategory(categorySlug)
    .filter(p => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-kestrel-light">
            <li>
              <a href="/" className="hover:text-white transition-colors">Inicio</a>
            </li>
            <li>/</li>
            <li>
              <a href="/productos" className="hover:text-white transition-colors">Productos</a>
            </li>
            <li>/</li>
            <li>
              <a
                href={`/categoria/${categorySlug}`}
                className="hover:text-white transition-colors"
              >
                {product.categoria}
              </a>
            </li>
            <li>/</li>
            <li className="text-white">{product.nombre}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <ProductDetail product={product} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              Productos Relacionados
            </h2>
            <ProductGrid products={relatedProducts} columns={4} />
          </section>
        )}
      </div>
    </div>
  );
}
