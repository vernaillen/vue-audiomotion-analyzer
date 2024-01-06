import { type DirectiveBinding, createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'virtual:windi.css'
import './main.css'

const app = createApp(App)
app.use(createPinia())

app.directive(
  'btnClass',
  (el: HTMLButtonElement, binding: DirectiveBinding<boolean>) => {
    const btnClass = 'px-2 py-1 mr-2 mb-2 font-medium text-sm text-black rounded'
    const btnClassSelected = `${btnClass} btnBgSelected`
    const btnClassUnselected = `${btnClass} bg-gray-50 btnHover`
    if (binding.value)
      el.className = btnClassSelected
    else
      el.className = btnClassUnselected
  },
)
app.mount('#app')
