import { defineStore } from "pinia";

export const useMenuButtonStore = defineStore("menu", {
  state: () => ({
    isOpen: false,
  }),
  actions: {
    handleOpenMenu() {
      this.isOpen = !this.isOpen;
    },
  },
});
