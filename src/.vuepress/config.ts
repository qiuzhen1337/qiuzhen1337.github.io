import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro"

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "qz 的奇思妙想屋",
  description: "python Skills Sharing,Current affairs insights,Speech tips,Debate tips,Business competiton",

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  markdown: {
    headers: {
      level: [2,3,4,5,6],
    }
  }
});
