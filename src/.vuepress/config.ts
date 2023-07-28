import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "qz's fancy House",
      description: "python技能分享,时事见解,演讲辩论宣讲小技巧,商科竞赛",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "qz 的奇思妙想屋",
      description: "python Skills Sharing,Current affairs insights,Speech tips,Debate tips,Business competiton",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
