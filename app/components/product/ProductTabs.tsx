"use client";

export default function ProductTabs() {
  return (
    <div style={{ gridColumn: "1 / -1" }}>
      <div className="content-shell">
        <div className="tabs" role="tablist" id="tabs">
          <div className="tab active" data-tab="details">Details & Gallery</div>
          <div className="tab" data-tab="specs">Specifications</div>
          <div className="tab" data-tab="reviews">Reviews (89)</div>
          <div className="tab" data-tab="returns">Returns & Care</div>
        </div>

        <div className="tab-content" id="tabContent">
          <div className="tab-pane show" data-content="details" id="pane-details">
            <h3>A story in every brushstroke</h3>
            <p className="muted-note">Each Kitsune edition is hand‑finished...</p>
            <div className="vertical-gallery">
              {[1, 3, 5, 4].map((n) => (
                <div className="vg-img" key={n}>
                  <img src={`/images/product-${n}.jpg`} alt={`view ${n}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="tab-pane" data-content="specs" id="pane-specs">
            <div className="spec-grid">
              <div className="spec"><strong>Artist:</strong> Y. Nakamoto</div>
              <div className="spec"><strong>Edition:</strong> Limited to 250</div>
              <div className="spec"><strong>Material:</strong> Resin core</div>
              <div className="spec"><strong>Size:</strong> 28 cm × 16 cm</div>
            </div>
          </div>

          <div className="tab-pane" data-content="reviews" id="pane-reviews">
            <div className="review">
              <div className="meta">★★★★★ — Marina, CA</div>
              <div>“Gallery‑level finish and packaging...”</div>
            </div>
          </div>

          <div className="tab-pane" data-content="returns" id="pane-returns">
            <h4>Returns & Care</h4>
            <p className="muted-note">Contact us within 7 days for repair or replacement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}