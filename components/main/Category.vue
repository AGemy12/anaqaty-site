<template>
  <section class="category_container">
    <CategoryTitle :categorytitle="categoryName" v-if="homePage" />
    <div class="category_content">
      <CategoryItem
        v-for="item in categoryDetails"
        :key="item.id"
        :topicImage="item.image_path"
        :topicImageAlt="item.topicImageAlt"
        :topicLink="`/category/articles/${item.id}-${item.slug}`"
        :topicHeadTitle="item.title"
        :categoryType="categoryType"
        :categoryPath="categoryPath"
      />
    </div>
  </section>
</template>

<script setup>
import CategoryTitle from "../mini/CategoryTitle.vue";
import CategoryItem from "./CategoryItem.vue";

// function getCookie(name) {
//   const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
//   if (match) {
//     return decodeURIComponent(match[2]);
//   }
//   return null;
// }

// متغيرات لتخزين قيم الـ cookie
// const categoryPath = ref("");

// onMounted(() => {
//   const savedCategoryPath = getCookie("selectedCategory");
//   if (savedCategoryPath) {
//     categoryPath.value = savedCategoryPath;
//     console.log("Category path loaded from cookie:", categoryPath.value);
//   }
// });

defineProps({
  homePage: {
    type: Boolean,
    required: true,
  },
  categoryName: {
    type: String,
  },
  categoryDetails: {
    type: Array,
    default: [],
  },
  categoryType: {
    type: String,
  },
  categoryPath: {
    type: String,
  },
  categorySlug: {
    type: String,
  },
  fireClickHandle: {
    type: Function,
  },
});
</script>

<style lang="scss">
.category_container {
  overflow: hidden;
  .category_content {
    @include grid(300px, 20px);
  }
}
</style>
