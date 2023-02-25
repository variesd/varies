import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import {
  contributing,
  discord,
  font,
  github,
  ogImage,
  ogUrl,
  releases,
  twitter,
  vitestDescription,
  vitestName
} from './meta'

export default defineConfig({
  lang: 'en-US',
  title: vitestName,
  description: vitestDescription,
  ignoreDeadLinks: true,
  head: [
    ['meta', { name: 'theme-color', content: '#ffbbaa' }],
    ['link', { rel: 'icon', href: '/logo-night.png', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/logo-light.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'vitest, vite, test, coverage, snapshot, react, vue, preact, svelte, solid, lit, ruby, cypress, puppeteer, jsdom, happy-dom, test-runner, jest, typescript, esm, tinypool, tinyspy, c8, node'
      }
    ],
    ['meta', { property: 'og:title', content: vitestName }],
    ['meta', { property: 'og:description', content: vitestDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: vitestName }],
    ['meta', { name: 'twitter:description', content: vitestDescription }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { href: font, rel: 'stylesheet' }],
    ['link', { rel: 'mask-icon', href: '/logo-light.png', color: '#ffffff' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ]
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  themeConfig: {
    logo: '/logo-light.png',

    editLink: {
      pattern: 'https://github.com/variesd/varies/tree/main/docs/:path',
      text: 'Suggest changes to this page'
    },

    algolia: {
      appId: 'UXAGX7LTJC',
      apiKey: '46dbb98bb8d8f7c7f5d6f04544e8a40a',
      indexName: 'variesd-spring'
      // searchParameters: {
      //   facetFilters: ['tags:en'],
      // },
    },

    localeLinks: {
      text: 'English',
      items: [{ text: '简体中文', link: 'https://cn.vitest.dev' }]
    },

    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'discord', link: discord },
      { icon: 'github', link: github }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT ERKELOST'
    },

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Config', link: '/config/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases
          },
          {
            text: 'Contributing ',
            link: contributing
          }
        ]
      }
    ],

    sidebar: {
      // TODO: bring sidebar of apis and config back
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why vitest',
              link: '/guide/why'
            },
            {
              text: 'Getting Started',
              link: '/guide/'
            },
            {
              text: 'Features',
              link: '/guide/features'
            },
            {
              text: 'CLI',
              link: '/guide/cli'
            },
            {
              text: 'Test Filtering',
              link: '/guide/filtering'
            },
            {
              text: 'Coverage',
              link: '/guide/coverage'
            },
            {
              text: 'Snapshot',
              link: '/guide/snapshot'
            },
            {
              text: 'Mocking',
              link: '/guide/mocking'
            },
            {
              text: 'Testing Types',
              link: '/guide/testing-types'
            },
            {
              text: 'vitest UI',
              link: '/guide/ui'
            },
            {
              text: 'In-source Testing',
              link: '/guide/in-source'
            },
            {
              text: 'Test Context',
              link: '/guide/test-context'
            },
            {
              text: 'Environment',
              link: '/guide/environment'
            },
            {
              text: 'Extending Matchers',
              link: '/guide/extending-matchers'
            },
            {
              text: 'IDE Integration',
              link: '/guide/ide'
            },
            {
              text: 'Debugging',
              link: '/guide/debugging'
            },
            {
              text: 'Comparisons',
              link: '/guide/comparisons'
            },
            {
              text: 'Migration Guide',
              link: '/guide/migration'
            }
          ]
        },
        {
          text: 'API',
          items: [
            {
              text: 'Test API Reference',
              link: '/api/'
            },
            {
              text: 'Mock Functions',
              link: '/api/mock'
            },
            {
              text: 'Vi Utility',
              link: '/api/vi'
            },
            {
              text: 'Expect',
              link: '/api/expect'
            },
            {
              text: 'ExpectTypeOf',
              link: '/api/expect-typeof'
            },
            {
              text: 'assertType',
              link: '/api/assert-type'
            }
          ]
        },
        {
          text: 'Config',
          items: [
            {
              text: 'Config Reference',
              link: '/config/'
            }
          ]
        }
      ]
    }
  }
})
