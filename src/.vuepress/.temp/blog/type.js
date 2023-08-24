export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5aa3d8ba"]},"/zh/":{"path":"/zh/article/","keys":["v-947048fc","v-928c4332","v-56961c9f","v-b7c2f0b4","v-342da8ee","v-725d0d4a","v-540d0773"]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5aa3d8ba"]},"/zh/":{"path":"/zh/timeline/","keys":["v-947048fc","v-928c4332","v-56961c9f","v-b7c2f0b4","v-342da8ee","v-725d0d4a","v-540d0773"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

