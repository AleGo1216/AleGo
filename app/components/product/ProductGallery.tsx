

"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "next/image"


export default function ProductGallery({ product }: { product: Product }) {
  
    // const images = product?.product_image?.image_list
    const images = [
       
"https://7072-prod-7gg3usnk188655b8-1328449234.tcb.qcloud.la/WechatIMG32862.jpg?sign=84f13a367a0f1129ebf308bc6a993fc3&t=1757144586"
,
"https://7072-prod-7gg3usnk188655b8-1328449234.tcb.qcloud.la/WechatIMG32856.jpg?sign=70ed716e47d1a5f8a485984b27ce42be&t=1757144806"

    ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="gallery" aria-label="Product images">
      <div className="carousel">
        {/* <div className="slides-wrap">
          <div
            className="slides"
            style={{
            //   display: "flex",
              transition: "transform 0.5s ease",
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((n,index) => (
              <div className="slide" key={index} style={{ minWidth: "100%" }}>
                <div className="image-wrap">
                  <img
                    src={n}
                    alt={`Kitsune view ${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="indicator">{currentIndex + 1} / {images.length}</div>

        <button onClick={prevSlide} className="nav-arrow arrow-left interactive">
          ‹
        </button>
        <button onClick={nextSlide} className="nav-arrow arrow-right interactive">
          ›
        </button> */}
           <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        >
              {images.map((n,index) => (
            <SwiperSlide>
            <Image src={n}
              width={800} height={200} alt={""}
              className="rounded-md cursor-pointer w-full"
              />
          </SwiperSlide>
            ))}
       
      </Swiper>
        
      </div>

      <div className="thumbs">
        {images.map((n, index) => (
          <div
            key={n}
            className={`thumb ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            <img src={n} alt={`thumb ${index}`} />
          </div>
        ))}
      </div>

      <div className="muted" style={{ marginTop: 14, fontSize: 13 }}>
        Click an image to enlarge. Each edition is hand‑finished; subtle variations are signs of craft.
      </div>
    </section>
  );
}

