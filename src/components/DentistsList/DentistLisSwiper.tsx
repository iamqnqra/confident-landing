import { Swiper, SwiperSlide } from "swiper/react";
import "./DentistListSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./DentistListSwiper.module.css";

import { Pagination, Navigation } from "swiper/modules";

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
    socialContacts: [
      {
        href: "https://www.instagram.com/",
        icon: (
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 0.524536C31.5574 0.524536 40.5 9.26701 40.5 20.0255C40.5 30.784 31.5574 39.5265 20.5 39.5265C9.44264 39.5265 0.500042 30.784 0.5 20.0255C0.5 9.26701 9.44262 0.524536 20.5 0.524536Z"
              stroke="#3366FF"
            />
            <path
              d="M20.9973 14.8942C18.1579 14.8942 15.8664 17.1859 15.8664 20.0254C15.8664 22.865 18.1579 25.1566 20.9973 25.1566C23.8367 25.1566 26.1282 22.865 26.1282 20.0254C26.1282 17.1859 23.8367 14.8942 20.9973 14.8942ZM20.9973 23.3603C19.1611 23.3603 17.6626 21.8618 17.6626 20.0254C17.6626 18.1891 19.1611 16.6905 20.9973 16.6905C22.8335 16.6905 24.332 18.1891 24.332 20.0254C24.332 21.8618 22.8335 23.3603 20.9973 23.3603ZM26.3383 13.4882C25.6754 13.4882 25.14 14.0236 25.14 14.6866C25.14 15.3496 25.6754 15.885 26.3383 15.885C27.0013 15.885 27.5366 15.3521 27.5366 14.6866C27.5368 14.5292 27.5059 14.3732 27.4458 14.2278C27.3856 14.0823 27.2974 13.9501 27.1861 13.8388C27.0748 13.7275 26.9426 13.6392 26.7971 13.579C26.6516 13.5189 26.4957 13.488 26.3383 13.4882ZM30.9989 20.0254C30.9989 18.6444 31.0114 17.276 30.9338 15.8975C30.8563 14.2963 30.4911 12.8753 29.3203 11.7044C28.147 10.5311 26.7286 10.1683 25.1275 10.0908C23.7466 10.0132 22.3782 10.0257 20.9998 10.0257C19.6189 10.0257 18.2505 10.0132 16.8721 10.0908C15.271 10.1683 13.8501 10.5336 12.6793 11.7044C11.5061 12.8778 11.1433 14.2963 11.0658 15.8975C10.9882 17.2785 11.0007 18.6469 11.0007 20.0254C11.0007 21.4039 10.9882 22.7749 11.0658 24.1534C11.1433 25.7546 11.5086 27.1756 12.6793 28.3464C13.8526 29.5198 15.271 29.8825 16.8721 29.9601C18.253 30.0376 19.6214 30.0251 20.9998 30.0251C22.3807 30.0251 23.7491 30.0376 25.1275 29.9601C26.7286 29.8825 28.1495 29.5173 29.3203 28.3464C30.4936 27.1731 30.8563 25.7546 30.9338 24.1534C31.0139 22.7749 30.9989 21.4064 30.9989 20.0254ZM28.7974 25.9247C28.6148 26.38 28.3947 26.7203 28.0419 27.0705C27.6892 27.4233 27.3515 27.6434 26.8962 27.8261C25.5803 28.3489 22.4558 28.2313 20.9973 28.2313C19.5389 28.2313 16.4118 28.3489 15.0959 27.8286C14.6406 27.6459 14.3004 27.4258 13.9502 27.073C13.5975 26.7203 13.3773 26.3825 13.1947 25.9272C12.6743 24.6087 12.7919 21.484 12.7919 20.0254C12.7919 18.5669 12.6743 15.4396 13.1947 14.1237C13.3773 13.6684 13.5975 13.3281 13.9502 12.9779C14.3029 12.6276 14.6406 12.405 15.0959 12.2223C16.4118 11.7019 19.5389 11.8195 20.9973 11.8195C22.4558 11.8195 25.5828 11.7019 26.8987 12.2223C27.354 12.405 27.6942 12.6251 28.0444 12.9779C28.3972 13.3306 28.6173 13.6684 28.7999 14.1237C29.3203 15.4396 29.2027 18.5669 29.2027 20.0254C29.2027 21.484 29.3203 24.6087 28.7974 25.9247Z"
              fill="#3366FF"
            />
          </svg>
        ),
      },
      {
        href: "https://www.facebook.com/",
        icon: (
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="20.5"
              cy="20.0254"
              rx="20.5"
              ry="20.0009"
              fill="#3366FF"
            />
            <path
              d="M22.7956 30.0259V20.9174H26.3496L26.8779 17.3511H22.7956V15.0795C22.7956 14.0504 23.1273 13.3459 24.8355 13.3459H27V10.1663C25.9468 10.0687 24.8882 10.0216 23.8291 10.0252C20.6877 10.0252 18.5308 11.6833 18.5308 14.7272V17.3444H15V20.9107H18.5386V30.0259H22.7956Z"
              fill="white"
            />
          </svg>
        ),
      },
      {
        href: "https://ru.linkedin.com/",
        icon: (
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 0.524536C31.5574 0.524536 40.5 9.26701 40.5 20.0255C40.5 30.784 31.5574 39.5265 20.5 39.5265C9.44264 39.5265 0.500042 30.784 0.5 20.0255C0.5 9.26701 9.44262 0.524536 20.5 0.524536Z"
              stroke="#3366FF"
            />
            <path
              d="M12.329 28.0258H15.6194V16.9253H12.329V28.0258ZM13.9742 12.0251C12.8774 12.0251 12 12.8251 12 13.8252C12 14.8252 12.8774 15.6252 13.9742 15.6252C15.071 15.6252 15.9484 14.8252 15.9484 13.8252C15.9484 12.8251 15.071 12.0251 13.9742 12.0251ZM21.2129 18.6254V16.9253H17.9226V28.0258H21.2129V22.3255C21.2129 19.1254 25.7097 18.9254 25.7097 22.3255V28.0258H29V21.2255C29 15.8253 22.7484 16.0253 21.2129 18.6254Z"
              fill="#3366FF"
            />
          </svg>
        ),
      },
      {
        href: "https://x.com/",
        icon: (
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 0.524536C31.5574 0.524536 40.5 9.26701 40.5 20.0255C40.5 30.784 31.5574 39.5265 20.5 39.5265C9.44264 39.5265 0.500042 30.784 0.5 20.0255C0.5 9.26701 9.44262 0.524536 20.5 0.524536Z"
              stroke="#3366FF"
            />
            <path
              d="M21.5217 18.8002L27.4777 12.0251H26.066L20.8958 17.9076L16.7644 12.0251H12L18.2466 20.9215L12 28.0258H13.4117L18.8724 21.8129L23.2356 28.0258H28L21.5217 18.8002ZM19.5889 20.9992L18.956 20.1134L13.9199 13.0651H16.0879L20.1512 18.7534L20.7841 19.6391L26.0672 27.0337H23.8991L19.5889 20.9992Z"
              fill="#3366FF"
            />
          </svg>
        ),
      },
    ],
  },
  {
    imgSrc: "./img/dentists/third.svg",
    name: "Dr. Natasha smith",
    status: "General dentist",
  },
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
  return (
    <div className={styles.swiperContainer}>
      <button
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
                        <a href={contact.href} key={contact.href} target="true">
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
        className={`${styles.swiperButtonNext} custom-swiper-button-next`}
      ></button>
    </div>
  );
};
