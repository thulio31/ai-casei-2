import './css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store" // Importar Vuex

const app = createApp(App)

app.use(router)
app.use(store); // Usar Vuex

app.mount('#app')
