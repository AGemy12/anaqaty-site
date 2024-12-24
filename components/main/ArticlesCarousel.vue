<template>
  <div class="latest_articles_container">
    <CategoryTitle :categorytitle="categorytitle" />
    <swiper
      class="carousel_wrapper"
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      :scrollbar="{ draggable: true }"
      :autoplay="autoplay"
      :breakpoints="{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }"
    >
      <swiper-slide
        class="carousel_slide"
        v-for="item in articlesItems"
        :key="item.id"
      >
        <CategoryItem
          :topic-image="item.image_path"
          :topic-link="`/category/articles/${item.id}-${item.slug}`"
          :category-type="
            item.category?.name ? item.category.name : categoryType
          "
          :category-path="`/category/${
            item.category?.id ? item.category?.id : catId
          }-${item.category?.slug ? item.category.slug : catSlug}`"
          :topic-head-title="item.title"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import CategoryItem from "./CategoryItem.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Scrollbar,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CategoryTitle from "../mini/CategoryTitle.vue";

const modules = [Navigation, Pagination, A11y, Autoplay, Scrollbar];

defineProps({
  articlesItems: {
    type: Array,
  },
  categorytitle: {
    type: String,
  },
  categoryType: {
    type: String,
  },
  catId: {
    type: String,
  },
  catSlug: {
    type: String,
  },
  autoplay: {
    type: Object,
  },
});
</script>

<style lang="scss">
.latest_articles_container {
  overflow: hidden;
  .carousel_wrapper {
    padding-bottom: 2rem;
    overflow: hidden;
    .carousel_slide {
      width: 100%;
      flex-shrink: 0;
    }
  }
}

/* Start <=====> Swiper Customization Styles */
.swiper {
  .swiper-slide {
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
.swiper-slide {
  transition: none;
  opacity: 1;
}

.swiper-scrollbar .swiper-scrollbar-horizontal {
}
/* End   <=====> Swiper Customization Styles */
</style>
