// app/product/[id]/components/CarouselClient.tsx
'use client';
import React, { useEffect, useRef, useState } from 'react';

type Props = { images: string[] };

export default function CarouselClient({ images }: Props) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const autoTimerRef = useRef<number | null>(null);
  const AUTO_INTERVAL = 4500;

  useEffect(() => {
    // update transform whenever index changes
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startAuto() {
    stopAuto();
    autoTimerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_INTERVAL);
  }
  function stopAuto() {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }
  function restartAuto() {
    stopAuto();
    startAuto();
  }

  // normalize image fit on load/resize: use onLoad handlers per <img>
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    const wrap = img.closest('.image-wrap') as HTMLElement | null;
    if (!wrap) return;
    const containerRatio = wrap.clientWidth / Math.max(1, wrap.clientHeight);
    const naturalW = img.naturalWidth || img.width;
    const naturalH = img.naturalHeight || img.height;
    const imgRatio = naturalW / Math.max(1, naturalH);

    if (imgRatio < containerRatio * 0.8 || imgRatio > containerRatio * 1.25) {
      img.classList.add('contain');
    } else {
      img.classList.remove('contain');
    }
  };

  // open modal by dispatching a custom Browser event (Modal is separate client component listening)
  const openModal = (startIdx = 0) => {
    const ev = new CustomEvent('open-product-modal', { detail: { index: startIdx, images } });
    window.dispatchEvent(ev);
  };

  return (
    <>
      <div className="carousel" id="carousel" aria-hidden="false"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onFocus={stopAuto}
        onBlur={restartAuto}
      >
        <div className="product-contact-cta interactive" role="region" aria-label="Contact our studio about this piece" tabIndex={0}>
          <div className="pc-cta-text">Curious about finish or framing?</div>
          <a className="pc-contact-link interactive" href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('consult-click')); }} aria-label="Contact the studio">Ask our studio</a>
        </div>

        <div className="slides-wrap">
          <div className="slides" id="slides" ref={slidesRef} aria-live="polite" style={{ width: `100%` }}>
            {images.map((src, i) => (
              <div key={i} className="slide" style={{ flex: '1 0 100%' }}>
                <div className="image-wrap">
                  <img
                    src={src}
                    alt={`Product image ${i + 1}`}
                    data-index={i}
                    style={{ cursor: 'zoom-in', width: '100%', height: 'auto', objectFit: 'cover' }}
                    onLoad={handleImageLoad}
                    onClick={() => openModal(i)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="indicator" id="indicator">{index + 1} / {total}</div>

        <button className="nav-arrow arrow-left interactive accent-hover" aria-label="Previous image" onClick={() => { setIndex((i) => (i - 1 + total) % total); restartAuto(); }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="#eaf6f0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>

        <button className="nav-arrow arrow-right interactive accent-hover" aria-label="Next image" onClick={() => { setIndex((i) => (i + 1) % total); restartAuto(); }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#eaf6f0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
      </div>

      <div className="thumbs" style={{ marginTop: 14 }}>
        {images.map((src, i) => (
          <div
            key={i}
            className={`thumb ${i === index ? 'active' : ''}`}
            data-index={i}
            tabIndex={0}
            aria-label={`View image ${i + 1}`}
            onClick={() => { setIndex(i); restartAuto(); }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setIndex(i); restartAuto(); } }}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      <div style={{ marginTop: 14, color: 'var(--muted)', fontSize: 13 }}>
        Click an image to enlarge. Studio photography favors composition and texture — each edition is hand‑finished.
      </div>
    </>
  );
}