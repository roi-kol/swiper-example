import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { imagesList } from '../../data'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import "./SliderGallery.css";

// import Swiper core and required modules
import SwiperCore, {
  Lazy, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation]);

const SliderGallery = React.memo((props) => {

  // Params definition
  let params = {
    dir: "rtl",
    modules: [Pagination, Navigation, Lazy],
    preloadImages: false,
    observer: true,
    lazy: true,
    loop: true,
    grabCursor: true,
    keyboard: {
      "enabled": true
    },
    pagination: {
      "clickable": true,
      "renderBullet": function (index, className) {
        return '<span class=\"modBullet ' + className + '\"></span>';
      }
    },
    navigation: true,
    style: { '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#B69863' },
    spaceBetween: 10,
    slidesPerView: 2,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 24,
      }
    },
    onSlideChange: () => console.log('slide change'),
  };

  return (
    <>
      <Swiper {...params}>
        {imagesList.map(
          (image, idx) =>
            console.log(`Showing image set ${image}`) || (
              <SwiperSlide key={`slide_${idx}`}>
                <img
                  alt={image.title}
                  key={image.imgFileName}
                  className="swiper-lazy"
                  data-src={image.imgFileName}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>

    </>
  );
});
export default SliderGallery;