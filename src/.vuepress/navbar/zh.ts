import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "日积月累", 
    icon: "#",
    children: [
      { text: "年", icon: "#", link: "#"},
      { text: "月", icon: "#", link: "#"},
      { text: "日", icon: "#", link: "#"},
    ],
  },
  { text: "技能分享", 
  icon: "#",
  children: [
    { text: "编程", icon: "#", link: "#"},
    { text: "Z时代必备", icon: "#", link: "#"},
    { text: "热爱&提升", icon: "#", link: "#"},
  ],
},
  { text: "一些奇思妙想", 
  icon: "#",
  children: [
    { text: "时事见解", icon: "#", link: "#"},
    { text: "个人思考", icon: "#", link: "#"},
    { text: "阅读笔记", icon: "#", link: "#"},
  ],
},
  { text: "关于我", 
  icon: "-sportgirl",
  children: [
    { text: "个人介绍", icon: "#", link: "/zh/intro.html"},
    { text: "活动经历", icon: "#", link: "#"},
  ],
},
]);
