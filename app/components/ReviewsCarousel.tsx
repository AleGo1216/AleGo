'use client';
import React, { useEffect, useRef, useState } from 'react';
import { WechatWorkOutlined} from "@ant-design/icons";

const REVIEWS = [
  { text: "Absolutely stunning craftsmanship. The detail is beyond anything I've seen. A true centerpiece!", author: "Alex Johnson" },
  { text: "The quality of materials and the artistic vision are exceptional. Worth every penny.", author: "Sarah Chen" },
  { text: "ALeToys delivered on their promise of premium. This statue is a work of art.", author: "Michael Rodriguez" },
  { text: "Impressed by the limited edition aspect and the unique designs. Highly recommend!", author: "Emily Carter" },
  { text: "Fast shipping and excellent packaging. The statue arrived in perfect condition.", author: "David Lee" },
  { text: "The level of detail and the hand-painted finish are incredible. A treasure for any collector.", author: "Jessica Kim" },
  { text: "This is my third purchase, and I'm consistently blown away by the artistry and quality.", author: "Christopher Davis" },
  { text: "The 'wow' factor is undeniable. The statues truly elevate my collection.", author: "Olivia Brown" },
  { text: "A must-have for any serious collector of high-end statues.", author: "William Taylor" },
  { text: "Exquisite. The balance of design and execution is perfect. Thank you, ALeToys!", author: "Sophia Wilson" }
];

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = window.setInterval(() => {
      setCurrent(i => (i + 1) % REVIEWS.length);
    }, 2000);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // const prev = () => setCurrent(i => (i - 1 + REVIEWS.length) % REVIEWS.length);
  // const next = () => setCurrent(i => (i + 1) % REVIEWS.length);

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h2 className="reviews-title">Customer Spotlight</h2>
        <p className="reviews-subtitle">Hear from our valued collectors.</p>
      </div>

      <div
        className="reviews-carousel"
        ref={carouselRef}
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        {REVIEWS.map((r, i) => (
          <div key={i} className={`review-item ${i === current ? 'active' : ''}`}>
             <WechatWorkOutlined style={{ color: "var(--accent1)", fontSize: 20 }} />
            <p>{r.text}</p>
            <div className="reviewer">- {r.author}</div>
          </div>
        ))}

        {/* <div className="review-controls">
          <i className="fas fa-chevron-left prev-review" onClick={prev} />
          <i className="fas fa-chevron-right next-review" onClick={next} />
        </div> */}
      </div>
    </section>
  );
}