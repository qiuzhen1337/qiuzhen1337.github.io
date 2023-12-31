import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "日积月累", 
    icon: "paobu",
    children: [
      { text: "年", icon: "trees", link: "/column/accumulating/year"},
      { text: "月", icon: "shu", link: "/column/accumulating/month"},
      { text: "日", icon: "zhiwu", link: "/column/accumulating/day"},
    ],
  },
  { text: "技能分享", 
  icon: "jinengfen",
  children: [
    { text: "编程", icon: "zhongduan", link: "/column/skill-sharing/programming/README.md"},
    { text: "Z时代必备", icon: "zeta", link: "/column/skill-sharing/Z/README1.md"},
    { text: "热爱&提升", icon: "aihao", link: "#"},
  ],
},
  { text: "一些奇思妙想", 
  icon: "idea",
  children: [
    { text: "时事见解", icon: "img_kejianlx_chuanz", link: "#"},
    { text: "个人思考", icon: "sikao", link: "#"},
    { text: "阅读笔记", icon: "daipingjia", link: "#"},
  ],
},
  { text: "关于我", 
  icon: "-sportgirl1",
  children: [
    { text: "个人介绍", icon: "gerenxinxi", link: "/column/about-me/intro.md"},
    { text: "活动经历", icon: "fighting-game", link: "/column/about-me/experience-of-activity/"},
  ],
},
]);
