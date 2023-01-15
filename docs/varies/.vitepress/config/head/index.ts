export const head = [
  ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  [
    'link',
    { rel: 'icon', type: 'image/svg+xml', href: '../../../../image/head.png' }
  ],
  [
    'link',
    {
      rel: 'preload',
      href: '/dank-mono.css',
      as: 'style',
      onload: "this.onload=null;this.rel='stylesheet'"
    }
  ]
]
