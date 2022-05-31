import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('vuepress')

export default defineUserConfig({
  lang: 'en-US',
  title: 'Vue AudioMotion Analyzer',
  description: 'Documentation',

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/', activeMatch: '^/$|^/docs/' },
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
      {
        text: 'Demo',
        link: 'https://vue-audiomotion-analyzer-demo.netlify.app/',
      }
    ],
    sidebar: {
      '/': getGuideSidebar(),
    },
  }),
})

function getGuideSidebar() {
  return [
    {
      text: 'Guide',
      children: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
      ],
    },
    {
      text: 'Examples',
      children: [
        { text: 'Sample apps', link: '/examples' },
      ],
    },
  ]
}