import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./Swiper.module.css";

const slideData = [
  {
    imgSrc: "./img/dentists/first.svg",
    name: "Dr. Marteen Bryant",
    status: "General dentist",
  },
  {
    imgSrc: "./img/dentists/second.svg",
    name: "Dr. Julia Barbarat",
    status: "General dentist",
  },
  {
    imgSrc: "./img/dentists/third.svg",
    name: "Dr. Natasha smith",
    status: "General dentist",
  },
];

export const Slider = () => {
  const swiperWrapperRef = useRef<HTMLElement | null>(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <div className={styles.box}>
      <div className={`swiper-button-prev ${styles.customPrev}`}></div>
      <div className={`swiper-button-next ${styles.customNext}`}></div>

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        speed={800}
        loop={true}
        slideToClickedSlide={true}
        initialSlide={1}
        onSwiper={(swiper) => {
          swiperWrapperRef.current = swiper.wrapperEl;
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className={styles.card}>
            <img
              src={slide.imgSrc}
              width={289}
              height={274}
              alt="Doctors' portfolios"
            />
            <div className={styles.content}>
              <div className={styles.heading}>
                <h3 className={styles.doctorName}>{slide.name}</h3>
                <span className={styles.jobTitle}>{slide.status}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
