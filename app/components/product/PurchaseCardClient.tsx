// app/product/[id]/components/PurchaseCardClient.tsx
'use client';
import React, { useState } from 'react';
import { Button, InputNumber, Badge } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { Product } from '@/lib/types';
import { statusList,categoryList } from '../../types/product';

export default function PurchaseCardClient({ product }: { product: Product }) {
  const [saved, setSaved] = useState(false);
  const [favCount, setFavCount] = useState<number>(product.favCount ?? 0);
  const [qty, setQty] = useState<number>(1);

  function toggleSave() {
    setSaved((s) => {
      const next = !s;
      setFavCount((c) => Math.max(0, c + (next ? 1 : -1)));
      return next;
    });
  }

  async function handleBuy() {
    // simulate processing
    try {
      // Replace with your checkout integration
      alert(`Checkout simulated:\n• Item: ${product.name}\n• Qty: ${qty}\n• Item total: $${product.price * qty}`);
    } catch (err) {
      console.error(err);
      alert('Failed to checkout');
    }
  }

  return (
    <>
      <div className="title">{product.name}</div>
      <div className="subtitle">{product.subtitle}</div>

      <div className="meta" aria-hidden="true">
        <div className="tag">Grade: <strong style={{ marginLeft: 8, color: 'var(--text)' }}>{product.category_id ? categoryList[product.category_id] :'Collector'}</strong></div>
        <div className="tag">Status: <strong style={{ marginLeft: 8, color: '#b7ffef' }}>{product.status ?statusList[product.status]: 'In Stock'}</strong></div>

        <div className="tag">Hand-finished</div>
      </div>

      <div className="price-row" style={{ alignItems: 'center' }}>
        <div className="price">${product.price}</div>
        {(product.msrp || product.price) && <div className="msrp">${product.msrp || product.price*2}</div>}
      </div>
      <div className="stats" aria-hidden="true">
          <div className="stat"><svg className="icon-small" viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M12 21s-7.2-4.9-9.1-8.1a5.8 5.8 0 010-5.8 7.6 7.6 0 0113.4 0 5.8 5.8 0 010 5.8C19.2 16.1 12 21 12 21z" stroke="#cfedf1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg><span id="favCount">128</span> favorites</div>
          <div className="stat"><svg className="icon-small" viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M3 7h18M3 12h12M3 17h18" stroke="#cfedf1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> 4.1k views</div>
          <div className="stat"><svg className="icon-small" viewBox="0 0 24 24" fill="none" width="16" height="16"><path d="M3 3h18v6H3zM7 9v12h10V9" stroke="#cfedf1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> 620 sold</div>
        </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 12 }}>
        <button
          className={`save-icon interactive ${saved ? 'active' : ''}`}
          aria-pressed={saved}
          onClick={toggleSave}
          title="Save to wishlist"
        >
          <HeartOutlined style={{ color: saved ? '#071018' : `var(--muted)`, fontSize: 18 }} />
        </button>

        <Button  type="primary" className="btn btn-primary interactive" onClick={handleBuy} icon={<ShoppingCartOutlined />}>
          Buy Now
        </Button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 14 }}>
        <div className="qty" aria-label="Quantity selector">
          <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
          <div style={{ minWidth: 28, textAlign: 'center' }}>{qty}</div>
          <button onClick={() => setQty((q) => Math.min(product.maxAvailable ?? 10, q + 1))}>+</button>
        </div>

        <div style={{ color: 'var(--muted)', fontSize: 13 }}>Max available: <strong style={{ color: 'var(--text)' }}>{product.maxAvailable ?? 3}</strong></div>

      </div>
      <div className="shipping">
          Ships from: <strong>China Warehouse</strong> • Estimated delivery: <strong>3–7 business days</strong>.
          For bespoke packaging or insurance, contact us before ordering.
        </div>

        <div className="consult-note" >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a1 1 0 01-1 1H6l-5 3V6a1 1 0 011-1h2" stroke="#9aa6b2" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <div>
            Worldwide shipping • Certificate of authenticity included • Bespoke packaging and framing available on request.
          </div>
        </div>

        <div className='each-note' >
          Each Kitsune begins as an original sculpture, is cast with care, then finished by hand — layered paints, selective highlights and a protective varnish. Minor brush marks and tonal shifts are the proof of a human hand, and they carry the story of the studio.
        </div>
    </>
  );
}