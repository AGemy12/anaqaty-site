<template>
  <section class="not_found_page">
    <div class="not_found_page_content">
      <div>
        <img src="/black_logo.svg" alt="" />
      </div>
      <h1 class="not_found_head">الصفحة غير موجودة</h1>
      <div class="not_found_router">
        <nuxt-link to="/"> انتقل الى الصفحة الرئيسية </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "error",
});

useHead({
  title: "Anaqaty | صفحة غير موجودة",
});
</script>

<style lang="scss">
.not_found_page {
  width: 100vw;
  height: 100vh;
  background-color: var(--alt_color);
  position: fixed;
  top: 0;
  .not_found_page_content {
    width: 90%;
    @include flex(center, center, column, 1.5rem);
    @include absoluteTop();
    div {
      max-width: 300px;
      img {
        width: 100%;
      }
    }
    .not_found_head {
      width: fit-content;
      margin: 0 auto;
      font-size: 20px;
    }
    .not_found_router {
      width: 100%;
      a {
        display: block;
        width: 70%;
        margin: 1rem auto;
        text-align: center;
        font-weight: bold;
        padding: 0.5rem 1rem;
        color: var(--dark);
        border: 1px solid var(--dark);
        border-radius: 5px;
        position: relative;
        transition: var(--main_transition);
        &::before {
          content: "";
          @include absoluteTop(0, 0, 0, 0);
          width: 0;
          height: 100%;
          background-color: var(--dark);
          transition: var(--main_transition);
          border-radius: 5px;
          z-index: -1;
        }
        &:hover {
          color: var(--white);
          border-width: 0px !important;
        }
        &:hover::before {
          width: 100%;
        }
      }
    }
  }
}
</style>
