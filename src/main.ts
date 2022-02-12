import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import { createPinia } from 'pinia'

createApp(App)
  .use(createPinia())
  .mount('#app')
