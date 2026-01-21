# Prompt para Claude Code - Kestrel E-commerce

## Instrucción Principal

Crea un e-commerce completo en Next.js 14+ (App Router) con TypeScript y Tailwind CSS para **Kestrel E-commerce**, una tienda venezolana de accesorios masculinos premium. Usa imágenes reales de productos desde URLs externas (configura next.config.js para dominios de imágenes). Al finalizar, crea el repositorio en GitHub y haz deploy a Vercel.

---

## Información de la Marca

### Identidad
- **Nombre**: Kestrel E-commerce
- **Slogan**: "¡Lleva tus compras en línea a otras alturas!"
- **Instagram**: @kestrel_ecommerce (36.5K seguidores)
- **Descripción**: Tienda de accesorios masculinos con estilo urbano moderno y elegante
- **Logo**: Águila/halcón estilizado con alas extendidas y texto "KESTREL E-COMMERCE"

### Personalidad de Marca
- Premium pero accesible
- Masculino y urbano
- Moderno y sofisticado
- Confiable y profesional

### Paleta de Colores
- **Fondo principal**: Negro (#0a0a0a, #111111)
- **Fondo secundario**: Gris oscuro (#1a1a1a, #222222)
- **Texto principal**: Blanco (#ffffff)
- **Texto secundario**: Gris claro (#a0a0a0)
- **Acento primario**: Azul eléctrico (#4361ee)
- **Acento secundario**: Dorado sutil (#c9a96e)
- **Gradiente del logo**: Rosa/Magenta a Naranja (#ff6b9d → #ffa500)

---

## Catálogo de Productos

### 1. BILLETERAS

```javascript
{
  categoria: "Billeteras",
  productos: [
    {
      nombre: "Billetera Clásica Texturizada",
      precio: 15,
      descripcion: "Billetera de cuero sintético premium con textura elegante. Diseño compacto y funcional.",
      imagen: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800",
      caracteristicas: ["Cuero sintético premium", "6 ranuras para tarjetas", "Compartimento para billetes", "Diseño slim"],
      colores: ["Negro", "Café"]
    },
    {
      nombre: "Billetera Tradicional Mate",
      precio: 18,
      descripcion: "Billetera clásica con acabado mate y texturizado. Amplio espacio para tarjetas y efectivo.",
      imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      caracteristicas: ["Acabado mate premium", "8 ranuras para tarjetas", "Ventana para ID", "Compartimento con cierre"],
      colores: ["Negro", "Azul marino"]
    },
    {
      nombre: "Billetera Mate Elegante",
      precio: 20,
      descripcion: "Combinación perfecta de lo clásico y lo moderno. Acabado mate con detalles refinados.",
      imagen: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800",
      caracteristicas: ["Diseño bifold", "Protección RFID", "10 ranuras para tarjetas", "Caja de regalo incluida"],
      colores: ["Negro"]
    },
    {
      nombre: "Tarjetero Slim",
      precio: 10,
      descripcion: "Tarjetero minimalista para el hombre moderno. Ultra delgado y práctico.",
      imagen: "https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=800",
      caracteristicas: ["Ultra slim", "4 ranuras", "Clip para billetes", "Aluminio y cuero"],
      colores: ["Negro", "Gris", "Café"]
    }
  ]
}
```

### 2. BOLSOS

```javascript
{
  categoria: "Bolsos",
  productos: [
    {
      nombre: "Bolso Koala Impermeable",
      precio: 25,
      descripcion: "Bolso de cintura impermeable perfecto para viajes y uso diario. Múltiples compartimentos.",
      imagen: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
      caracteristicas: ["Material impermeable", "3 compartimentos", "Correa ajustable", "Cierre YKK"],
      colores: ["Negro"]
    },
    {
      nombre: "Bolso Bandolero Urbano",
      precio: 28,
      descripcion: "Bolso cruzado estilo urbano con diseño ergonómico. Ideal para el día a día.",
      imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      caracteristicas: ["Diseño ergonómico", "Puerto USB integrado", "Múltiples bolsillos", "Anti-robo"],
      colores: ["Negro", "Gris"]
    },
    {
      nombre: "Riñonera Deportiva",
      precio: 18,
      descripcion: "Riñonera versátil para actividades deportivas y uso casual.",
      imagen: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=800",
      caracteristicas: ["Ligera", "Resistente al agua", "Bolsillo oculto", "Reflectante"],
      colores: ["Negro", "Gris", "Azul"]
    }
  ]
}
```

### 3. LENTES

```javascript
{
  categoria: "Lentes",
  productos: [
    {
      nombre: "Lentes Modernos Hexagonales",
      precio: 35,
      precioAnterior: 45,
      descripcion: "Lentes de sol con marco hexagonal único. Estilo retro-moderno.",
      imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
      caracteristicas: ["Protección UV400", "Marco metálico", "Lentes polarizados", "Estuche incluido"],
      colores: ["Dorado/Verde", "Plateado/Azul", "Negro/Gris"]
    },
    {
      nombre: "Lentes Aviador Clásicos",
      precio: 30,
      descripcion: "El clásico estilo aviador que nunca pasa de moda.",
      imagen: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
      caracteristicas: ["Protección UV400", "Marco dorado", "Lentes degradados", "Paño de limpieza"],
      colores: ["Dorado/Marrón", "Plateado/Gris", "Negro/Negro"]
    },
    {
      nombre: "Lentes Steampunk",
      precio: 38,
      descripcion: "Diseño único estilo steampunk con detalles metálicos laterales.",
      imagen: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800",
      caracteristicas: ["Estilo único", "Protectores laterales", "Marco resistente", "Edición limitada"],
      colores: ["Bronce", "Plateado", "Negro"]
    },
    {
      nombre: "Lentes Cuadrados Vintage",
      precio: 32,
      descripcion: "Marco cuadrado con estética vintage para un look sofisticado.",
      imagen: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800",
      caracteristicas: ["Marco acetato", "Bisagras reforzadas", "Lentes CR-39", "Funda rígida"],
      colores: ["Carey", "Negro", "Cristal"]
    }
  ]
}
```

### 4. ACCESORIOS

```javascript
{
  categoria: "Accesorios",
  productos: [
    {
      nombre: "Set de Collares con Inicial",
      precio: 12,
      descripcion: "Collar de cadena con dije de letra inicial. Personaliza tu estilo.",
      imagen: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800",
      caracteristicas: ["Acero inoxidable", "Todas las letras disponibles", "45cm + 5cm extensión", "Hipoalergénico"],
      colores: ["Plateado", "Dorado", "Negro"]
    },
    {
      nombre: "Collar Cadena Cubana",
      precio: 15,
      descripcion: "Cadena cubana gruesa estilo hip-hop. Elegancia urbana.",
      imagen: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
      caracteristicas: ["Acero inoxidable 316L", "Ancho 8mm", "50cm largo", "Cierre de seguridad"],
      colores: ["Plateado", "Dorado"]
    },
    {
      nombre: "Gorro Beanie Premium",
      precio: 12,
      descripcion: "Gorro tejido premium para el invierno. Suave y cálido.",
      imagen: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800",
      caracteristicas: ["100% acrílico", "Talla única", "Doble capa", "Etiqueta de cuero"],
      colores: ["Negro", "Gris", "Azul marino", "Burdeos"]
    },
    {
      nombre: "Set de Pulseras Masculinas",
      precio: 18,
      descripcion: "Set de 3 pulseras con diferentes estilos. Combínalas a tu gusto.",
      imagen: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800",
      caracteristicas: ["3 pulseras incluidas", "Cuero y acero", "Ajustables", "Caja de regalo"],
      colores: ["Negro/Plateado"]
    }
  ]
}
```

### 5. CARTERAS PARA DAMAS

```javascript
{
  categoria: "Carteras Damas",
  productos: [
    {
      nombre: "Set de Carteras 4 Piezas",
      precio: 45,
      descripcion: "Set completo de 4 carteras combinables. Elegancia para toda ocasión.",
      imagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
      caracteristicas: ["4 piezas", "Cuero sintético", "Herrajes dorados", "Múltiples compartimentos"],
      colores: ["Negro", "Café", "Beige"]
    },
    {
      nombre: "Cartera Tote Elegante",
      precio: 35,
      descripcion: "Cartera tipo tote espaciosa y elegante para el día a día.",
      imagen: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800",
      caracteristicas: ["Gran capacidad", "Bolsillo interior", "Correa removible", "Base reforzada"],
      colores: ["Negro", "Burdeos", "Nude"]
    }
  ]
}
```

---

## Estructura del Proyecto

```
kestrel-ecommerce/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── productos/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── categoria/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── carrito/
│   │   │   └── page.tsx
│   │   └── contacto/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── AnnouncementBar.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedCategories.tsx
│   │   │   ├── BestSellers.tsx
│   │   │   ├── PromoSection.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductDetail.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ColorSelector.tsx
│   │   │   └── QuickView.tsx
│   │   ├── cart/
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CartItem.tsx
│   │   │   └── CartSummary.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       ├── Input.tsx
│   │       └── WhatsAppButton.tsx
│   ├── data/
│   │   └── products.ts
│   ├── store/
│   │   └── cartStore.ts (Zustand)
│   ├── types/
│   │   └── index.ts
│   └── lib/
│       └── utils.ts
├── public/
│   └── logo.svg
├── next.config.js
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## Funcionalidades Requeridas

### 1. Navegación
- Header fijo con fondo negro/transparente que se oscurece al hacer scroll
- Logo de Kestrel centrado o a la izquierda
- Menú de categorías con hover effects
- Barra de búsqueda con diseño minimalista
- Icono de carrito con contador animado
- Menú móvil tipo drawer con animaciones suaves

### 2. Página Principal
- **Hero Section**: Video o imagen de fondo con texto animado, CTA principal
- **Barra de anuncios**: "Envíos a toda Venezuela 🚀" con scroll infinito
- **Categorías destacadas**: Grid visual con imágenes de categorías
- **Productos destacados**: Carrusel o grid de bestsellers
- **Sección promocional**: Banner de descuentos con countdown timer
- **Beneficios**: Iconos animados (Envío rápido, Pago seguro, Calidad garantizada)
- **Instagram Feed**: Integración visual con fotos del IG

### 3. Catálogo de Productos
- Filtros por categoría, precio, color
- Ordenamiento (precio, nombre, popularidad)
- Vista grid/lista toggle
- Paginación o infinite scroll
- Quick view modal
- Animaciones de hover en productos

### 4. Página de Producto
- Galería de imágenes con zoom
- Selector de color con preview visual
- Contador de cantidad
- Botón "Agregar al carrito" con animación
- Botón "Comprar por WhatsApp"
- Tabs: Descripción, Características, Envío
- Productos relacionados

### 5. Carrito
- Drawer lateral que se abre al agregar productos
- Lista de items con imagen, nombre, cantidad, precio
- Modificar cantidad inline
- Eliminar productos con confirmación
- Subtotal y total
- Botón "Finalizar pedido por WhatsApp"

### 6. Integración WhatsApp
El botón de compra debe generar un mensaje formateado:
```
¡Hola! 🦅 Me interesa realizar el siguiente pedido:

📦 *PRODUCTOS:*
- Billetera Clásica Texturizada (Negro) x1 - $15
- Lentes Hexagonales (Dorado) x1 - $35

💰 *TOTAL:* $50

📍 *Datos de envío:*
[El cliente completará]

¡Gracias!
```

### 7. Página de Contacto
- Información de contacto
- Mapa de ubicación (si aplica)
- Formulario de contacto
- Links a redes sociales
- Horarios de atención

---

## Especificaciones Técnicas

### next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      }
    ],
  },
}

module.exports = nextConfig
```

### Dependencias Adicionales
```bash
npm install zustand framer-motion lucide-react clsx tailwind-merge
```

### Tipografías (Google Fonts)
- **Títulos**: "Oswald" o "Bebas Neue" (bold, impactante)
- **Cuerpo**: "Inter" o "Outfit" (legible, moderna)

### Tailwind Config Personalizado
```javascript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        kestrel: {
          black: '#0a0a0a',
          dark: '#111111',
          gray: '#1a1a1a',
          light: '#a0a0a0',
          blue: '#4361ee',
          gold: '#c9a96e',
          pink: '#ff6b9d',
          orange: '#ffa500',
        }
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      }
    }
  }
}
```

---

## Estilo Visual

### Estética General
- **Tema**: Oscuro, elegante, premium
- **Contraste**: Alto contraste entre elementos
- **Espaciado**: Generoso, respirado
- **Bordes**: Sutiles, algunos redondeados
- **Sombras**: Profundas, negras con blur
- **Imágenes**: Alta calidad, estilo editorial

### Efectos y Animaciones
- Transiciones suaves en todos los elementos interactivos
- Hover effects en cards de productos (scale, shadow, overlay)
- Scroll animations con Framer Motion
- Loading skeletons mientras cargan imágenes
- Micro-interacciones en botones y iconos

### Elementos UI Específicos
- Botones con gradiente sutil o borde brillante
- Badges de "OFERTA" y "NUEVO" con colores vibrantes
- Precios tachados en rojo para descuentos
- Rating con estrellas doradas
- Tags de categoría minimalistas

---

## Métodos de Pago a Mostrar

- Pago Móvil
- Transferencia Bancaria
- Zelle
- Efectivo (USD)
- Binance Pay

---

## Información de Envío

- Envíos a toda Venezuela
- Delivery en Caracas: 24-48 horas
- Envíos nacionales: 3-5 días hábiles
- Opciones: MRW, Zoom, Tealca, Domesa

---

## Llamadas a la Acción

- "Agregar al Carrito"
- "Comprar Ahora"
- "Pedir por WhatsApp"
- "Ver Más"
- "Explorar Colección"

---

## SEO y Metadata

```typescript
// app/layout.tsx metadata
export const metadata: Metadata = {
  title: 'Kestrel E-commerce | Accesorios Masculinos Premium en Venezuela',
  description: 'Tienda online de billeteras, bolsos, lentes y accesorios masculinos. Envíos a toda Venezuela. ¡Lleva tus compras en línea a otras alturas!',
  keywords: 'billeteras venezuela, lentes de sol, bolsos masculinos, accesorios hombre, tienda online venezuela',
  openGraph: {
    title: 'Kestrel E-commerce',
    description: 'Accesorios Masculinos Premium',
    images: ['/og-image.jpg'],
  },
}
```

---

## Pasos Finales

1. **Crear repositorio en GitHub:**
```bash
gh repo create kestrel-ecommerce --public --source=. --remote=origin
git add .
git commit -m "Initial commit: Kestrel E-commerce"
git push -u origin main
```

2. **Deploy a Vercel:**
```bash
npx vercel --prod
```

---

## Número de WhatsApp para Pedidos

+58 412-XXXXXXX (reemplazar con número real o usar placeholder)

---

## Notas Adicionales

- Asegurar que todas las imágenes tengan alt text descriptivo
- Implementar lazy loading en imágenes
- Optimizar para Core Web Vitals
- Hacer el sitio completamente responsive (mobile-first)
- Incluir favicon y apple-touch-icon con el logo de Kestrel
- Agregar Google Analytics placeholder
