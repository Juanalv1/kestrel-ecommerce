import { Product, Category } from '@/types';

export const categories: Category[] = [
  {
    nombre: 'Billeteras',
    slug: 'billeteras',
    imagen: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
    descripcion: 'Billeteras de cuero premium para el hombre moderno'
  },
  {
    nombre: 'Bolsos',
    slug: 'bolsos',
    imagen: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    descripcion: 'Bolsos y riñoneras urbanas de alta calidad'
  },
  {
    nombre: 'Lentes',
    slug: 'lentes',
    imagen: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
    descripcion: 'Lentes de sol con estilo y protección UV400'
  },
  {
    nombre: 'Accesorios',
    slug: 'accesorios',
    imagen: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
    descripcion: 'Collares, pulseras y accesorios únicos'
  },
  {
    nombre: 'Carteras Damas',
    slug: 'carteras-damas',
    imagen: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    descripcion: 'Carteras elegantes para damas'
  }
];

export const products: Product[] = [
  // BILLETERAS
  {
    id: 'billetera-clasica-texturizada',
    nombre: 'Billetera Clásica Texturizada',
    precio: 15,
    descripcion: 'Billetera de cuero sintético premium con textura elegante. Diseño compacto y funcional.',
    imagen: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=800',
    caracteristicas: ['Cuero sintético premium', '6 ranuras para tarjetas', 'Compartimento para billetes', 'Diseño slim'],
    colores: ['Negro', 'Café'],
    categoria: 'Billeteras',
    slug: 'billetera-clasica-texturizada'
  },
  {
    id: 'billetera-tradicional-mate',
    nombre: 'Billetera Tradicional Mate',
    precio: 18,
    descripcion: 'Billetera clásica con acabado mate y texturizado. Amplio espacio para tarjetas y efectivo.',
    imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    caracteristicas: ['Acabado mate premium', '8 ranuras para tarjetas', 'Ventana para ID', 'Compartimento con cierre'],
    colores: ['Negro', 'Azul marino'],
    categoria: 'Billeteras',
    slug: 'billetera-tradicional-mate'
  },
  {
    id: 'billetera-mate-elegante',
    nombre: 'Billetera Mate Elegante',
    precio: 20,
    descripcion: 'Combinación perfecta de lo clásico y lo moderno. Acabado mate con detalles refinados.',
    imagen: 'https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800',
    caracteristicas: ['Diseño bifold', 'Protección RFID', '10 ranuras para tarjetas', 'Caja de regalo incluida'],
    colores: ['Negro'],
    categoria: 'Billeteras',
    slug: 'billetera-mate-elegante'
  },
  {
    id: 'tarjetero-slim',
    nombre: 'Tarjetero Slim',
    precio: 10,
    descripcion: 'Tarjetero minimalista para el hombre moderno. Ultra delgado y práctico.',
    imagen: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=800',
    caracteristicas: ['Ultra slim', '4 ranuras', 'Clip para billetes', 'Aluminio y cuero'],
    colores: ['Negro', 'Gris', 'Café'],
    categoria: 'Billeteras',
    slug: 'tarjetero-slim'
  },
  // BOLSOS
  {
    id: 'bolso-koala-impermeable',
    nombre: 'Bolso Koala Impermeable',
    precio: 25,
    descripcion: 'Bolso de cintura impermeable perfecto para viajes y uso diario. Múltiples compartimentos.',
    imagen: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800',
    caracteristicas: ['Material impermeable', '3 compartimentos', 'Correa ajustable', 'Cierre YKK'],
    colores: ['Negro'],
    categoria: 'Bolsos',
    slug: 'bolso-koala-impermeable'
  },
  {
    id: 'bolso-bandolero-urbano',
    nombre: 'Bolso Bandolero Urbano',
    precio: 28,
    descripcion: 'Bolso cruzado estilo urbano con diseño ergonómico. Ideal para el día a día.',
    imagen: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
    caracteristicas: ['Diseño ergonómico', 'Puerto USB integrado', 'Múltiples bolsillos', 'Anti-robo'],
    colores: ['Negro', 'Gris'],
    categoria: 'Bolsos',
    slug: 'bolso-bandolero-urbano'
  },
  {
    id: 'rinonera-deportiva',
    nombre: 'Riñonera Deportiva',
    precio: 18,
    descripcion: 'Riñonera versátil para actividades deportivas y uso casual.',
    imagen: 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800',
    caracteristicas: ['Ligera', 'Resistente al agua', 'Bolsillo oculto', 'Reflectante'],
    colores: ['Negro', 'Gris', 'Azul'],
    categoria: 'Bolsos',
    slug: 'rinonera-deportiva'
  },
  // LENTES
  {
    id: 'lentes-modernos-hexagonales',
    nombre: 'Lentes Modernos Hexagonales',
    precio: 35,
    precioAnterior: 45,
    descripcion: 'Lentes de sol con marco hexagonal único. Estilo retro-moderno.',
    imagen: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800',
    caracteristicas: ['Protección UV400', 'Marco metálico', 'Lentes polarizados', 'Estuche incluido'],
    colores: ['Dorado/Verde', 'Plateado/Azul', 'Negro/Gris'],
    categoria: 'Lentes',
    slug: 'lentes-modernos-hexagonales'
  },
  {
    id: 'lentes-aviador-clasicos',
    nombre: 'Lentes Aviador Clásicos',
    precio: 30,
    descripcion: 'El clásico estilo aviador que nunca pasa de moda.',
    imagen: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800',
    caracteristicas: ['Protección UV400', 'Marco dorado', 'Lentes degradados', 'Paño de limpieza'],
    colores: ['Dorado/Marrón', 'Plateado/Gris', 'Negro/Negro'],
    categoria: 'Lentes',
    slug: 'lentes-aviador-clasicos'
  },
  {
    id: 'lentes-steampunk',
    nombre: 'Lentes Steampunk',
    precio: 38,
    descripcion: 'Diseño único estilo steampunk con detalles metálicos laterales.',
    imagen: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800',
    caracteristicas: ['Estilo único', 'Protectores laterales', 'Marco resistente', 'Edición limitada'],
    colores: ['Bronce', 'Plateado', 'Negro'],
    categoria: 'Lentes',
    slug: 'lentes-steampunk'
  },
  {
    id: 'lentes-cuadrados-vintage',
    nombre: 'Lentes Cuadrados Vintage',
    precio: 32,
    descripcion: 'Marco cuadrado con estética vintage para un look sofisticado.',
    imagen: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800',
    caracteristicas: ['Marco acetato', 'Bisagras reforzadas', 'Lentes CR-39', 'Funda rígida'],
    colores: ['Carey', 'Negro', 'Cristal'],
    categoria: 'Lentes',
    slug: 'lentes-cuadrados-vintage'
  },
  // ACCESORIOS
  {
    id: 'set-collares-inicial',
    nombre: 'Set de Collares con Inicial',
    precio: 12,
    descripcion: 'Collar de cadena con dije de letra inicial. Personaliza tu estilo.',
    imagen: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800',
    caracteristicas: ['Acero inoxidable', 'Todas las letras disponibles', '45cm + 5cm extensión', 'Hipoalergénico'],
    colores: ['Plateado', 'Dorado', 'Negro'],
    categoria: 'Accesorios',
    slug: 'set-collares-inicial'
  },
  {
    id: 'collar-cadena-cubana',
    nombre: 'Collar Cadena Cubana',
    precio: 15,
    descripcion: 'Cadena cubana gruesa estilo hip-hop. Elegancia urbana.',
    imagen: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800',
    caracteristicas: ['Acero inoxidable 316L', 'Ancho 8mm', '50cm largo', 'Cierre de seguridad'],
    colores: ['Plateado', 'Dorado'],
    categoria: 'Accesorios',
    slug: 'collar-cadena-cubana'
  },
  {
    id: 'gorro-beanie-premium',
    nombre: 'Gorro Beanie Premium',
    precio: 12,
    descripcion: 'Gorro tejido premium para el invierno. Suave y cálido.',
    imagen: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800',
    caracteristicas: ['100% acrílico', 'Talla única', 'Doble capa', 'Etiqueta de cuero'],
    colores: ['Negro', 'Gris', 'Azul marino', 'Burdeos'],
    categoria: 'Accesorios',
    slug: 'gorro-beanie-premium'
  },
  {
    id: 'set-pulseras-masculinas',
    nombre: 'Set de Pulseras Masculinas',
    precio: 18,
    descripcion: 'Set de 3 pulseras con diferentes estilos. Combínalas a tu gusto.',
    imagen: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800',
    caracteristicas: ['3 pulseras incluidas', 'Cuero y acero', 'Ajustables', 'Caja de regalo'],
    colores: ['Negro/Plateado'],
    categoria: 'Accesorios',
    slug: 'set-pulseras-masculinas'
  },
  // CARTERAS DAMAS
  {
    id: 'set-carteras-4-piezas',
    nombre: 'Set de Carteras 4 Piezas',
    precio: 45,
    descripcion: 'Set completo de 4 carteras combinables. Elegancia para toda ocasión.',
    imagen: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    caracteristicas: ['4 piezas', 'Cuero sintético', 'Herrajes dorados', 'Múltiples compartimentos'],
    colores: ['Negro', 'Café', 'Beige'],
    categoria: 'Carteras Damas',
    slug: 'set-carteras-4-piezas'
  },
  {
    id: 'cartera-tote-elegante',
    nombre: 'Cartera Tote Elegante',
    precio: 35,
    descripcion: 'Cartera tipo tote espaciosa y elegante para el día a día.',
    imagen: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800',
    caracteristicas: ['Gran capacidad', 'Bolsillo interior', 'Correa removible', 'Base reforzada'],
    colores: ['Negro', 'Burdeos', 'Nude'],
    categoria: 'Carteras Damas',
    slug: 'cartera-tote-elegante'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  const category = categories.find(c => c.slug === categorySlug);
  if (!category) return [];
  return products.filter(p => p.categoria === category.nombre);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.precioAnterior || p.precio >= 25).slice(0, 8);
}

export function getBestSellers(): Product[] {
  return [
    products[0], // Billetera Clásica
    products[7], // Lentes Hexagonales
    products[4], // Bolso Koala
    products[11] // Set de Collares
  ];
}
