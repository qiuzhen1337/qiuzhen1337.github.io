export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5aa3d8ba"]},"/zh/":{"path":"/zh/article/","keys":["v-8f2291f4","v-947048fc","v-928c4332","v-56961c9f","v-728464b9","v-b7c2f0b4","v-b4593f76","v-6c0529f6","v-3d30766f","v-4a03d08a","v-6cc126ea","v-342da8ee","v-341f0cb1","v-56994326","v-aa2c833e","v-a6c2d200","v-a35920c2","v-9fef6f84","v-725d0d4a","v-540d0773"]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5aa3d8ba"]},"/zh/":{"path":"/zh/timeline/","keys":["v-8f2291f4","v-947048fc","v-928c4332","v-56961c9f","v-728464b9","v-b7c2f0b4","v-b4593f76","v-6c0529f6","v-3d30766f","v-4a03d08a","v-6cc126ea","v-342da8ee","v-341f0cb1","v-56994326","v-aa2c833e","v-a6c2d200","v-a35920c2","v-9fef6f84","v-725d0d4a","v-540d0773"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

