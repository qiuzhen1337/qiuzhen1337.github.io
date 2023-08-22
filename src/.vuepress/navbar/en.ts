import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "accumulating", 
    icon: "paobu",
    children: [
      { text: "year", icon: "trees", link: "#"},
      { text: "month", icon: "shu", link: "#"},
      { text: "day", icon: "zhiwu", link: "#"},
    ],
  },
  { text: "skill sharing", 
  icon: "#",
  children: [
    { text: "programming", icon: "zhongduan", link: "#"},
    { text: "necessary for Generation Z", icon: "zeta", link: "#"},
    { text: "devotion & promotion", icon: "aihao", link: "#"},
  ],
},
  { text: "some whimsy", 
  icon: "#",
  children: [
    { text: "current affairs insights", icon: "img_kejianlx_chuanz", link: "#"},
    { text: "individual thinking", icon: "sikao", link: "#"},
    { text: "reading notes", icon: "daipingjia", link: "#"},
  ],
},
  { text: "about me", 
  icon: "-sportgirl",
  children: [
    { text: "personal introduction", icon: "gerenxinxi", link: "/intro.html"},
    { text: "activity experience", icon: "fighting-game", link: "#"},
  ],
},
]);
