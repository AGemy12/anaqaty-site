export default defineNuxtRouteMiddleware(async (to) => {
  const { $axiosRequest } = useNuxtApp();

  // تحقق مما إذا كان المسار يحتوي على ID فقط
  const idMatch = to.path.match(/\/(\d+)(?:-\b)?$/);
  if (idMatch) {
    const articleId = idMatch[1];

    try {
      // احصل على تفاصيل المقالة
      const res = await $axiosRequest.get(`ArticleViews/${articleId}`);
      if (res.status >= 200 && res.status < 300) {
        const article = res.data.article;

        // إعادة توجيه إلى الرابط الكامل مع العنوان
        return navigateTo(
          `/category/articles/${articleId}-${encodeURIComponent(article.slug)}`,
          { redirectCode: 301 }
        );
      }
    } catch (error) {
      console.error("Error fetching article:", error);
    }
  }
});
