import App from './App.vue'
import routes from "~pages";
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
