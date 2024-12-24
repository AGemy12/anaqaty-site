<template>
  <MainLoader v-if="isLoading" />
  <section class="article_container container" v-else>
    <div class="article_head_content">
      <RoutingButton
        :category-id="articleData.category.id"
        :first-segment="articleData.category.slug"
        :category-slug="articleData.category.slug"
        :article-title="articleData.title"
      />
      <ArticleSection
        :with-article-title="true"
        :main-head="articleData.title"
        :main-img-src="articleData.image_path"
        :article-date="articleData.published_at"
        :cat-path="`/category/${articleData.id}-${articleData.slug}`"
        :cat-title="articleData.name"
        :article-body="articleData.content"
        :has-paragraph="true"
      />
      <ArticlesCarousel
        v-if="relatedArticlesData.length > 0"
        categorytitle="مواضيع ذات صلة"
        :articles-items="relatedArticlesData"
        :autoplay="{ delay: 3000 }"
      />
    </div>
  </section>
</template>

<script setup>
/* <==============> Start :: Imports <==============> */
import ArticleSection from "~/components/mini/ArticleSection.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import MainLoader from "~/components/main/MainLoader.vue";
import RoutingButton from "~/components/mini/RoutingButton.vue";
import ArticlesCarousel from "~/components/main/ArticlesCarousel.vue";
import { useAsyncData } from "#app";
/* <==============> End :: Imports <==============> */

/* <==============> Start :: State and Route <==============> */
const route = useRoute();
/* <==============> End :: State and Route <==============> */

definePageMeta({
  middleware: "complete-urls",
});

/* <==============> Start :: Async Data Loading <==============> */
const { data: articleData, pending: articleLoading } = useAsyncData(
  "articleData",
  async () => {
    const id = String(route.path);
    const articleId = id.match(/\/(\d+)(?:-\b)?/)?.[1];
    const { $axiosRequest } = useNuxtApp();
    const res = await $axiosRequest.get(`ArticleViews/${articleId}`);
    return res.data.article;
  }
);

const { data: relatedArticlesData, pending: relatedLoading } = useAsyncData(
  "relatedArticlesData",
  async () => {
    const id = String(route.path);
    const articleId = id.match(/\/(\d+)-/)?.[1];
    const { $axiosRequest } = useNuxtApp();
    const res = await $axiosRequest.get(`relatedArticles/${articleId}`);
    return res.data.related_articles;
  }
);

/* <==============> Set Loading State <==============> */
const isLoading = computed(() => articleLoading.value || relatedLoading.value);
/* <==============> End :: Async Data Loading <==============> */

/* <==============> Start :: Page Head Details <==============> */
useHead({
  title: () =>
    articleData.value ? `Anaqaty | ${articleData.value.title}` : "",
  meta: [
    {
      name: "keywords",
      content: () =>
        articleData.value?.keywords?.map((k) => k.keyword).join(", ") || "",
    },
    { name: "description", content: () => articleData.value?.summary || "" },
    { property: "og:title", content: () => articleData.value?.title || "" },
    {
      property: "og:url",
      content: () => `https://www.anaqatyy.com${route.fullPath}` || "",
    },
    { property: "og:type", content: () => "article" },
    {
      property: "og:description",
      content: () => articleData.value?.summary || "",
    },
    {
      property: "og:image",
      content: () => articleData.value?.image_path || "",
    },
    {
      property: "og:image:url",
      content: () => articleData.value?.image_path || "",
    },
    {
      property: "og:image:secure_url",
      content: () => articleData.value?.image_path || "",
    },
    {
      property: "article:section",
      content: () => articleData.value?.name || "",
    },
    {
      property: "twitter:image",
      content: () => articleData.value?.image_path || "",
    },
    {
      property: "twitter:description",
      content: () => articleData.value?.summary || "",
    },
    { property: "og:title", content: () => articleData.value?.title || "" },

    {
      property: "twitter:domain",
      content: "www.anaqatyy.com",
    },
    {
      property: "twitter:site",
      content: "@anaqatyy",
    },
    {
      property: "twitter:url",
      content: `https://www.anaqatyy.com${route.fullPath}`,
    },
  ],
});
/* <==============> End :: Page Head Details <==============> */
</script>

<style lang="scss">
.article_container {
  margin: 2rem 0;
  .article_head_content {
    img {
      width: 100%;
      display: block;
    }
  }
  .article_body {
    padding: 1em;
    a {
      text-decoration: underline;
      color: blue;
    }
    p {
      margin: 1em 0;
      text-align: justify;
      line-height: 2;
    }
    ul {
      margin: 0.5rem auto 0.5rem 0;
      width: 90%;
      li {
        position: relative;
        display: flex;
        line-height: 2;
        &::before {
          content: "";
          position: absolute;
          right: -15px;
          top: 15px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #000;
        }
        span {
          margin: 0 15px 0 0;
          text-align: justify;
        }
      }
    }

    .image img {
      width: 100%;
      box-shadow: var(--shadow);
      border-radius: var(--md_border_rd);
      height: auto;
      aspect-ratio: 1/1 !important;
    }
  }
}
</style>
