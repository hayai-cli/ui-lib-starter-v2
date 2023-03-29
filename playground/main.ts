import Vue from 'vue'
import App from './App.vue'
import { EButton } from '@ui/index'
import './assets/main.css'
Vue.use(EButton)
const app = new Vue({
  render: (h) => h(App)
}).$mount('#app')
