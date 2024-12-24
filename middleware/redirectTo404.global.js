// middleware/not-found.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.matched.length) {
    return navigateTo("/404");
  }
});
