import { Swiper, SwiperSlide } from "swiper/react";
import "./DentistListSwiper.css";
import "swiper/css";
import "swiper/css/pagination";
import { slideData } from "./DentistList.constants";
import styles from "./DentistListSwiper.module.css";

import { Pagination, Navigation } from "swiper/modules";

export const Slider = () => {
  return (
    <div className={styles.swiperContainer}>
      <button
        aria-label="Previous button"
        title="Previous button"
        className={`${styles.swiperButtonPrev} custom-swiper-button-prev `}
      ></button>
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className={`${styles.swiperInit} swiperInit`}
        slidesPerView={3}
        spaceBetween={38}
        centeredSlides
        loop
        initialSlide={1}
        breakpoints={{
          0: { slidesPerView: 1, centeredSlides: false },
          480: { slidesPerView: 1, centeredSlides: false, spaceBetween: 38 },
          769: { slidesPerView: 3 },
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${styles.swiperCard} swiperCard`}>
              <img
                src={slide.imgSrc}
                width={289}
                height={274}
                alt="doctor's photos"
              />
              <div className={styles.swiperCardContent}>
                <div className={styles.swiperDoctorInfo}>
                  <h3 className={styles.doctorName}>{slide.name}</h3>
                  <span className={styles.doctorJobTitle}>{slide.status}</span>
                  {slide.socialContacts && (
                    <ul className={styles.socialContacts}>
                      {slide.socialContacts.map((contact) => (
                        <a
                          href={contact.href}
                          key={contact.href}
                          target="_blank"
                          className={contact.className}
                        >
                          {contact.icon}
                        </a>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        aria-label="Next button"
        title="Next button"
        className={`${styles.swiperButtonNext} custom-swiper-button-next`}
      ></button>
    </div>
  );
};
