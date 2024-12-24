<template>
  <div
    class="category_item"
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000"
  >
    <nuxt-link class="category_item_image_link" :to="topicLink">
      <div class="category_item_img">
        <img :src="topicImage" :alt="topicHeadTitle" />
      </div>
    </nuxt-link>
    <div class="category_item_info">
      <nuxt-link class="category_item_category_link" :to="categoryPath">
        {{ categoryType }}
      </nuxt-link>
      <nuxt-link class="category_item_info_link" :to="topicLink">
        {{ topicHeadTitle }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  categoryItemImg: {
    type: String,
  },
  topicImage: {
    type: String,
  },
  topicImageALt: {
    type: String,
  },
  categoryType: {
    type: String,
  },
  topicLink: {
    type: String,
  },
  categoryPath: {
    type: String,
  },
  topicHeadTitle: {
    type: String,
  },
});
</script>

<style lang="scss">
.category_item {
  background-color: var(--alt_color);
  border-radius: var(--sm_border_rd);
  box-shadow: var(--shadow);
  overflow: hidden;
  flex-shrink: 0;
  .category_item_img {
    @include flex(center, center);
    img {
      width: 100%;
    }
  }
  .category_item_info {
    padding: 1rem;
    text-align: justify;
    min-height: 80px;
    @include flex(center, flex-start, column);
    .category_item_category_link {
      display: block;
      width: fit-content;
      color: #686666;
      font-weight: bold;
      transition: color var(--main_transition);
    }
    .category_item_info_link {
      margin: 0 0.5rem;
      font-size: 1.1rem;
      display: block;
      transition: color var(--main_transition);
    }
  }
  &:hover .category_item_info_link {
    color: #686666;
  }
  &:hover .category_item_category_link {
    color: var(--dark);
  }
  @media (max-width: 480px) {
    .category_item_info {
      .category_item_info_link {
        font-size: 1rem;
      }
    }
  }
}
</style>
