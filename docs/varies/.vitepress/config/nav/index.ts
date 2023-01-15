export const nav = [
  {
    text: 'Quick Start',
    link: '/start/index.md'
  },
  {
    text: 'Playground',
    link: '/plugin-library'
  },
  {
    text: 'Varies',
    activeMatch: `^/vue/`,
    items: [
      {
        text: '@varies/core',
        link: '/plugin-library'
      },
      {
        text: '@varies/animated',
        link: '/plugin-library'
      },
      {
        text: '@varies/dom',
        link: '/plugin-library'
      },
      {
        text: '@varies/vue',
        link: '/plugin-library'
      }
    ]
  },
  {
    text: 'Vue',
    activeMatch: `^/Vue/`,
    link: '/plugin-library'
  },
  {
    text: 'Example',
    link: '/plugin-library'
  }
]
