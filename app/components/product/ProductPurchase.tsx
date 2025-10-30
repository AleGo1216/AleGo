"use client";
import type { Product } from "./types";

export default function ProductPurchase({ product }: { product: Product }) {
    const curProduct = product || {}
  return (
    <aside className="purchase-card">
      <div className="title">{curProduct.title}</div>
      <div className="subtitle">
        By {curProduct.artist} — {curProduct.edition}
      </div>

      <div className="price-row">
        <div className="price">${curProduct.price}</div>
        <div className="msrp">${curProduct.msrp}</div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 8 }}>
        <button id="saveToggle" className="save-icon interactive">
          ❤️
        </button>
        <button id="buyNow" className="btn btn-primary interactive">
          Buy Now
        </button>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
        <div className="qty">
          <button id="qtyDec">−</button>
          <div id="qtyVal">1</div>
          <button id="qtyInc">+</button>
        </div>
        <span style={{ color: "var(--muted)", fontSize: 13 }}>
          Max available: <strong>3</strong>
        </span>
      </div>

      <div style={{ marginTop: 12, fontSize: 13, color: "var(--muted)" }}>
        Ships from China • Delivery 3–7 days. For bespoke packaging, contact us.
      </div>
    </aside>
  );
}