import React from "react";

export default function CategorySection({ title, products }: { title: string; products: any[] }) {
  return (
    <section className="category-section container" aria-labelledby={`cat-${title}`}>
      <div className="category-header">
        <div className="category-title" id={`cat-${title}`}>{title}</div>
        <div className="category-actions">
          <a href='/shop'>View All</a> <i className="fas fa-arrow-right" /></div>
      </div>
     
      {
        products.length>0 && <div className="category-products">
        {products.map((item: { product_id: Key | null | undefined; image: string | Blob | undefined; name: string | undefined; },i) => (
          <img key={item.product_id} src={item.image} alt={`${title} item ${i + 1}`} loading="lazy" />
        ))}
      </div>
      }
    </section>
  );
}