import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import FFF from './components/FFF.vue'
import JJJ from './components/JJJ.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {path:'/fff',component:FFF},
    {path:'/jjj',component:JJJ}
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')