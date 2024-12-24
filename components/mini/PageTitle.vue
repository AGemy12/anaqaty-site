<template>
  <h1>{{ pageTitle }}</h1>
</template>

<script setup>
defineProps({
  pageTitle: String,
});
</script>

<style lang="scss" scoped>
h1 {
  width: fit-content;
  margin: 1rem auto;
  padding: 0.5rem 2rem;
  color: var(--dark);
  border-radius: var(--sm_border_rd);
  position: relative;
  cursor: default;
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--dark);
    transform: translateY(-50%) rotate(45deg);
  }
  &::after {
    left: 0px;
  }
  &::before {
    right: 0px;
  }
}
</style>
