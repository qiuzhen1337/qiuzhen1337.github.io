export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6cc33aac","v-6e81a0f4","v-d6495c06","v-78beb4ae","v-75550370","v-80f17010","v-0f8c94f0","v-bb28ec8e","v-0c71b814","v-ee3fcc80","v-ed73ffce","v-24137c82","v-5b4d0484","v-6d845d1c","v-6a1aabde","v-66b0faa0","v-63474962","v-41653dda","v-39579f82","v-1b7cdbf8"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6cc33aac","v-6e81a0f4","v-d6495c06","v-78beb4ae","v-75550370","v-80f17010","v-0f8c94f0","v-bb28ec8e","v-0c71b814","v-ee3fcc80","v-ed73ffce","v-24137c82","v-5b4d0484","v-6d845d1c","v-6a1aabde","v-66b0faa0","v-63474962","v-41653dda","v-39579f82","v-1b7cdbf8"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

