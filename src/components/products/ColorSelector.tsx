'use client';

import { cn } from '@/lib/utils';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

const colorMap: Record<string, string> = {
  'Negro': 'bg-black',
  'Café': 'bg-amber-800',
  'Gris': 'bg-gray-500',
  'Azul marino': 'bg-blue-900',
  'Azul': 'bg-blue-500',
  'Dorado': 'bg-yellow-500',
  'Plateado': 'bg-gray-300',
  'Bronce': 'bg-amber-600',
  'Burdeos': 'bg-red-900',
  'Beige': 'bg-amber-100',
  'Nude': 'bg-orange-100',
  'Carey': 'bg-amber-700',
  'Cristal': 'bg-white',
  'Dorado/Verde': 'bg-gradient-to-r from-yellow-500 to-green-500',
  'Plateado/Azul': 'bg-gradient-to-r from-gray-300 to-blue-500',
  'Negro/Gris': 'bg-gradient-to-r from-black to-gray-500',
  'Dorado/Marrón': 'bg-gradient-to-r from-yellow-500 to-amber-800',
  'Plateado/Gris': 'bg-gradient-to-r from-gray-300 to-gray-500',
  'Negro/Negro': 'bg-black',
  'Negro/Plateado': 'bg-gradient-to-r from-black to-gray-300',
};

export default function ColorSelector({ colors, selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-kestrel-light">Color:</span>
        <span className="text-sm text-white font-medium">{selectedColor}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onSelect(color)}
            className={cn(
              'w-8 h-8 rounded-full transition-all duration-200',
              colorMap[color] || 'bg-kestrel-gray',
              selectedColor === color
                ? 'ring-2 ring-offset-2 ring-offset-kestrel-dark ring-kestrel-blue scale-110'
                : 'hover:scale-105'
            )}
            title={color}
          />
        ))}
      </div>
    </div>
  );
}
