import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from "~pages";
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// import { createRouter, createWebHashHistory } from 'vue-router';

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
);
