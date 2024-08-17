import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { registerGlobComp } from '@/utils/registerGlobComp'

import App from './App.vue'
import router from './router'
import DataVVue3 from '@kjgl77/datav-vue3'

const mount = async () => {
  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.use(DataVVue3)
  registerGlobComp(app)
  app.mount('#app')
}

mount()
