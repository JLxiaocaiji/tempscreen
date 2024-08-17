import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobComp } from '@/utils/registerGlobComp'

import App from './App.vue'
import router from './router'

const mount = async () => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)

  registerGlobComp(app)
  app.mount('#app')
}

mount()
