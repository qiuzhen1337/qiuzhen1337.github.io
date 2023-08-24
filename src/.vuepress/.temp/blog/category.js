export const categoryMap = {"category":{"/":{"path":"/category/","map":{}},"/zh/":{"path":"/zh/category/","map":{"网站制作":{"path":"/zh/category/%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C/","keys":["v-947048fc","v-928c4332","v-56961c9f","v-b7c2f0b4","v-1112b946","v-bcae749a"]}}}},"tag":{"/":{"path":"/tag/","map":{}},"/zh/":{"path":"/zh/tag/","map":{"网站制作":{"path":"/zh/tag/%E7%BD%91%E7%AB%99%E5%88%B6%E4%BD%9C/","keys":["v-947048fc","v-928c4332","v-56961c9f","v-b7c2f0b4","v-1112b946","v-bcae749a"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


