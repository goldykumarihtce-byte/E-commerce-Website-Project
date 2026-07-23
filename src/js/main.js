import "../scss/styles.scss";

import "bootstrap";


import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

new Swiper(".heroSwiper", {

    modules: [Autoplay],

    slidesPerView: 1.15,

    spaceBetween: 16,

    loop: true,

    speed: 700,

    grabCursor: true,

    autoplay: {

        delay: 2500,

        disableOnInteraction: false,

    },

    breakpoints: {

        576: {

            slidesPerView: 1.3,

        },

        768: {

            slidesPerView: 2,

        },

        992: {

            enabled: false,

        }

    }

});