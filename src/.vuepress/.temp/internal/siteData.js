export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"qz's fancy House\",\"description\":\"python技能分享,时事见解,演讲辩论宣讲小技巧,商科竞赛\"},\"/zh/\":{\"lang\":\"zh-CN\",\"title\":\"qz 的奇思妙想屋\",\"description\":\"python Skills Sharing,Current affairs insights,Speech tips,Debate tips,Business competiton\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
