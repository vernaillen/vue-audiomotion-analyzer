export default defineAppConfig({
  docus: {
    title: 'Vue AudioMotion Analyzer',
    description: 'Vue plugin for audioMotion-analyzer',
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      github: 'vernaillen/vue-audiomotion-analyzer',
    },
    github: {
      dir: 'content',
      edit: true,
      owner: 'vernaillen',
      repo: 'vue-audiomotion-analyzer',
      branch: 'main'
    },
    aside: {
      level: 0,
      exclude: []
    },
    main: {
      fluid: false
    },
    header: {
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    footer: {
      credits: {
        icon: 'ic:baseline-copyright',
        text: 'Vue plugin © 2023 Wouter Vernaillen',
        href: 'https://vernaillen.dev',
      },
      textLinks: [
        {
          text: 'audioMotion-analyzer © 2018-2021 Henrique Avila Vianna',
          href: 'https://audiomotion.dev/',
          target: '_blank'
        }
      ],
      iconLinks: [
        {
          href: 'https://vernaillen.dev',
          icon: 'iconoir:developer',
        }
      ]
    }
  }
})
