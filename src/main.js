import { createApp } from 'vue'
import App from './App.vue'
import YouTube from 'vue3-youtube'

createApp(App).component('YouTube', YouTube).mount('#app')
