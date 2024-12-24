<template>
  <h2 class="category_title">{{ categorytitle }}</h2>
</template>

<script setup>
defineProps({
  categorytitle: {
    type: String,
  },
});
</script>

<style lang="scss">
.category_title {
  width: 100%;
  margin: 3rem 0 3rem auto;
  padding: 5px 20px;
  text-align: right;
  position: relative;
  &::before {
    content: "";
    @include absoluteBottom(0, 50%, -50%);
    background-color: var(--dark);
    width: 100%;
    height: 2px;
  }
}
</style>
