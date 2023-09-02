import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-shared@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/@vueuse+core@10.4.1_vue@3.3.4/node_modules/@vueuse/core/index.mjs";
import FontIcon from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import AudioPlayer from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/AudioPlayer.js";
import BiliBili from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/BiliBili.js";
import PDF from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";
import SiteInfo from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import StackBlitz from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/StackBlitz.js";
import Share from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/Share.js";
import VideoPlayer from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/VideoPlayer.js";
import BackToTop from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-components@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("AudioPlayer")) app.component("AudioPlayer", AudioPlayer);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("VideoPlayer")) app.component("VideoPlayer", VideoPlayer);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4198350_e1lsrnvv5np.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
