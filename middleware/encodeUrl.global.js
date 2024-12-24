export default defineNuxtRouteMiddleware((to) => {
  function encodeArabicOnly(path) {
    return path
      .split("")
      .map((char) => {
        if (/[\u0600-\u06FF]/.test(char) && char !== "/") {
          return encodeURIComponent(char);
        }
        return char;
      })
      .join("");
  }

  const encodedPath = encodeArabicOnly(to.fullPath);

  if (to.fullPath !== encodedPath) {
    return navigateTo(encodedPath, { replace: true });
  }
});
