<template>
  <MainLoader v-if="isLoading" />
  <section v-else>
    <HeroCarousel />
    <div class="container">
      <template v-for="[key, category] in Object.entries(homeArticlesData)">
        <ArticlesCarousel
          v-if="category.articles.length > 0"
          :categorytitle="category.name"
          :articles-items="category.articles"
          :category-type="category.name"
          :cat-id="category.id"
          :cat-slug="category.slug"
          :autoplay="false"
          v-memo="[category.articles, category.name]"
        />
      </template>

      <ArticlesCarousel
        categorytitle="الأعلى مشاهدة"
        :articles-items="mostViewedArticels"
        :autoplay="{ delay: 3000 }"
      />
      <ArticlesCarousel
        categorytitle="احدث المقالات"
        :articles-items="latestArticlesData"
        :autoplay="{ delay: 3000 }"
      />
    </div>
  </section>
</template>

<script setup>
/* <==============> Start :: Imports <==============> */
import Category from "~/components/main/Category.vue";
import HeroCarousel from "~/components/main/HeroCarousel.vue";
import MainLoader from "~/components/main/MainLoader.vue";
import { ref, onMounted } from "vue";
import ArticlesCarousel from "~/components/main/ArticlesCarousel.vue";

/* <==============> End :: Imports <==============> */

/* <==============> Start :: Consts <==============> */
const { $axiosRequest } = useNuxtApp();
const isLoading = ref(true);
const homeArticlesData = ref({});
const latestArticlesData = ref([]);
const mostViewedArticels = ref([]);
const pageTitle = ref("");
/* <==============> End :: Consts <==============> */

/* <==============> Start :: Head Page Details <==============> */

useHead({
  title: "Anaqaty | الصفحة الرئيسية",
  meta: [
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "keywords",
      content:
        "موقع أناقتي, اناقتي, مجلة أناقتي, أناقتي دوت كوم, مجلة نسائية, المرأة العربية, موضه, جمال, صحة بدنية, سلام نفسي, حكايات بنات, طبخ, منزل وديكور, رشاقة, أمومة, علاقات صحية",
    },
    {
      name: "description",
      content:
        "مجلة أناقتي - عالم المرأة العربية: موضة، جمال، رشاقة، صحة، أمومة، مطبخ، ومنزل. انشري مدوناتك وأفكارك. نحن نسمعكِ وندعمكِ.",
    },
    {
      name: "abstract",
      content:
        "مجلة أناقتي - عالم المرأة العربية: موضة، جمال، رشاقة، صحة، أمومة، مطبخ، ومنزل. انشري مدوناتك وأفكارك. نحن نسمعكِ وندعمكِ.",
    },
    {
      property: "og:locale",
      content: "ar_AR",
    },
    {
      property: "og:type",
      content: "Website",
    },
    {
      property: "og:url",
      content: "https://www.anaqatyy.com/",
    },
    {
      property: "og:title",
      content: pageTitle,
    },
    {
      property: "og:description",
      content: "مجلة المرأة العربية",
    },
    {
      property: "twitter:description",
      content: "مجلة المرأة العربية",
    },
    {
      property: "twitter:title",
      content: "موقع أناقتي",
    },
    {
      property: "twitter:url",
      content: "https://www.anaqatyy.com/",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.anaqatyy.com/",
    },
    {
      rel: "shortlink",
      href: "https://www.anaqatyy.com/",
    },
  ],
});

/* <==============> End :: Head Page Details <==============> */
onMounted(async () => {
  try {
    const [homeRes, latestRes, mostViewedRes] = await Promise.all([
      $axiosRequest.get("HomeArticles"),
      $axiosRequest.get("LatestArticles"),
      $axiosRequest.get("MostViewed"),
    ]);

    homeArticlesData.value = homeRes.data.categories;
    latestArticlesData.value = latestRes.data.Latest_Articles;
    mostViewedArticels.value = mostViewedRes.data.most_viewed;

    isLoading.value = false;
  } catch (error) {
    console.error("Error loading data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
