<template>
  <div class="pagination_container">
    <v-pagination
      v-if="moreThanTwoPages"
      :length="length"
      total-visible="5"
      :model-value="value"
      @update:model-value="updateValue"
      prev-icon="mdi-arrow-right"
      next-icon="mdi-arrow-left"
    ></v-pagination>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  moreThanTwoPages: Boolean,
  value: Number,
  length: Number,
});

const emit = defineEmits(["update:model-value"]);

const updateValue = (page) => {
  emit("update:model-value", page); // إرسال الحدث مع القيمة الجديدة
};
</script>

<style lang="scss">
.pagination_container {
  width: fit-content;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    gap: 10px;
    li {
      margin: 0;
      transition: 0.3s ease;
      border-radius: 5px;
      &.v-pagination__item--is-active,
      &:hover {
        background-color: rgba(0, 0, 0, 1) !important;
        color: white;
      }
      .v-btn--icon .v-icon {
        font-size: 20px;
      }
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px !important;
        height: 40px !important;
        background-color: transparent;
        border: none;
        font-size: 17px;

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
