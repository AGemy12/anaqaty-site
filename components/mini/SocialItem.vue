<template>
  <div class="app_header_content_top_header_socail_group_item">
    <nuxt-link :to="path" target="_blank">
      <Icon :name="iconName" />
    </nuxt-link>
  </div>
</template>

<script setup>
const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.app_header_content_top_header_socail_group_item {
  width: 40px;
  height: 40px;
  transition: var(--main_transition);
  border-radius: 5px;
  &:hover {
    background-color: var(--dark);
  }
  &:hover a span {
    color: var(--white);
  }
  a {
    display: block;
    height: inherit;
    @include flex(center, center);
    span {
      font-size: 1.5rem;
      transition: var(--main_transition);
    }
  }
}
</style>
