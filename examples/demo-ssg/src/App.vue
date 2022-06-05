<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <h1 class="green">Vue AudioMotion Analyzer Demo</h1>
      <p>
        This Vue plugin is just a wrapper around Henrique Vianna's brilliant
        <a href="https://audiomotion.dev" target="_blank"
          >audioMotion-analyzer</a
        >
        <br /><br />
        <a href="https://vue-audiomotion-analyzer.dev">documentation</a>
        -
        <a href="https://github.com/vernaillen/vue-audiomotion-analyzer"
          >github</a
        >
      </p>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
  text-align: center;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  place-items: center;
  margin-bottom: 25px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
