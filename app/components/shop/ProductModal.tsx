// components/shop/ProductModal.tsx (client)
'use client';
import React from 'react';
import { Product,statusList,categoryList } from '../../types/product';
import { Modal, Button } from 'antd';

type Props = {
  visible: boolean;
  product: Product | null;
  onClose: () => void;
  onToggleFav: (id: number) => void;
  isFav: (id: number) => boolean;
};

export default function ProductModal({ visible, product, onClose, onToggleFav, isFav }: Props) {
  if (!product) {
    return <Modal open={visible} onCancel={onClose} footer={null} />;
  }

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={920}
      className="custom-modal"
      bodyStyle={{ padding: 18 }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxHeight: '80vh', overflow: 'auto' }}>
        <div style={{ position: 'relative' }}>
          <div className="media" style={{ height: 420 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div className="meta">
          <h2 id="modalTitle" style={{ margin: 0, marginBottom: 8 }}>{product.name}</h2>
          <div className="muted" style={{ marginBottom: 12 }}>AT-{product.product_id} · {categoryList[product.category_id]} · {statusList[product.status]}</div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--accent1)' }}>${product.price}</div>
            <div className="badge" style={{ position: 'static', background: 'transparent', color: 'var(--muted)', padding: '6px 8px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.03)' }}>{product.edition}</div>
          </div>

          <p className="muted" style={{ marginTop: 8 }}>
            Limited/resin statue. Hand-painted finish. Edition: {product.edition}. Release date: {new Date(product.release).toLocaleDateString()}. This product has sold {product.sales} units.
          </p>

          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <Button type={isFav(product.product_id) ? 'primary' : 'default'} onClick={() => onToggleFav(product.product_id)}>{isFav(product.product_id) ? 'Saved' : 'Save'}</Button>
            <Button onClick={() => { /* navigate to product page in real app */ }}>Open product page</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}