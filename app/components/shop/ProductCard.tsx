// components/shop/ProductCard.tsx (client)
'use client';
import React from 'react';
import { Product,statusList,categoryList } from '../../types/product';
import { Card, Button } from 'antd';

type Props = {
  product: Product;
  isFav: boolean;
  onToggleFav: () => void;
  onView: () => void;
};

export default function ProductCard({ product, isFav, onToggleFav, onView }: Props) {
 
   
  return (
    <article className="card" role="listitem">
      <div className="media" aria-hidden="false">
        <div className="badge">{product.edition}</div>
        <button className={`fav ${isFav ? 'active' : ''}`} aria-label="Save" onClick={onToggleFav}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20.8 7.6c0 6.2-8.8 12-8.8 12S3.2 13.8 3.2 7.6A4.4 4.4 0 018 3.2c1.8 0 3.4 1.1 4 2.6.6-1.5 2.2-2.6 4-2.6a4.4 4.4 0 014.8 4.4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <img loading="lazy" alt={product.name} src={product.image} onError={(e)=>{ (e.target as HTMLImageElement).src = '/images/fallback.png'; }} />
      </div>

      <div className="card-body">
        <div style={{ flex: 1 }}>
          <div className="title">{product.name}</div>
          <div className="subtitle">AT-{product.product_id} · {categoryList[product.category_id]} · {statusList[product.status]}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="price">${product.price}</div>
          <div className="subtitle muted" style={{ fontSize: 12 }}>Sold {product.sales || 199} </div>
        </div>
      </div>

      <div className="card-actions">
        <button className="btn" onClick={onView} aria-label="View details">View</button>
        <button className={`btn`} onClick={onToggleFav}>{isFav ? 'Saved' : 'Save'}</button>
      </div>
    </article>
  );
}