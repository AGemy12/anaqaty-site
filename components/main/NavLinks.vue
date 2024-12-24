<template>
  <ul
    class="app_header_content_navbar"
    v-if="categories && Object.keys(categories).length"
  >
    <li
      v-for="[key, category] in Object.entries(categories)"
      :key="category.id"
    >
      <nuxt-link
        :to="`/category/${category.id}-${category.slug}`"
        @click="handleEventClick"
      >
        {{ category.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script setup>
/* <==============> Start ::Imports <==============> */

import { useMenuButtonStore } from "~/stores/menuButton";
/* <==============> End ::Imports <==============> */

/* <==============> Start ::Consts <==============> */

const { $axiosRequest } = useNuxtApp();
const categories = ref({});
const menuToggler = useMenuButtonStore();

/* <==============> End ::Consts <==============> */

/* <==============> Start :: Categories Data Get Req <==============> */
async function getCategories() {
  try {
    let res = await $axiosRequest.get("HomeArticles");
    categories.value = res.data.categories;
    // console.log(categories.value);
  } catch (error) {
    console.log("Erro ===>", error);
  }
}

/* <==============> End :: Categories Data Get Req <==============> */

const handleEventClick = () => {
  if (menuToggler.isOpen) {
    menuToggler.isOpen = !menuToggler.isOpen;
  }
};

onMounted(() => {
  getCategories();
});
</script>

<style lang="scss">
.app_header_content_navbar {
  @include flex(space-between, center);
  list-style: none;
  li {
    a {
      display: block;
      font-size: 1rem;
      text-wrap: nowrap;
      font-weight: bold;
      padding: 0.3rem 0;
      position: relative;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 0%;
        height: 1px;
        background-color: var(--dark);
        transition: all var(--main_transition);
      }
      &::before {
        bottom: 0;
        right: 0;
      }
      &::after {
        top: 0;
        left: 0;
      }
      &:hover::before,
      &:hover::after {
        width: 100%;
      }
    }
  }
}

@media (max-width: 992px) {
  .app_header_content_navbar {
    gap: 10px;
    li {
      a {
        font-size: 0.8rem;
        padding: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .app_header_content_navbar {
    display: none;
  }
}
</style>
