<template>
  <div class="routing">
    <div class="content container">
      <nuxt-link to="/">الرئيسية</nuxt-link>
      <Icon name="material-symbols-light:arrow-back-ios-new" />
      <nuxt-link :to="`/category/${categoryId}-${categorySlug}`">{{
        firstSegment
      }}</nuxt-link>
      <Icon name="material-symbols-light:arrow-back-ios-new" />
      <p>{{ articleTitle }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

defineProps({
  categoryId: {
    type: String,
  },
  categorySlug: {
    type: String,
  },
  firstSegment: {
    type: String,
  },
  articleTitle: {
    type: String,
  },
});
</script>

<style lang="scss">
.routing {
  width: fit-content;
  margin: 2rem 0;
  .content {
    @include flex(center, center, row, 0.3rem);
    span {
      font-size: 15px;
    }
    a {
      transition: var(--main_transition);
      font-weight: bold;
      text-wrap: nowrap;
      &:hover {
        text-decoration: underline;
      }
    }
    @media (max-width: 480px) {
      padding: 0 !important;
      align-items: flex-start;
      a,
      p {
        font-size: 0.8rem;
      }
      span {
        font-size: 20px;
      }
    }
  }
}
</style>
