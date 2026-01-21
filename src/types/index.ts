export interface Product {
  id: string;
  nombre: string;
  precio: number;
  precioAnterior?: number;
  descripcion: string;
  imagen: string;
  caracteristicas: string[];
  colores: string[];
  categoria: string;
  slug: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface Category {
  nombre: string;
  slug: string;
  imagen: string;
  descripcion: string;
}
