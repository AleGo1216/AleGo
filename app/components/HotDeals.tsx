// components/HotDeals.tsx
import React from 'react';
import { Card, Button, Typography, Image } from 'antd';
import type { CSSProperties } from 'react';


const { Text } = Typography;



const cardStyle: CSSProperties = {
  borderRadius: 12,
  overflow: 'hidden',
  padding: 16, 
  textAlign: 'center'
};

export default function HotDeals({ products }: { products: any[] }) {
  const responsiveTruncate = (str: string, maxLength: number, ellipsis = '...') =>{
    if (str.length <= maxLength) return str;
    return str.substr(0, Math.max(0, maxLength - ellipsis.length)) + ellipsis;
  }


  return (
    <section className="hot-deals-section container "  >
      <div className='hot-deal-header'style={{ textAlign: 'center', marginBottom: 28 }}>
        <h2 className="hot-deals-title">This Month's Hot Deals</h2>
        <p className="hot-deal-subtitle">Unmissable offers on selected premium statues.</p>
      </div>

      {/* Image.PreviewGroup 支持在同一组内左右切换预览 */}
     
    
        <div className="hot-deals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 18 }}>
          {products.length > 0 && products.map((d,index) => (
            <Card key={index} className="hot-deal-item" variant={'outlined'} style={cardStyle} >
              {/* 使用 Antd Image：点击图片会打开预览大图 */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image
                  src={d.image}
                  alt={d.title}
                  width={180}
                  height={180}
                  style={{ objectFit: 'cover', borderRadius: '50%' }}
                  // 可通过 preview 对象进一步定制（比如 mask 、icons）
                  preview={{ mask: <></> }}
                />
              </div>

              <h4 style={{ marginTop: 12 }}>{d.name}</h4>
              {d.description && <span style={{ display: 'block', minHeight:44,marginBottom: 8 }}>{responsiveTruncate(d.description,40)}</span>}
              <div style={{ marginTop: 10, fontWeight: 700, color: 'var(--accent1)' }}>{d.price}</div>
              <Button type="primary" style={{ marginTop: 12 }}>Buy Now</Button>
            </Card>
          ))}
        </div>
    </section>
  );
}