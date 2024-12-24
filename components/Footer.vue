<template>
  <MainLoader v-if="isLoading" />
  <footer class="footer_content">
    <div class="footer_content_container container">
      <div class="footer_content_top">
        <Logo />
        <div class="footer_content_top_links">
          <ul v-if="categories && Object.keys(categories).length">
            <li
              v-for="[key, category] in Object.entries(categories).slice(0, 6)"
              :key="category.id"
            >
              <nuxt-link :to="`/category/${category.id}-${category.slug}`">
                {{ category.name }}
              </nuxt-link>
            </li>
          </ul>
          <ul>
            <li
              v-for="[key, category] in Object.entries(categories).slice(6)"
              :key="category.id"
            >
              <nuxt-link :to="`/category/${category.id}-${category.slug}`">
                {{ category.name }}
              </nuxt-link>
            </li>
          </ul>
          <ul>
            <li v-for="navLink in navLinksFooterThree" :key="navLink.id">
              <nuxt-link :to="navLink.path">
                {{ navLink.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <SocialGroup />
      </div>

      <div class="footer_content_copy_rights">
        <p>
          جميع الحقوق محفوظة لموقع
          <a href="/"> <img src="/black_logo.svg" alt="" /> </a> وتخضع لشروط
          وإتفاق الإستخدام © 2024
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/* ############################ Start :: Imports ############################### */
import Logo from "./main/Logo.vue";
import MainLoader from "./main/MainLoader.vue";
import SocialGroup from "./main/SocialGroup.vue";
import { computed, onMounted, ref } from "vue";
/* ############################ End :: Imports ############################### */
const isLoading = ref(true);
const categories = ref({});
/* ############################ Start :: Consts ############################### */
const { $axiosRequest } = useNuxtApp();

/* ############################ Start :: Consts ############################### */
async function getCategoriesData() {
  try {
    const res = await $axiosRequest.get(`HomeArticles`);
    if (res.status >= 200 && res.status < 300) {
      categories.value = res.data.categories;
      isLoading.value = false;
    }
  } catch (error) {
    console.log("Error ===>", error);
  }
}
/* ############################ End :: Get Category Data Request ############################### */

const navLinksFooterThree = computed(function () {
  const navLinks = [
    {
      id: 12,
      title: "سياسة الخصوصية",
      path: "/سياسة-الخصوصية",
    },
    {
      id: 13,
      title: "الشروط والأحكام",
      path: "/الشروط-والأحكام",
    },
  ];
  return navLinks;
});

onMounted(() => {
  getCategoriesData();
});
</script>

<style lang="scss">
.footer_content {
  background-color: var(--alt_color);
  padding: 2rem 0;
  margin-top: 1rem;
  .footer_content_container {
    @include flex(center, stretch, column, 20px);
    .footer_content_top {
      @include flex(space-between, flex-start);
      .footer_content_top_links {
        width: fit-content;
        margin: 0 auto;
        @include flex(center, flex-start, row, 50px);

        ul {
          @include flex(center, center, column, 10px);
          list-style: none;
          li {
            a {
              display: block;
              padding: 5px 10px;
              background-color: var(--alt_color);
              transition: background-color var(--main_transition) ease;
              border-radius: var(--sm_border_rd);
              font-size: 1rem;
              font-weight: bold;
              &:hover {
                background-color: #dbd7d0;
              }
            }
          }
        }
      }
    }
    .footer_content_copy_rights {
      border-top: 1px solid rgba(0, 0, 0, 0.3);
      width: 100%;
      p {
        width: fit-content;
        margin: 1rem auto 0 auto;
        font-weight: bold;
        font-size: 0.8rem;
        @include flex(center, center, row, 5px);
        a {
          margin: 0 5px;
          font-size: 0.2rem;
          font-weight: bold;
          img {
            width: 70px;
          }
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .footer_content_top_links {
    gap: 0px !important;
    ul {
      li {
        a {
          font-size: 0.8rem !important;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .footer_content_top {
    flex-direction: column;
    align-items: center !important;
    gap: 30px;
    .footer_content_top_links {
      @include flex(center, center !important, column, 0 !important);
      ul {
        gap: 5px !important;
        li {
          a {
            font-size: 0.8rem !important;
          }
        }
      }
    }
    .app_header_content_top_header_socail_group {
      display: flex !important;
    }
  }
  .footer_content_copy_rights {
    p {
      font-size: 0.5rem !important;
      a {
        img {
          width: 40px !important;
        }
      }
    }
  }
}
</style>
