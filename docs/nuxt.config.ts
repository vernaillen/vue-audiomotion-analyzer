export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  nitro: {
    prerender: {
      ignore: ['/__pinceau_tokens_config.json', '/__pinceau_tokens_schema.json']
    }
  },
})
