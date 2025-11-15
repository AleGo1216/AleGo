// components/shop/ShopClient.tsx (client component)
// 所有交互逻辑（useState/useEffect）
'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Product } from '../../types/product';
import Filters from './Filters';
import ProductGrid from './ProductGrid';
import { Input, Select, Pagination, Row, Col, Badge } from 'antd';
import { useRouter } from 'next/navigation';

const statusOptions = ['All', 'In Stock', 'Pre-orde', 'Cute'];

const { Option } = Select;

type Props = { initialProducts: Product[] };

export default function ShopClient({ initialProducts }: Props) {
  //router
  const router = useRouter();
  // data
  const [products, setProducts] = useState<Product[]>([]);

  // ui state
  const [query, setQuery] = useState<string>('');
  const [level, setLevel] = useState<string>('All');
  const [status, setStatus] = useState<string>('All');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(2000);
  const [sort, setSort] = useState<string>('new');
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(12);

  const [favorites, setFavorites] = useState<Record<number, number>>({});
  const [selected, setSelected] = useState<Product | null>(null);

  async function loadProducts() {
    try {
      const res = await fetch('/api/getProducts');
      if (!res.ok) throw new Error('获取商品数据失败');
      const data: any[] = await res.json();
      const array = data.concat(data).concat(data).concat(data)
      setProducts(array || []);
    } catch (err) {
      console.error(err);
    }
  }



  // load favorites from localStorage
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem('aletoys_favs');
      if (raw) setFavorites(JSON.parse(raw));
    } catch { }
  }, []);

  useEffect(() => {
    loadProducts()
  }, []);


  // persist favorites
  useEffect(() => {
    try {
      localStorage.setItem('aletoys_favs', JSON.stringify(favorites));
    } catch { }
  }, [favorites]);

  // filtered & sorted
  const filtered = useMemo(() => {
    let out = products.filter(p => {
      if (level !== 'All' && p.edition !== level) return false;
      if (status !== 'All' && p.availability !== status) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (query) {
        const hay = (p.name + ' ' + statusOptions[p.status]).toLowerCase();

        if (!hay.includes(query.toLowerCase())) return false;
      }
      return true;
    });

    switch (sort) {
      case 'release_asc': out.sort((a, b) => a.release - b.release); break;
      case 'release_desc': out.sort((a, b) => b.release - a.release); break;
      case 'sales_desc': out.sort((a, b) => b.sales - a.sales); break;
      case 'fav_desc': out.sort((a, b) => (Number(Boolean(favorites[b.id])) - Number(Boolean(favorites[a.id])))); break;
      case 'price_asc': out.sort((a, b) => a.price - b.price); break;
      case 'price_desc': out.sort((a, b) => b.price - a.price); break;
      case 'new':
      default: out.sort((a, b) => b.release - a.release); break;
    }
    return out;
  }, [products, level, status, minPrice, maxPrice, query, sort, favorites]);

  // pagination
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [totalPages, page]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page, perPage]);

  function toggleFav(id: number) {
    setFavorites(prev => {
      const next = { ...prev };
      console.log(66666)
      if (next[id]) delete next[id];
      else next[id] = Date.now();
      return next;
    });
  }

  function openModal(p: Product) { 
    setSelected(p); 
    router.push(`/product/${p.product_id}`);

   }

  return (
    <div className="layout">
      <aside className="panel" aria-label="Filters">
        <Filters
          level={level}
          status={status}
          setLevel={(v) => { setLevel(v); setPage(1); }}
          setStatus={(v) => { setStatus(v); setPage(1); }}
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          sort={sort}
          setSort={(v) => { setSort(v); setPage(1); }}
          apply={() => setPage(1)}
        />
      </aside>

      <section>
        <div className="top-controls">
          <div>
            <div className="page-title">Shop All</div>
            <div className="meta-small muted">Curated limited editions & contemporary collectibles</div>
          </div>

          <div className="controls-row">
            <div className="meta-small muted">Showing <strong>{total}</strong></div>


            <div className="search" role="search" aria-label="Site search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" /></svg>
              <input id="search" placeholder="Search collectibles, artist, SKU..." aria-label="Search products" value={query}
                onChange={e => { setQuery(e.target.value); setPage(1); }} />
            </div>


              <select id="perPage" className="sort" title="Items per page" aria-label="Items per page"  value={String(perPage)} onChange={(v) => { 
                setPerPage(Number(v.target.value)); setPage(1); }}>
                <option value="12">12 / page</option>
                <option value="15">15 / page</option>
                <option value="10">10 / page</option>
              </select>
          </div>
        </div>

        <ProductGrid
          items={pageItems}
          favorites={favorites}
          onToggleFav={toggleFav}
          onView={openModal}
        />

        <div style={{ marginTop: 18, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            className='paginationStyle'
            current={page}
            pageSize={perPage}
            total={total}
            onChange={(p, ps) => { setPage(p); setPerPage(ps || perPage); window.scrollTo({ top: 240, behavior: 'smooth' }); }}
            showSizeChanger={false}
            simple={false}
          />
        </div>

        {/* <ProductModal visible={!!selected} product={selected} onClose={closeModal} onToggleFav={toggleFav} isFav={(id) => !!favorites[id]} /> */}
      </section>
    </div>
  );
}