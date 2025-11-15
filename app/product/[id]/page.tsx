import "../../styles/product.css";
import HeaderClient from "../../components/Header";
import Footer from "../../components/Footer";


// app/product/[id]/page.tsx
import React from 'react';
import { GetProductResult, fetchProductById } from '../../../lib/product';
import SubHeroClient from '../../components/product/SubHeroClient';
import ProductGalleryClient from '../../components/product/ProductGalleryClient';
import PurchaseCardClient from '../../components/product/PurchaseCardClient';
import ProductTabsClient from '../../components/product/ProductTabsClient';
import FloatingConsult from '../../components/product/FloatingConsult';

type Props = { params: { id: string } };

export default async function ProductPage({ params }: Props) {
  const id = params.id;
  // 服务端调用，替换 lib/products.ts 中的实现以访问你的 DB
  const product: GetProductResult = await fetchProductById(id);
  console.log(3333,product)
  // If product not found, you can throw a notFound() or return fallback
  if (!product) {
    return <div style={{ padding: 36, color: 'var(--muted)' }}>Product not found.</div>;
  }

  return (
    <>
    <HeaderClient />
    <main>
    <div className="container" style={{ maxWidth: '1280px', minHeight:'70vh',margin: '72px auto 36px', padding: 18 }}>
      {/* Header / sub-hero can be reused from your app; here we render main content only */}
      <main className="product-grid" aria-label="Product detail">
        <div style={{ gridColumn: '1 / -1' }}> <SubHeroClient
        breadcrumbs={`Home / Shop / Limited / ${product.name}`}
        pills={['Edition No.032', 'Hand‑painted • Studio finished']}
        authTitle="Buy with confidence"
        authSubtitle="Numbered certificate • Artist's note • Transit protection"
      />

        </div>
     
        <div className="gallery">
          {/* Client gallery: images, carousel, modal */}
          <ProductGalleryClient images={product.product_image.image_list} title={product.name} />
        </div>

        <aside className="purchase-card">
          {/* Client purchase card: wishlist, qty, buy */}
          <PurchaseCardClient product={product} />
        </aside>

        <div style={{ gridColumn: '1 / -1' }}>
          <div className="content-shell">
            <ProductTabsClient product={product} />
          </div>
        </div>
      </main>

      <FloatingConsult />
    </div>
    </main>
    <Footer />
  </>
  
  );
}