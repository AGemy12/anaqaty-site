<template>
  <h2>{{ pageSubTitle }}</h2>
</template>

<script setup>
defineProps({
  pageSubTitle: String,
});
</script>

<style lang="scss" scoped>
h2 {
  margin: 1rem 0;
  padding: 0.5rem 2rem;
  color: var(--dark);
  cursor: default;
  position: relative;
  border-bottom: 2px solid;
}
</style>
