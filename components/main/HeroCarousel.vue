<template>
  <section class="carousel_container container">
    <swiper
      class="carousel_wrapper"
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 3000 }"
      effect="fade"
    >
      <swiper-slide
        class="carousel_slide"
        v-for="(slide, index) in carouselSlides"
        :key="index"
      >
        <img :src="slide.src" alt="صوره من صور المعرض" />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modules = [Navigation, Pagination, A11y, Autoplay];

const carouselSlides = ref([
  { id: 1, src: "/hero-carousel/hero1.jpg" },
  { id: 2, src: "/hero-carousel/hero2.jpg" },
  { id: 3, src: "/hero-carousel/hero3.jpg" },
  { id: 4, src: "/hero-carousel/hero4.jpg" },
  { id: 4, src: "/hero-carousel/hero5.jpg" },
  { id: 4, src: "/hero-carousel/hero6.jpg" },
  { id: 4, src: "/hero-carousel/hero7.jpg" },
  { id: 4, src: "/hero-carousel/hero8.jpg" },
  { id: 4, src: "/hero-carousel/hero9.jpg" },
  { id: 4, src: "/hero-carousel/hero10.jpg" },
  { id: 4, src: "/hero-carousel/hero11.jpg" },
]);
</script>

<style lang="scss">
.carousel_container {
  position: relative;
  min-height: 300px;
  @media (max-width: 480px) {
    margin-top: 1rem;
    padding: 0;
    min-height: auto;
  }
  .carousel_wrapper {
    overflow: hidden;
    .carousel_slide {
      width: 100%;
      flex-shrink: 0;
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }
  }

  /* Start <=====> Swiper Customization Styles */

  .swiper {
    .swiper-slide {
      transition: opacity 2s ease;
      opacity: 0;
      &.swiper-slide-active {
        opacity: 1;
      }
    }

    &:hover {
      .swiper-button-next,
      .swiper-button-prev {
        transform: translateX(0%);
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 5px;
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
      &:hover {
        background-color: var(--dark);
      }
      &::after {
        font-size: 15px;
        font-weight: bold;
      }
    }
    .swiper-button-next {
      transform: translateX(-150%);
    }
    .swiper-button-prev {
      transform: translateX(150%);
    }
    .swiper-pagination {
      bottom: 10px;
      .swiper-pagination-bullet {
        background: var(--dark);
        width: 10px;
        height: 10px;
        border-radius: 0px;
        transform: rotate(45deg);
        opacity: 0.6;
        transition: opacity 0.3s;
        &.swiper-pagination-bullet-active {
          background: var(--dark);
          opacity: 1;
        }
      }
    }
  }

  /* End   <=====> Swiper Customization Styles */

  /* Start <=====> Media Query */

  @media (max-width: 480px) {
    .swiper {
      .swiper-slide img {
        border-radius: 0;
      }
      .swiper-button-next,
      .swiper-button-prev {
        width: 25px;
        height: 25px;
        &::after {
          font-size: 12px;
        }
      }
      .swiper-pagination {
        .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
        }
      }
    }
  }
  /* End  <=====> Media Query */
}
</style>
