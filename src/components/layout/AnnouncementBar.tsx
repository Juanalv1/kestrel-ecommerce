'use client';

export default function AnnouncementBar() {
  const announcements = [
    'Envíos a toda Venezuela 🚀',
    'Pago Móvil • Zelle • Binance Pay 💳',
    'Delivery en Caracas 24-48h ⚡',
    'Calidad garantizada ✨',
  ];

  return (
    <div className="bg-gradient-to-r from-kestrel-pink to-kestrel-orange py-2 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...announcements, ...announcements].map((text, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-medium text-white"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
