import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/programming/": "structure",

  "/zh/column/accumulating/Day/2023.8/": [
    "2023.8.24",
    "2023.8.25",

    //   { 
    //       text: "",
    //       icon: "",
    //       children: [
    //       {
    //         text:"",
    //         icon:"",
    //         children: [

    //         ]
    //       }

    // ]}

    {
      text: "8月",
      icon: "",
      collapsible: true,
      children: [
        // "",
        "8.1",
        "8.2",
        "8.3",

      ]
    },
    {
      text: "9月",
      icon: "",
      collapsible: true,
      children: [
        // "",
        "91.1",
        "9.2",
        "9.3",
      ]
    },
  ]
});



