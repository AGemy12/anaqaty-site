<template>
  <div class="search">
    <Icon
      name="simple-line-icons:magnifier"
      class="search_icon"
      @click="searchToggler.handleOpenSearch"
      style="cursor: pointer; font-size: 1.2rem; display: block"
    />

    <div
      class="search_container"
      :style="`${searchToggler.isOpen ? 'display: block' : 'display: none'} `"
    >
      <div class="search_container_input">
        <input
          type="text"
          placeholder="إبحث عن اي شئ ..."
          v-model="searchValue"
          @input="handleSearchInput"
        />
        <div v-if="showResults" class="search_results">
          <template
            v-if="
              searchData.articles.length != 0 ||
              searchData.categories.length != 0
            "
          >
            <div
              class="search_results_articles"
              v-if="searchData.articles.length"
            >
              <h3 class="search_results_articles_head">المقالات</h3>
              <ul>
                <li v-for="article in searchData.articles" :key="article.id">
                  <a
                    :href="`/category/articles/${article.id}-${article.slug}`"
                    @click="searchToggler.handleOpenSearch"
                    >{{ article.title }}
                  </a>
                </li>
              </ul>
            </div>
            <div
              class="search_results_categories"
              v-if="searchData.categories.length"
            >
              <h3 class="search_results_categories_head">الأقسام</h3>
              <ul>
                <li
                  v-for="category in searchData.categories"
                  :key="category.id"
                >
                  <nuxt-link
                    :to="`/category/${category.id}-${category.slug}`"
                    @click="searchToggler.handleOpenSearch"
                  >
                    {{ category.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </template>
          <template v-else>
            <p>لا توجد نتائج مطابقة للبحث.</p>
          </template>
        </div>
      </div>
      <div class="close_search" @click="searchToggler.handleOpenSearch">
        <Icon name="material-symbols-light:close-rounded" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSearchStore } from "~/stores/searchActions";

const searchToggler = useSearchStore();
const { $axiosRequest } = useNuxtApp();

const searchData = ref({ articles: [], categories: [] });
const searchValue = ref("");
const showResults = ref(false);

/* <==============> Start :: Search Request <==============> */
async function searchResultsReq() {
  if (!searchValue.value.trim()) {
    searchData.value = { articles: [], categories: [] };
    showResults.value = false;
    searchValue.value = "";
    return;
  }

  try {
    const res = await $axiosRequest.get(
      `search?searchvalue=${searchValue.value}`
    );
    if (res.status >= 200) {
      searchData.value = res.data;
      showResults.value = true;
    }
  } catch (error) {
    console.error(error);
  }
}

/* <==============> Handle Input Changes <==============> */
function handleSearchInput() {
  if (!searchValue.value.trim()) {
    showResults.value = false;
    searchData.value = { articles: [], categories: [] };
    searchValue.value = "";
  } else {
    searchResultsReq();
  }
}
</script>

<style lang="scss">
.search {
  position: relative;
  .search_container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 500;
    .search_container_input {
      position: relative;
      width: 600px;
      margin: 1rem auto;
      @media (max-width: 480px) {
        width: 90%;
        margin: 5rem auto;
      }
      input {
        background-color: rgba(255, 255, 255, 0.8);
        width: 100%;
        padding: 1rem;
        transition: var(--main_transition);
        font-size: 1.1rem;
        &:focus {
          outline: none;
        }
      }
      .search_results {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: auto;
        max-height: 500px;
        overflow-y: auto;
        background-color: var(--white);
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        &::-webkit-scrollbar {
          width: 10px;
          transition: var(--main_transition);
        }

        &::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #888;
          border-radius: 10px;
          border: 2px solid #f1f1f1;
          transition: var(--main_transition);
        }

        &::-webkit-scrollbar-thumb:hover {
          background-color: #000;
        }
        @media (max-width: 480px) {
          padding: 0.5rem;
        }
        h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        ul {
          list-style: decimal;
          padding: 0;
          margin: 0 1.5rem;

          li {
            margin-bottom: 0.8rem;
            font-size: 1rem;
            color: #555;

            a {
              color: rgba(0, 0, 0, 0.8);
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        p {
          font-size: 1.2rem;
          color: #888;
          text-align: center;
        }
      }
    }
    .close_search {
      width: 30px;
      height: 30px;
      background-color: #fff;
      color: red;
      position: absolute;
      top: 30px;
      right: 30px;
      border-radius: 5px;
      cursor: pointer;
      @include flex(center, center);
      span {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
