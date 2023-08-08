export const categoryMap = {"category":{"/":{"path":"/category/","map":{}},"/zh/":{"path":"/zh/category/","map":{"网站制作":{"path":"/zh/category/%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C/","keys":["v-1b43b226"]}}}},"tag":{"/":{"path":"/tag/","map":{}},"/zh/":{"path":"/zh/tag/","map":{"网站制作":{"path":"/zh/tag/%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C/","keys":["v-1b43b226"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


