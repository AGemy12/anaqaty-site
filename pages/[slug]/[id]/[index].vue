<template>
  <MainLoader v-if="isLoading" />

  <section class="section_container container" v-else>
    <div
      class="your_blogs_content"
      v-if="String(route.params.id).includes('31-')"
    >
      <nuxt-link to="https://wa.me/905052373067" target="_blank">
        <span class="your_blogs_text"> يمكنك ارسال تدويناتك عبر الواتساب</span>
        <Icon class="your_blogs_icon" name="logos:whatsapp-icon" />
      </nuxt-link>
    </div>
    <PageTitle :page-title="titleOfPage" />
    <div class="section_content">
      <div>
        <Category
          :category-details="categoryArticlesData.data"
          :homePage="false"
        />
        <Pagination
          :more-than-two-pages="moreThanTwoPages"
          :value="currentPage"
          :length="totalPages"
          @update:model-value="getCategoryArticles"
        />
        <ArticlesCarousel
          v-if="mostViewedArticles.length > 0"
          categorytitle="الأعلى مشاهدة"
          :articles-items="mostViewedArticles"
          :autoplay="{ delay: 3000 }"
        />
        <ArticlesCarousel
          v-if="latestArticles.length > 0"
          categorytitle=" أحدث المقالات "
          :articles-items="latestArticles"
          :autoplay="{ delay: 3000 }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Category from "~/components/main/Category.vue";
import PageTitle from "~/components/mini/PageTitle.vue";
import Pagination from "~/components/mini/Pagination.vue";
import { ref, onMounted, watch } from "vue";
import MainLoader from "~/components/main/MainLoader.vue";
import { useRoute, useRouter } from "vue-router";
import ArticlesCarousel from "~/components/main/ArticlesCarousel.vue";

const { $axiosRequest } = useNuxtApp();
const route = useRoute();
const router = useRouter();
const categoryArticlesData = ref([]);
const categoryName = ref("");
const categoryIdentical = ref("");
const mostViewedArticles = ref([]);
const latestArticles = ref([]);
const isLoading = ref(true);
const titleOfPage = ref("");
const moreThanTwoPages = ref(false);
const totalPages = ref(1);
const currentPage = ref(1);
useHead({
  link: [
    {
      rel: "canonical",
      href: `https://www.anaqatyy.com/category/${route.params.id}`,
    },
  ],
});

watchEffect(() => {
  useHead({
    title: `Anaqaty | ${titleOfPage.value}`,
  });
});

/* <==============> Start :: Get Category Articles Req <==============> */
async function getCategoryArticles(page = 1) {
  const categoryId = route.params.id;
  isLoading.value = true;

  try {
    const res = await $axiosRequest.get(
      `ArticlesBycategory/${categoryId}?page=${page}`
    );
    if (res.data.articles.data.length > 0) {
      categoryArticlesData.value = res.data.articles;
      categoryName.value = res.data.articles.data[0].category.slug;
      categoryIdentical.value = res.data.articles.data[0].category.id;
      totalPages.value = res.data.articles.last_page;
      currentPage.value = res.data.articles.current_page;
      moreThanTwoPages.value = totalPages.value > 1;
      titleOfPage.value = res.data.articles.data[0].category.name;
    }
    isLoading.value = false;
  } catch (error) {
    console.log("Error ===>", error);
    isLoading.value = false;
  }
}
/* <==============> End :: Get Category Articles Req <==============> */

/* <==============> Start :: Get Most Viewed Articles Req <==============> */
async function getMostViewedArticles() {
  const categoryId = route.params.id;
  isLoading.value = true;
  try {
    const res = await $axiosRequest.get(`CategoryMostViewed/${categoryId}`);
    if (res.status >= 200 && res.status < 300) {
      mostViewedArticles.value = res.data.category_most_viewed;
      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
    isLoading.value = false;
  }
}
/* <==============> End :: Get Most Viewed Articles Req <==============> */

/* <==============> Start :: Get Most Viewed Articles Req <==============> */
async function getLatestArticles() {
  const categoryId = route.params.id;
  isLoading.value = true;
  try {
    const res = await $axiosRequest.get(`CategoryLatestArticles/${categoryId}`);
    if (res.status >= 200 && res.status < 300) {
      latestArticles.value = res.data.Category_Latest_Articles;
      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
    isLoading.value = false;
  }
}
/* <==============> End :: Get Most Viewed Articles Req <==============> */

onMounted(() => {
  getCategoryArticles();
  getMostViewedArticles();
  getLatestArticles();
});
</script>

<style lang="scss">
.your_blogs_content {
  width: fit-content;
  margin: 1rem auto 2rem auto;
  a {
    @include flex(center, center, row, 5px);
    padding: 1rem;
    background-color: var(--alt_color);
    border-radius: 5px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      height: 2px;
      width: 0%;
      background-color: var(--dark);
      transition: var(--main_transition);
    }
    &:hover::before {
      width: 100%;
    }
    .your_blogs_text {
      font-size: 1.1rem;
    }
    .your_blogs_icon {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 480px) {
    a {
      .your_blogs_text {
        font-size: 1rem;
      }
    }
  }
}
</style>
