<template>
  <div :class="menuToggler.isOpen ? 'active menu' : 'menu'">
    <div class="menu_close" @click="menuToggler.handleOpenMenu">
      <Icon name="material-symbols:close-rounded" />
    </div>
    <div class="menu_logo">
      <Logo />
    </div>
    <NavLinks />
    <SocialGroup />
  </div>
</template>

<script setup>
import { useMenuButtonStore } from "~/stores/menuButton";
import Logo from "./Logo.vue";
import NavLinks from "./NavLinks.vue";
import SocialGroup from "./SocialGroup.vue";

const menuToggler = useMenuButtonStore();
</script>

<style lang="scss">
.menu {
  width: 400px;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  background-color: var(--alt_color);
  top: 0;
  transform: translateX(100%);
  transition: var(--main_transition);
  overflow-y: auto;
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
  &.active {
    transform: translateX(0%);
  }
  .menu_close {
    width: 25px;
    height: 25px;
    margin: 15px;
    cursor: pointer;
    padding: 5px;
    transition: var(--main_transition);
    @include flex(center, center);
    &:hover {
      background-color: var(--dark);
      border-radius: var(--sm_border_rd);
    }
    &:hover span {
      color: var(--white);
    }
    span {
      font-size: 1.5rem;
      transition: var(--main_transition);
    }
  }
  .menu_logo {
    width: fit-content;
    margin: 0.5rem auto;
  }
  .app_header_content_navbar {
    @include flex(center, flex-start, column, 10px);
    width: fit-content;
    margin: 1rem auto;
    padding: 1rem;
    li {
      a {
        font-size: 0.9rem;
        &::before,
        &::after {
          display: none !important;
        }
      }
    }
  }
  .app_header_content_top_header_socail_group {
    display: flex;
    margin-bottom: 1rem;
    gap:0 !important;
  }
}

@media (max-width: 768px) {
  .menu {
    width: 100vw;
  }
}
</style>
