// app/product/[id]/components/ProductTabsClient.tsx
'use client';
import React from 'react';
import { Tabs, Rate } from 'antd';
import type { Product } from '@/lib/types';
import { statusList,categoryList ,reviewList} from '../../types/product';

export default function ProductTabsClient({ product }: { product: Product }) {
  return (
    <Tabs className='productTabs' defaultActiveKey="details" items={[
      {
        key: 'details',
        label: 'Details & Gallery',
        children: (
          <>
            <h3 style={{ marginTop: 0 }}>A story in every brushstroke</h3>
            <p className="muted-note">{product.description}</p>
            <div className="vertical-gallery" style={{ marginTop: 14 }}>
              {(product.product_image.image_list || []).slice(0, 4).map((src) => (
                <div className="vg-img" key={src}><img src={src} alt="" /></div>
              ))}
            </div>
          </>
        )
      },
      {
        key: 'specs',
        label: 'Specifications',
        children: (
          <div className="spec-grid">
            <div className="spec"><strong>Artist</strong><div style={{ color: 'var(--text)', marginTop: 6 }}>{product.artist}</div></div>
            <div className="spec"><strong>Edition</strong><div style={{ color: 'var(--text)', marginTop: 6 }}>{product.edition}</div></div>
            <div className="spec"><strong>Material</strong><div style={{ color: 'var(--text)', marginTop: 6 }}>{product.material}</div></div>
            <div className="spec"><strong>Size</strong><div style={{ color: 'var(--text)', marginTop: 6 }}>{product.size}</div></div>
            <div className="spec"><strong>Status</strong><div style={{ color: 'var(--text)', marginTop: 6 }}>{statusList[product.status]}</div></div>
          </div>
        )
      },
      {
        key: 'reviews',
        label: `Reviews (${reviewList?.length ?? 0})`,
        children: (
          <>
            <h3 style={{ marginBottom: 12 }}><strong style={{ fontSize: 18 }}>Collectors' voices</strong></h3>
            {(reviewList || []).map((r, i) =>{
              return (
              <div className="review" key={i}>
                <div className="meta"><span className="rating" aria-hidden="true"><Rate allowHalf={true} disabled value={r.rating} /></span> • <strong>{r.author}</strong> • {r.when}</div>
                <div className='text'>{r.text}</div>
              </div>
            )})
            
            
            }
          </>
        )
      },
      {
        key: 'returns',
        label: 'Returns & Care',
        children: (
          <>
            <h3 style={{ fontWeight: 600 }}>Returns & Care</h3>
            <p className="muted-note">Because each piece is hand‑finished, subtle variations are part of the story and are not considered defects. If an item is damaged in transit, contact us within 7 days for repair or replacement.</p>
            <p className="muted-note">Care tips: avoid prolonged direct sunlight; dust gently with a soft brush; never use solvents or abrasive cleaners. For long‑term preservation, our studio can advise on custom framing and controlled display solutions.</p>
          </>
        )
      }
    ]} />
  );
}