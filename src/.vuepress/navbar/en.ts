import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "accumulating", 
    icon: "#",
    children: [
      { text: "year", icon: "#", link: "#"},
      { text: "month", icon: "#", link: "#"},
      { text: "day", icon: "#", link: "#"},
    ],
  },
  { text: "skill sharing", 
  icon: "#",
  children: [
    { text: "programming", icon: "#", link: "#"},
    { text: "necessary for Generation Z", icon: "#", link: "#"},
    { text: "devotion & promotion", icon: "#", link: "#"},
  ],
},
  { text: "some whimsy", 
  icon: "#",
  children: [
    { text: "current affairs insights", icon: "#", link: "#"},
    { text: "individual thinking", icon: "#", link: "#"},
    { text: "reading notes", icon: "#", link: "#"},
  ],
},
  { text: "about me", 
  icon: "-sportgirl",
  children: [
    { text: "personal introduction", icon: "#", link: "/intro.html"},
    { text: "activity experience", icon: "#", link: "#"},
  ],
},
]);
