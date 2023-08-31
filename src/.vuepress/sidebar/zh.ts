import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/programming/": "structure",

  "/column/about-me/experience-of-activity": [
    "business-competion/administer-case-competitons",
    "class-presentation",
    "cet-6",

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

    {text:"英语六级",icon:"",link:"cet-6"},
    {text:"乡村振兴",icon:"",link:"business-competion"},
    {text:"乡村振兴",icon:"",link:"business-competion/rural-revitalization-competiton"},
  
    
    
    {
      text: "自定义组名",
      icon: "",
      collapsible: true,
      children: [
        // "",
        "9.1",
        "9.2",
        "9.3",

    {text:"9月1日",icon:"",link:"9.1"},
    {text:"9月2日",icon:"",link:"9.2"},
    {text:"9月3日",icon:"",link:"9.3"},
      ]
    },

    {
      text: "自定义组名",
      icon: "",
      collapsible: true,
      children: [
        {
          text: "自定义组名",
          icon: "",
          collapsible: true,
          children: [
            // "",
            "9.1",
            "9.2",
            "9.3",
    
        {text:"9月1日",icon:"",link:"9.1"},
        {text:"9月2日",icon:"",link:"9.2"},
        {text:"9月3日",icon:"",link:"9.3"},
          ]
        },

        {
          text: "自定义组名",
          icon: "",
          collapsible: true,
          children: [
            // "",
            "9.1",
            "9.2",
            "9.3",
    
        {text:"9月1日",icon:"",link:"9.1"},
        {text:"9月2日",icon:"",link:"9.2"},
        {text:"9月3日",icon:"",link:"9.3"},
          ]
        },
      ]
    },




  ]
});



