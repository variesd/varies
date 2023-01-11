export const nav = [
  {
    text: 'Quick Start',
    activeMatch: `^/(guide|examples)/`,
    items: [
      {
        items: [
          { text: 'Typescript', link: '/typescript/learn/basics' },
          { text: 'JavaScript', link: '/javascript/this/index' },
          { text: 'Algorithm', link: '/algorithm/index' }
        ]
      }
    ]
  },
  // {
  //   text: "脚手架",
  //   activeMatch: `^/(cli|examples)/`,
  //   link: "/cli/install/index",
  // },
  {
    text: 'Playground',
    items: [
      {
        text: 'Playground',
        link: 'https://jzzx-playground.netlify.app'
      },
      {
        text: 'VueUse-Playground',
        link: 'https://play.vueuse.org/'
      },
      {
        text: 'Unocss-Playground',
        link: 'https://uno.antfu.me/?s='
      },
      {
        text: 'Typescript-Playground',
        link: 'https://www.typescriptlang.org/play'
      }
    ]
  },
  {
    text: '@varies',
    activeMatch: `^/vue/`,
    items: [
      {
        text: 'Progress Framework',
        items: [
          // { text: 'Vue2', link: '/vue/vue2/index' },
          { text: 'Vue3/core', link: '/vue/core/index' },
          { text: 'Vuex@next详解', link: '/vue/vuex/index' },
          { text: 'VueRouter@next详解', link: '/vue/vue-router/index' },
          { text: 'Pinia详解', link: '/vue/pinia/index' }
        ]
      },
      {
        text: 'Template',
        items: [
          // { text: 'Vue2', link: '/vue/vue2/vue2' },
          // { text: '移动端Vue2 ', link: '/vue/vue2/vue2-mobile' },
          { text: 'Vue3 + Ts', link: '/vue/core/vue3' },
          { text: '移动端Vue3 + Ts', link: '/vue/core/vue3-mobile' }
        ]
      },
      {
        text: 'Vue Framework',
        items: [{ text: 'Nuxt3', link: '/vue/nuxt3' }]
      }
    ]
  },
  {
    text: 'Vue',
    activeMatch: `^/react/`,
    items: [
      {
        text: 'A JavaScript library',
        items: [
          { text: 'React17', link: '/react/react17' },
          { text: 'React18', link: '/react/react18' }
        ]
      },
      {
        text: 'React Framework',
        items: [{ text: 'Next', link: '/react/next' }]
      }
    ]
  },
  {
    text: 'Example',
    link: '/plugin-library'
  }
]
