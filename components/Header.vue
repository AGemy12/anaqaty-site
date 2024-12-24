<template>
  <header class="app_header">
    <div class="app_header_content container">
      <div class="app_header_content_top_header">
        <MenuBars />
        <Logo />
        <div class="app_header_top_header_search_social">
          <SocialGroup />
          <Search />
        </div>
      </div>
      <NavLinks />
    </div>
  </header>
  <div class="scroll_nav" ref="scrollNav">
    <div class="scroll_nav_content container">
      <Logo />
      <NavLinks />
      <div class="scroll_nav_content_bars_search">
        <Search />
        <MenuBars />
      </div>
    </div>
  </div>
  <Menu />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import Logo from "./main/Logo.vue";
import Menu from "./main/Menu.vue";
import NavLinks from "./main/NavLinks.vue";
import SocialGroup from "./main/SocialGroup.vue";
import MenuBars from "./mini/MenuBars.vue";
import Search from "./main/Search.vue";

const scrollNav = ref(null);

const handleScroll = () => {
  if (window.scrollY >= 300) {
    scrollNav.value.style.height = "70px";
  } else {
    scrollNav.value.style.height = "0";
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss">
.app_header {
  background-color: var(--white);
  padding: 2rem 0;

  .app_header_content {
    z-index: 100;

    .app_header_content_top_header {
      @include flex(space-between, center, row);
      padding-bottom: 2rem;
      .app_header_top_header_search_social {
        @include flex(center, center, row, 2rem);
      }
    }
  }
}

.scroll_nav {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
  height: 0;
  transition: var(--main_transition);
  box-shadow: var(--shadow);
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .scroll_nav_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .scroll_nav_content_bars_search {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
    .app_header_logo {
      width: 90px !important;
      flex-shrink: 0;
    }
    .app_header_content_navbar {
      gap: 10px !important;

      li {
        a {
          font-size: 14px !important;
          @media (max-width: 992px) {
            font-size: 12px !important;
          }
        }
      }
    }
    .app_header_content_top_header_bars {
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
    }
  }
}

@media (max-width: 768px) {
  .app_header {
    padding: 1rem 0;
    .app_header_content {
      .app_header_content_top_header {
        padding-bottom: 0rem;
      }
    }
  }
}
</style>
