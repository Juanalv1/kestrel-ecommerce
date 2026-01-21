import Link from 'next/link';
import { Instagram, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { categories } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-kestrel-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-kestrel-pink to-kestrel-orange bg-clip-text text-transparent">
                KESTREL
              </span>
              <span className="block text-xs text-kestrel-light tracking-widest">
                E-COMMERCE
              </span>
            </Link>
            <p className="text-kestrel-light text-sm mb-4">
              ¡Lleva tus compras en línea a otras alturas! Accesorios masculinos premium en Venezuela.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/kestrel_ecommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-kestrel-gray rounded-lg text-white hover:text-kestrel-pink transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/584121234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-kestrel-gray rounded-lg text-white hover:text-green-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/categoria/${category.slug}`}
                    className="text-kestrel-light hover:text-white transition-colors text-sm"
                  >
                    {category.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-kestrel-light hover:text-white transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-kestrel-light hover:text-white transition-colors text-sm">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-kestrel-light hover:text-white transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-kestrel-gold flex-shrink-0" />
                <span className="text-kestrel-light">Caracas, Venezuela</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-kestrel-gold flex-shrink-0" />
                <a href="mailto:info@kestrel.com" className="text-kestrel-light hover:text-white transition-colors">
                  info@kestrel.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-5 h-5 text-kestrel-gold flex-shrink-0" />
                <span className="text-kestrel-light">Lun - Sáb: 9am - 6pm</span>
              </li>
            </ul>

            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-xs text-kestrel-light mb-2">Métodos de pago:</p>
              <div className="flex flex-wrap gap-2">
                {['Pago Móvil', 'Zelle', 'Binance', 'USD'].map((method) => (
                  <span
                    key={method}
                    className="text-xs px-2 py-1 bg-kestrel-gray rounded text-kestrel-light"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-kestrel-light text-sm">
              © {new Date().getFullYear()} Kestrel E-commerce. Todos los derechos reservados.
            </p>
            <p className="text-kestrel-light text-sm">
              @kestrel_ecommerce • 36.5K seguidores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
