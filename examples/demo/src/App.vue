<script setup lang="ts">
import HTMLMediaElementAnalyzer from '@/components/HTMLMediaElementAnalyzer.vue'
</script>

<template>
  <header>
    <div class="text-center">
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="50"
        height="50"
      >
      <div class="wrapper">
        <h1 class="green">
          Vue AudioMotion Analyzer Demo
        </h1>
        <p>
          This Vue plugin is just a wrapper around Henrique Vianna's
          <a href="https://audiomotion.dev" rel="noopener" target="_blank">audioMotion-analyzer</a>
          <br>
          <a
            href="https://vue-audiomotion-analyzer.dev"
            rel="noopener"
            target="_blank"
          >documentation</a>
          -
          <a
            href="https://github.com/vernaillen/vue-audiomotion-analyzer"
            rel="noopener"
            target="_blank"
          >github</a>
        </p>
      </div>
    </div>
  </header>

  <main>
    <HTMLMediaElementAnalyzer />
  </main>
</template>
