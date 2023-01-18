import Theme from 'vitepress/theme'
import VueSchoolLink from '../components/VueSchoolLink.vue'
import VueMasteryLogoLink from '../components/VueMasteryLogoLink.vue'
import { Layout } from './Layout'
import './custom.css'
import './code-theme.css'
import { h } from 'vue'
import Banner from '../../.vitepress/components/Banner.vue'
/** @type {import('vitepress').Theme} */
const config = {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      // uncomment to test layout slots
      banner: () => h(Banner)
      // 'sidebar-top': () => h('div', 'hello top'),
      // 'sidebar-bottom': () => h('div', 'hello bottom'),
      // 'content-top': () => h('h1', 'Announcement!'),
      // 'content-bottom': () => h('div', 'Some ads'),
      // 'aside-top': () => h('div', 'this could be huge'),
      // 'aside-mid': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
      // 'aside-bottom': () => h('div', { style: { height: '300px' }}, 'Sponsors'),
    })
  },
  enhanceApp({ app }) {}
}

export default config
