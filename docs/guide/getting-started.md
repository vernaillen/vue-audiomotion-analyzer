# Getting Started

This section will help you add the Vue AudioMotion Analyzer plugin to your Vue project.

- **Step. 1:** Install uing your preferred package manager;

<CodeGroup>
  <CodeGroupItem title="yarn" active>

```bash
# install in your project
yarn add  vue-audiomotion-analyzer
```

  </CodeGroupItem>

  <CodeGroupItem title="npm">

```bash
# install in your project
npm install vue-audiomotion-analyzer
```

  </CodeGroupItem>

  <CodeGroupItem title="pnpm">

```bash
# install in your project
pnpm install vue-audiomotion-analyzer
```

  </CodeGroupItem>
</CodeGroup>

- **Step. 2:** Initialize the plugin in main.js or main.ts:

```ts
// main.ts
import { createApp, type DirectiveBinding } from 'vue'
import App from './App.vue'
import VueAudioMotionAnalyzerPlugin from 'vue-audiomotion-analyzer'

const app = createApp(App)
app.use(VueAudioMotionAnalyzerPlugin)
app.mount('#app')
```

- **Step. 3:** Add the VueAudioMotionAnalyzer component and pass an audio source as prop:

```ts
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audio = ref<HTMLMediaElement>()
onMounted(() => {
    audio.value = <HTMLMediaElement> document.getElementById('audio')
})
</script>

<template>
    <audio id="audio" ref="audioRef" src="https://23613.live.streamtheworld.com/TOPZEN_SC" control crossorigin="anonymous"></audio>
    <VueAudioMotionAnalyzer :source="audio" />
</template>
```
