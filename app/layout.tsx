import type { Metadata } from "next";
import { Oswald, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CartDrawer from "@/components/cart/CartDrawer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kestrel E-commerce | Accesorios Masculinos Premium en Venezuela",
  description: "Tienda online de billeteras, bolsos, lentes y accesorios masculinos. Envíos a toda Venezuela. ¡Lleva tus compras en línea a otras alturas!",
  keywords: "billeteras venezuela, lentes de sol, bolsos masculinos, accesorios hombre, tienda online venezuela",
  openGraph: {
    title: "Kestrel E-commerce",
    description: "Accesorios Masculinos Premium",
    type: "website",
    locale: "es_VE",
    siteName: "Kestrel E-commerce",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kestrel E-commerce",
    description: "Accesorios Masculinos Premium en Venezuela",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${oswald.variable} ${outfit.variable} antialiased bg-kestrel-black text-white`}>
        <AnnouncementBar />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton variant="fixed" />
      </body>
    </html>
  );
}
