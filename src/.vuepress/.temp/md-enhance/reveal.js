import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/Users/qiuzhen/walkthetalk/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-beta.236_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
