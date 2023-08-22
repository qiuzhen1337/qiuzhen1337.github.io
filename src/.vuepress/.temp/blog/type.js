export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-184f4da6"]},"/zh/":{"path":"/zh/article/","keys":["v-1112b946","v-858cfdd6"]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-184f4da6"]},"/zh/":{"path":"/zh/timeline/","keys":["v-1112b946","v-858cfdd6"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

