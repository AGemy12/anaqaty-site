import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    handleOpenSearch() {
      this.isOpen = !this.isOpen;
    },
  },
});
