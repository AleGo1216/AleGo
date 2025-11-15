// app/product/[id]/components/SubHeroClient.tsx
'use client';
import React, { useState } from 'react';

type Props = {
  breadcrumbs: string;
  pills?: string[];
  authTitle?: string;
  authSubtitle?: string;
};

export default function SubHeroClient({
  breadcrumbs,
  pills = [],
  authTitle = 'Buy with confidence',
  authSubtitle = "Numbered certificate • Artist's note • Transit protection",
}: Props) {
  // 初始所有 pill 都是未按下状态
  const [pressed, setPressed] = useState<boolean[]>(pills.map(() => false));

  const toggle = (idx: number) => {
    setPressed(prev => {
      const next = [...prev];
      next[idx] = !next[idx];
      return next;
    });
  };

  const onKeyToggle = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(idx);
    }
  };

  return (
    <div className="sub-hero" role="region" aria-label="Product breadcrumb and quick actions">
      <div className="breadcrumbs">{breadcrumbs}</div>

      <div className="sub-cta">
        {pills.map((p, i) => (
          <div
            key={i}
            className={`pill interactive ${pressed[i] ? 'active' : ''}`}
            tabIndex={0}
            role="button"
            aria-pressed={pressed[i]}
            onClick={() => toggle(i)}
            onKeyDown={(e) => onKeyToggle(e, i)}
          >
            {p}
          </div>
        ))}

        <div
          className="auth-chip interactive"
          role="status"
          aria-live="polite"
          tabIndex={0}
          title="Authenticity guaranteed"
        >
          <div className="auth-badge" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
              <path d="M12 2l6 4v5c0 5-3.5 9-6 11-2.5-2-6-6-6-11V6l6-4z" fill="#071018" />
            </svg>
            AUTHENTIC
          </div>

          <div style={{ lineHeight: 1.05, marginLeft: 10 }}>
            <div style={{ fontWeight: 700, color: 'var(--text)' }}>{authTitle}</div>
            <small style={{ display: 'block', color: 'var(--muted)' }}>{authSubtitle}</small>
          </div>
        </div>
      </div>
    </div>
  );
}