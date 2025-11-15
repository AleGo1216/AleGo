// components/shop/ProductGrid.tsx (client)
'use client';
import React from 'react';
import { Product } from '../../types/product';
import ProductCard from './ProductCard';

type Props = {
  items: Product[];
  favorites: Record<number, number>;
  onToggleFav: (id: number) => void;
  onView: (p: Product) => void;
};

export default function ProductGrid({ items, favorites, onToggleFav, onView }: Props) {
  if (items.length === 0) return <div className="muted">No results. Try adjusting filters or search.</div>;

  return (
    <div className="grid" role="list">
      {items.map(p => (
        <ProductCard key={p.product_id} product={p} isFav={!!favorites[p.product_id]} onToggleFav={() => onToggleFav(p.product_id)} onView={() => onView(p)} />
      ))}
    </div>
  );
}