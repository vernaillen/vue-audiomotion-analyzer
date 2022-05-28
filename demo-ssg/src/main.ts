import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from './router'
import VueAudiomotionAnalyzerPlugin from "vue-audiomotion-analyzer"

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    app.use(VueAudiomotionAnalyzerPlugin);
  },
)