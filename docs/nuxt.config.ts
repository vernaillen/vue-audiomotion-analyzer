export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  css: [
    '~/assets/custom.css'
  ],

  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
})
