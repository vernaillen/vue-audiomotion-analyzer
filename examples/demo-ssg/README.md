# Vue AdioMotion Analyzer SSG Demo

## Dev

```sh
npm install
npm run dev
```

## Build & Serve SSG app

```sh
npm install
npm run build
npm run serve
```

## Executed steps to (re-)create this demo

```sh
npm init vue@latest demo-ssg

```

chosen options:

✔ Add TypeScript? … Yes
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … No
✔ Add Cypress for both Unit and End-to-End testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

```sh
cd demo-ssg 
npm i -D vite-ssg @vueuse/head serve
npm i vue-audiomotion-analyzer
```

```diff
// package.json
{
  "scripts": {
    "dev": "vite",
-   "build": "vue-tsc --noEmit && vite build",
+   "build": "vue-tsc --noEmit && vite-ssg build",
+   "serve": "serve ./dist",
  }
}
```

```ts
// replace src/main.ts
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
```

```ts
// replace src/router/index.ts
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]
export default routes
```

```ts
// add src/components/DemoAnalyzer.vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audio = ref<HTMLMediaElement>()
onMounted(() => {
  audio.value = <HTMLMediaElement> document.getElementById('audio')
})
</script>

<template>
  <audio id="audio" ref="audioRef" src="https://23613.live.streamtheworld.com/TOPZEN_SC" control crossorigin="anonymous"></audio>
  <div>Live stream: <a href="https://www.topradio.be/playlist/topzen" target="_blank">Zen FM</a></div>
  <VueAudioMotionAnalyzer :source="audio" />
</template>

<style scoped>
#audio,
#vueAudioMotionAnalyzer {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>

```

```ts
// update src/views/HomeView.vue
<script setup lang="ts">
import DemoAnalyzer from '@/components/DemoAnalyzer.vue'
</script>

<template>
  <main>
    <DemoAnalyzer />
  </main>
</template>
```
