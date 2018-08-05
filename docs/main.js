// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/common.css'
import DemoBlock from './components/demo-block'
import MButton from 'vue-m-button'
import 'vue-m-button/dist/css/default.css'
import Message from '@/index'

Vue.use(MButton)
Vue.use(Message)
// Vue.use(Message, {name: 'msg'})
Vue.component('DemoBlock', DemoBlock)
Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

window.app = app
