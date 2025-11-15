// components/Banner.tsx
'use client';

import React from 'react';
import { Carousel, Button, Typography, Image } from 'antd';
import type { CSSProperties } from 'react';

const { Title, Paragraph } = Typography;

type Slide = {
  id: string;
  title: string;
  subtitle?: string;
  img: string;
  cta?: { label: string; href?: string };
};

const slides: Slide[] = [
  {
    id: 's1',
    title: 'Limited Edition Sculptures',
    subtitle: 'Hand-painted, numbered, and certified — a collector’s dream.',
    img: '../images/banner1.jpg',
    cta: { label: 'Shop Now', href: '/shop' },
  },
  {
    id: 's2',
    title: 'Artisan Craftsmanship',
    subtitle: 'Each piece is inspected and finished by master painters.',
    img: '../images/banner2.jpg',
    cta: { label: 'Shop Now', href: '/shop' },
  },
  {
    id: 's3',
    title: 'Exclusive Drops',
    subtitle: 'Subscribe for notifications about upcoming limited releases.',
    img: '../images/banner3.jpg',
    cta: { label: 'Shop Now', href: '/shop' },
  },
];

const overlayStyle: CSSProperties = {
  position: 'absolute',
  left: '8%',
  top: '50%',
  transform: 'translateY(-50%)',
  color: '#fff',
  maxWidth: 720,
  zIndex: 2,
};

export default function Banner() {
  return (
    <section aria-label="Hero banner">
      <Carousel autoplay autoplaySpeed={6000} fade={true} speed={1500} easing={'linear'} dots adaptiveHeight={false}>
        {slides.map((s) => (
          <div key={s.id} className="banner-slide" style={{ position: 'relative' }}>
            {/* 使用 Antd Image 渲染；轮播内不启用 preview（preview={false}）以免干扰 */}
            <Image
              src={s.img}
              alt={s.title}
              preview={false}
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />

            {/* 半透明遮罩（柔化） */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.45) 100%)',
                zIndex: 1,
              }}
            />

            <div className="banner-content">
              <h1>{s.title}</h1>
              <p>{s.subtitle}</p>

              {/* {s.cta && (
                <button
                  size="large"
                  onClick={() => {
                    if (s.cta?.href) {
                      // 保持为单页内导航或外部跳转按需替换
                      window.location.href = s.cta.href;
                    }
                  }}
                >
                  {s.cta.label}
                </button>
              )} */}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}