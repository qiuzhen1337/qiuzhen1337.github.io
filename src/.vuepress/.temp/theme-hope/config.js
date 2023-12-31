import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-shared@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-auto-catalog@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});