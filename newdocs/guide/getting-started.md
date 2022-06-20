# Getting Started

This section will help you add the Vue AudioMotion Analyzer plugin to your Vue project.

- **Step. 1:** Install uing your preferred package manager;

<CodeGroup>
  <template #tab1-title>yarn</template>
  <template #tab1-content>
  
```bash [yarn]
# install in your project
yarn add vue-audiomotion-analyzer
```
  
  </template>

  <template #tab2-title>npm</template>
  <template #tab2-content>

```bash [npm]
# install in your project
npm install vue-audiomotion-analyzer
```

  </template>

  <template #tab3-title>pnpm</template>
  <template #tab3-content>

```bash [pnpm]
# install in your project
pnpm install vue-audiomotion-analyzer
```

  </template>
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
  <template #tab1-title>js</template>
  <template #tab1-content>

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

  </template>
  <template #tab2-title>ts</template>
  <template #tab2-content>

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

  </template>
</CodeGroup>
