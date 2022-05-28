<script setup lang="ts">
import DemoAudiomotionAnalyzer from './components/DemoAudiomotionAnalyzer.vue'
</script>

<template>
  <header>
    <div class="text-center">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="50" height="50" />
      <div class="wrapper">
        <h1 class="green">Vue AudioMotion Analyzer Demo</h1>
        <p>
          This Vue plugin is just a wrapper around Henrique Vianna's brilliant
          <a href="https://audiomotion.dev" target="_blank">audioMotion-analyzer</a>
          <br />
          <a href="https://vue-audiomotion-analyzer.netlify.app">docs</a> -
          <a href="https://github.com/vernaillen/vue-audiomotion-analyzer">github</a>
        </p>
      </div>
    </div>
  </header>

  <main>
    <DemoAudiomotionAnalyzer />
  </main>
</template>
