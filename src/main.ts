import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import App from './App.vue'
import routes from "~pages";
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    console.log('ctx', ctx);
    // config pinia
    const pinia = createPinia();
    ctx.app.use(pinia);

    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach(i => i.install?.(ctx))
  },
);
