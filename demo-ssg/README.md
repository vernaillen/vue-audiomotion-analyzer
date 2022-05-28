# demo-ssg

## Executed steps to create this demo

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
npm i -D vite-ssg @vueuse/head
npm i vue-audiomotion-analyzer
```

```diff
// package.json
{
  "scripts": {
    "dev": "vite",
-   "build": "vue-tsc --noEmit && vite build",
+   "build": "vue-tsc --noEmit && vite-ssg build",
  }
}
```

```ts
// src/main.ts
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
// src/router/index.ts
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]
export default routes
```