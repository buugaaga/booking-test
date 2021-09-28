import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import { router } from '@/router'
import { key, store } from './store'

createApp(App).use(router).use(store, key).use(VueAxios, axios).mount('#app')
