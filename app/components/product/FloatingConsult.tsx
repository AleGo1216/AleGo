// app/product/[id]/components/FloatingConsult.tsx
'use client';
import React from 'react';

export default function FloatingConsult() {
  function handleClick() {
    const open = confirm('Chat with our studio specialist via WhatsApp?\n\n(OK: open chat • Cancel: copy support email)');
    if (open) {
      window.open('https://wa.me/1234567890', '_blank');
    } else {
      navigator.clipboard?.writeText('support@aletoys.example')?.then(() => alert('Support email copied: support@aletoys.example'));
    }
  }

  return (
    <button className="consult-floating interactive" onClick={handleClick} aria-label="Chat with our specialist" title="Chat with our specialist">
      <span className="ring r1" aria-hidden="true"></span>
      <span className="ring r2" aria-hidden="true"></span>
      <span className="ring r3" aria-hidden="true"></span>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H8l-4 3V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
    </button>
  );
}