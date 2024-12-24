<template>
  <div
    class="app_header_content_top_header_bars"
    @click="menuToggler.handleOpenMenu"
  >
    <span></span>
    <span class="middel"></span>
    <span></span>
  </div>
</template>

<script setup>
import { useMenuButtonStore } from "~/stores/menuButton";
const menuToggler = useMenuButtonStore();
</script>

<style lang="scss" scoped>
.app_header_content_top_header_bars {
  width: 30px;
  cursor: pointer;
  @include flex(center, center, column, 7px);

  span {
    width: 100%;
    height: 2px;
    background-color: var(--dark);
  }
  span.middel {
    margin-left: 10px;
    display: block;
    transition: var(--main_transition);
  }
  &:hover span.middel {
    margin-left: 0;
  }
}

@media (max-width: 768px) {
  .app_header_content_top_header_bars {
    width: 25px;
    span.middel {
      margin-left: 0;
    }
  }
}
</style>
