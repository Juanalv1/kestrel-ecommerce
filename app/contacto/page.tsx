'use client';

import { useState } from 'react';
import { MapPin, Mail, Clock, Instagram, MessageCircle, Phone, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `¡Hola! Me contacto desde la web.

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}

*Mensaje:*
${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/584121234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Contáctanos
          </h1>
          <p className="text-kestrel-light text-lg max-w-2xl mx-auto">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-8">
              Información de Contacto
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kestrel-gray flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-kestrel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Ubicación</h3>
                  <p className="text-kestrel-light">Caracas, Venezuela</p>
                  <p className="text-kestrel-light text-sm">Envíos a todo el país</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kestrel-gray flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-kestrel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/584121234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kestrel-light hover:text-kestrel-gold transition-colors"
                  >
                    +58 412-123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kestrel-gray flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-kestrel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Email</h3>
                  <a
                    href="mailto:info@kestrel.com"
                    className="text-kestrel-light hover:text-kestrel-gold transition-colors"
                  >
                    info@kestrel.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-kestrel-gray flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-kestrel-gold" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Horario de Atención</h3>
                  <p className="text-kestrel-light">Lunes a Sábado</p>
                  <p className="text-kestrel-light text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-white font-medium mb-4">Síguenos en redes</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/kestrel_ecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-kestrel-gray rounded-xl text-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@kestrel_ecommerce</span>
                </a>
                <a
                  href="https://wa.me/584121234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-kestrel-gray rounded-xl text-white hover:bg-green-500 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="mt-10 p-6 bg-kestrel-gray rounded-xl">
              <h3 className="text-white font-medium mb-4">Métodos de Pago</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  'Pago Móvil',
                  'Transferencia',
                  'Zelle',
                  'Binance Pay',
                  'Efectivo USD',
                  'Criptomonedas'
                ].map((method) => (
                  <div
                    key={method}
                    className="px-3 py-2 bg-kestrel-dark rounded-lg text-center text-sm text-kestrel-light"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-kestrel-gray rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Envíanos un Mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nombre completo"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  label="Teléfono"
                  type="tel"
                  placeholder="+58 412-123-4567"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                />

                <div>
                  <label className="block text-sm font-medium text-kestrel-light mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    placeholder="¿En qué podemos ayudarte?"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-kestrel-dark border border-white/10 rounded-lg text-white placeholder:text-kestrel-light/50 focus:outline-none focus:ring-2 focus:ring-kestrel-blue resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </Button>
              </form>

              <p className="mt-4 text-sm text-kestrel-light text-center">
                Al enviar, serás redirigido a WhatsApp para completar tu mensaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
