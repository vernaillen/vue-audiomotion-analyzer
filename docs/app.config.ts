export default defineAppConfig({
  docus: {
    title: 'Vue AudioMotion Analyzer',
    description: 'The best place to start your documentation.',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'vernaillen/vue-audiomotion-analyzer',
    },
    github: {
      root: 'content',
      edit: true,
      contributors: false
    },
    layout: {
      fluid: true
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      credits: {
        text: 'Vue plugin © 2023 Wouter Vernaillen - audioMotion-analyzer © 2018-2021 Henrique Avila Vianna',
        href: 'https://vernaillen.dev',
      },
      iconLinks: [
        {
          href: 'https://vernaillen.dev',
          icon: 'mdi:human-greeting-variant'
        }
      ]
    }
  }
})
