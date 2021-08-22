import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { key, store } from './store'
import './style/tailwind.css'

createApp(App).use(router).use(store, key).mount('#app')
