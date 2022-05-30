import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vue AudioMotion Analyzer',
  description: 'Documentation for Vue AudioMotion Analyzer',
  lastUpdated: true,

  themeConfig: {
    repo: 'vernaillen/vue-audiomotion-analyzer',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Docs', link: '/', activeMatch: '^/$|^/docs/' },
      {
        text: 'Demo',
        link: 'https://vue-audiomotion-analyzer-demo.netlify.app/',
      },
      {
        text: 'Demo SSG',
        link: 'https://vue-audiomotion-analyzer-demo-ssg.netlify.app/',
      },
    ],
    sidebar: {
      '/': getGuideSidebar(),
    },
  },
})

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'What is Vue AudioMotion Analyzer?', link: '/' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
      ],
    },
  ]
}
