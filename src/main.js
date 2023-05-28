import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router.js'
import YouTube from 'vue3-youtube'

createApp(App).component('YouTube', YouTube).use(router).mount('#app')
