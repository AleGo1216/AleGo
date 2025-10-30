'use client';
export default function FilterPanel() {
  return (
    <aside className="panel" aria-label="Filters">
      <h4>Filters</h4>

      <div style={{ marginTop: 8 }}>
        <h4>Product Level</h4>
        <div className="option-list" id="levelOptions">
          <button className="chip" data-value="All">All</button>
          <button className="chip" data-value="Collector">Collector&apos;s Edition</button>
          <button className="chip" data-value="Premium">Premium</button>
          <button className="chip" data-value="Cute">Cute</button>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Product Status</h4>
        <div className="option-list" id="statusOptions">
          <button className="chip" data-value="All">All</button>
          <button className="chip" data-value="In Stock">In stock</button>
          <button className="chip" data-value="Pre-order">Pre-order</button>
        </div>
      </div>

      <div className="range-wrap" style={{ marginTop: 12 }}>
        <h4>Price (USD)</h4>
        <div className="range-controls" style={{ marginTop: 8 }}>
          <input type="number" id="priceMin" min="0" defaultValue={10} />
          <div style={{ color: 'var(--muted)' }}>—</div>
          <input type="number" id="priceMax" min="0" defaultValue={1200} />
        </div>

        <div className="double-range" style={{ marginTop: 10 }}>
          <div className="range-track">
            <div className="fill" id="rangeFill"></div>
          </div>
        </div>
        <div style={{ marginTop: 8 }} className="muted">
          Tip: drag numbers or use inputs above
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Sort By</h4>
        <select id="sortSelect" className="sort" aria-label="Sort products">
          <option value="new">Newest arrivals</option>
          <option value="release_asc">Release date ↑</option>
          <option value="release_desc">Release date ↓</option>
          <option value="sales_desc">Best selling</option>
          <option value="fav_desc">Most saved</option>
          <option value="price_asc">Price: low → high</option>
          <option value="price_desc">Price: high → low</option>
        </select>
      </div>

      <button className="apply-btn" id="applyFilters">Apply filters</button>
    </aside>
  );
}