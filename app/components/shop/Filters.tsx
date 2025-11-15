// components/shop/Filters.tsx (client)
'use client';
import React, { useState } from 'react';
import { Select, Button, InputNumber } from 'antd';

type Props = {
  level: string;
  status: string;
  setLevel: (v: string) => void;
  setStatus: (v: string) => void;
  minPrice: number;
  maxPrice: number;
  setMinPrice: (n: number) => void;
  setMaxPrice: (n: number) => void;
  sort: string;
  setSort: (s: string) => void;
  apply: () => void;
};

export default function Filters({
  level, status, setLevel, setStatus,
  minPrice, maxPrice, setMinPrice, setMaxPrice,
  sort, setSort, apply
}: Props) {
  const levelOptions = ['All', 'Collector', 'Premium', 'Cute'];
  const statusOptions = ['All', 'In Stock', 'Pre-orde', 'Cute'];
  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
     // price inputs
 
  const globalMinPrice = 0 
 
  const globalMaxPrice = 2000
  return (
    <div>
      <h4>Filters</h4>

      <div style={{ marginTop: 8 }}>
        <h4>Product Level</h4>
        <div className='option-list' id="levelOptions">
          {levelOptions.map(option => (
            <Button
              key={option}
              className={`chip ${level === option ? 'active' : ''}`}
              onClick={() => setLevel(option)}
            >
              {option}
            </Button>
          ))}
        </div>

      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Product Status</h4>
        <div className='option-list' id="statusOptions">
          {statusOptions.map(option => (
            <Button
              key={option}
              className={`chip ${status === option ? 'active' : ''}`}
              onClick={() => setStatus(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Price (USD)</h4>
        <div className="range-controls" style={{marginTop:8}}>
            <input className='priceInput' min={0} value={minPrice} onChange={(v = 0) => {
              setMinPrice(Number(v || 0))
              const left = v/globalMaxPrice *100
              console.log(222,left)
              setLeft(left)
              }}  id="priceMin" aria-label="Minimum price" />
            <div style={{color:'var(--muted)'}}>—</div>
            <input className='priceInput'  min={0} value={maxPrice} onChange={(v= 0) => {
              setMaxPrice(Number(v || 0)) 
              const right = (globalMaxPrice-v)/globalMaxPrice *100
              console.log(right)
              setRight(right)
              
              }} id="priceMax"  aria-label="Maximum price" />
          </div>

          <div className="double-range" style={{marginTop:10}}>
            <div className="range-track" aria-hidden="true">
              <div className="fill" id="rangeFill" style={{left:left+'%',right:right+'%',width:`${100-left-right}%`}}></div>
            </div>
          </div>
       
      </div>

      <div style={{ marginTop: 12 }}>
        <h4>Sort By</h4>
       
        <select id="sortSelect" value={sort}  className="sort" onChange={(v) => setSort(v)} aria-label="Sort products">
            <option value="new">Newest arrivals</option>
            <option value="release_asc">Release date ↑</option>
            <option value="release_desc">Release date ↓</option>
            <option value="sales_desc">Best selling</option>
            <option value="fav_desc">Most saved</option>
            <option value="price_asc">Price: low → high</option>
            <option value="price_desc">Price: high → low</option>
          </select>
      </div>

      <div style={{ marginTop: 14 }}>
        <button  className="apply-btn"  onClick={apply}>Apply filters</button>
      </div>
    </div>
  );
}