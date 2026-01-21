import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`;
}

export function generateWhatsAppMessage(items: { nombre: string; color: string; quantity: number; precio: number }[], total: number): string {
  const productLines = items
    .map(item => `- ${item.nombre} (${item.color}) x${item.quantity} - $${item.precio * item.quantity}`)
    .join('\n');

  const message = `¡Hola! 🦅 Me interesa realizar el siguiente pedido:

📦 *PRODUCTOS:*
${productLines}

💰 *TOTAL:* $${total.toFixed(2)}

📍 *Datos de envío:*
[El cliente completará]

¡Gracias!`;

  return encodeURIComponent(message);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
