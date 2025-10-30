'use client';
import { useEffect, useRef } from 'react';
import FilterPanel from './FilterPanel';
import ProductGrid from './ProductGrid';
import ProductModal from './ProductModal';

/**
 * 这个组件将原 HTML 的 <main> 和 <script> JS 控制逻辑集中在一起，
 * 因为涉及 window/document/localStorage/事件绑定/动态生成 DOM。
 */
export default function ShopClient() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // 原 HTML 中的脚本逻辑整体移植到这里
    // 由于代码很长，可以拆分到 hooks 或 utils 中维护
    import('./shopLogic').then((mod) => {
      mod.initShop();
    });
  }, []);

  return (
    <div className="layout">
      <FilterPanel />
      <section style={{ width: '100%' }}>
        <div className="top-controls">
          <div>
            <div className="page-title">Shop All</div>
            <div className="meta-small muted">
              Curated limited editions & contemporary collectibles
            </div>
          </div>
          <div className="controls-row">
            <div className="meta-small muted">
              Showing <span id="resultsCount">0</span>
            </div>
            <select
              id="perPage"
              className="sort"
              title="Items per page"
              aria-label="Items per page"
              style={{ marginLeft: 8 }}
            >
              <option value="12">12 / page</option>
              <option value="15">15 / page</option>
              <option value="10">10 / page</option>
            </select>
          </div>
        </div>
        <ProductGrid />
        <div className="pagination" id="pagination" aria-label="Pagination" />
      </section>
      <ProductModal />
    </div>
  );
}