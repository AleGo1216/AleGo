'use client';
export default function ProductModal() {
  return (
    <div className="modal-backdrop" id="modalBackdrop" aria-hidden="true">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="close-btn" id="modalClose" aria-label="Close details">
          ✕
        </button>

        <div style={{ position: 'relative' }}>
          <div className="media" id="modalImageWrap">
            <img
              id="modalImage"
              src=""
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        <div className="meta">
          <h2 id="modalTitle" style={{ margin: '0 0 8px' }}>
            Title
          </h2>
          <div className="muted" id="modalSku" style={{ marginBottom: 12 }}>
            SKU · Artist
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'var(--accent1)' }} id="modalPrice">
              \$0
            </div>
            <div
              className="badge"
              id="modalEdition"
              style={{
                position: 'static',
                background: 'transparent',
                color: 'var(--muted)',
                padding: '6px 8px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.03)',
              }}
            >
              Edition
            </div>
          </div>

          <p id="modalDesc" className="muted" style={{ marginTop: 8 }}>
            Product description goes here...
          </p>

          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            <button className="btn primary" id="modalFavBtn">
              Save
            </button>
            <button className="btn" id="modalDetailsPage">
              Open product page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}