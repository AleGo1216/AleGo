"use client";

import { useEffect, useRef } from "react";
import ProductGallery from "./ProductGallery";
import ProductPurchase from "./ProductPurchase";
import ProductTabs from "./ProductTabs";
import ProductModal from "./ProductModal";
import FloatingConsult from "./FloatingConsult";

import type { Product } from "./types";

export default function ProductClient({ product }: { product: Product }) {
  const initialized = useRef(false);
console.log(222,product)
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    import("./productLogic").then((mod) => mod.initProductPage());
  }, []);

  return (
    <div className="container">
      {/* 面包屑 / 子导航 */}
      <div className="sub-hero">
        <div className="breadcrumbs">
          Home / Shop / Limited / {product?.name}
        </div>
        <div className="sub-cta">
          <div className="pill interactive" role="button" aria-pressed="false">
            Edition No.032
          </div>
          <div className="pill interactive" role="button" aria-pressed="false">
            Hand‑painted • Studio finished
          </div>
          <div
            className="auth-chip interactive"
            role="status"
            title="Authenticity guaranteed"
          >
            <div className="auth-badge">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l6 4v5c0 5-3.5 9-6 11-2.5-2-6-6-6-11V6l6-4z"
                  fill="#071018"
                />
              </svg>
              AUTHENTIC
            </div>
            <div style={{ lineHeight: "1.05" }}>
              <div style={{ fontWeight: 700 }}>Buy with confidence</div>
              <small>Numbered certificate • Artist's note</small>
            </div>
          </div>
        </div>
      </div>

      <main className="product-grid">
        <ProductGallery product={product}  />
        <ProductPurchase product={product} />
        <ProductTabs />
      </main>

      <ProductModal />
      <FloatingConsult />
    </div>
  );
}