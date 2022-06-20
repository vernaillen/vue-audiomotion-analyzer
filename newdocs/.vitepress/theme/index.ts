import DefaultTheme from 'vitepress/theme'
import CodeGroup from './components/CodeGroup.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CodeGroup', CodeGroup)
  }
}