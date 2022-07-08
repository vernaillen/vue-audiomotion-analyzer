import { defineConfig } from 'vitepress'
import css from 'index.css'

export default defineConfig({
  title: 'Vue AudioMotion Analyzer',
  description: 'Documentation for Vue AudioMotion Analyzer',
  lastUpdated: true,

  themeConfig: {

    nav: nav(),

    sidebar: {
      '/guide/': sidebar(),
      '/examples/': sidebar()
    },

    repo: 'vernaillen/vue-audiomotion-analyzer',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    footer: {
      message: 'Licensed under the GNU Affero General Public License, version 3 or later.',
      copyright: 'Vue plugin copyright © 2022 Wouter Vernaillen / audioMotion-analyzer copyright © 2018-2021 Henrique Avila Vianna'
    },
  }
})

function nav() {
  return [
    { text: 'Home', link: '/', activeMatch: '^/$|^/docs/' },
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: 'Examples', link: '/examples/index', activeMatch: '/examples/' },
    {
        text: 'Demo',
        link: 'https://vue-audiomotion-analyzer-demo.netlify.app/',
    }
  ]
}

function sidebar() {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
      ],
    },
    {
      text: 'Examples',
      items: [
        { text: 'Sample apps', link: '/examples/index' },
      ],
    },
  ]
}