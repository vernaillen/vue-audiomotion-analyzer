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

- **Step. 2:** Initialize the plugin in main script:

```js
// main.js or main.ts
import { createApp } from 'vue'
import App from './App.vue'
import VueAudioMotionAnalyzerPlugin from 'vue-audiomotion-analyzer'

const app = createApp(App)
app.use(VueAudioMotionAnalyzerPlugin)
app.mount('#app')
```

- **Step. 3:** Add the VueAudioMotionAnalyzer component and pass an audio source as prop:

<CodeGroup>
  <CodeGroupItem title="JS" active>

```js
<script setup>
import { onMounted, ref } from 'vue'

const audio = ref()
onMounted(() => {
    audio.value = document.getElementById('audio')
})
</script>

<template>
    <audio id="audio" ref="audioRef" src="https://ice5.somafm.com/deepspaceone-128-mp3" control crossorigin="anonymous"></audio>
    <VueAudioMotionAnalyzer :source="audio" />
</template>
```

  </CodeGroupItem>

  <CodeGroupItem title="TS">

```ts
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audio = ref<HTMLMediaElement>()
onMounted(() => {
    audio.value = <HTMLMediaElement> document.getElementById('audio')
})
</script>

<template>
    <audio id="audio" ref="audioRef" src="https://ice5.somafm.com/deepspaceone-128-mp3" control crossorigin="anonymous"></audio>
    <VueAudioMotionAnalyzer :source="audio" />
</template>
```

  </CodeGroupItem>
</CodeGroup>
