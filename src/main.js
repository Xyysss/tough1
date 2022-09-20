import { createApp } from 'vue'
import App from './App.vue'
import VueRouter from 'vue'
import router from './router/index'




createApp(App).use(router).use(VueRouter).mount('#app')

