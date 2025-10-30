"use client";
export default function ProductModal() {
  return (
    <div className="modal" id="modal">
      <div className="modal-prev modal-nav" id="modalPrev">‹</div>
      <div className="inner">
        <div className="big-img" id="modalBig">
          <img id="modalImg" src="" alt="Enlarged product" />
        </div>
        <div className="side-thumbs" id="modalThumbs"></div>
      </div>
      <div className="modal-next modal-nav" id="modalNext">›</div>
      <div className="modal-close" id="modalClose">✕</div>
    </div>
  );
}