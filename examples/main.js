import Vue from 'vue'
import App from './App.vue'
import DemoBlock from './components/demo-block'
import router from './router'
import Message from '../src'
import pkg from '../package.json'
import 'vue-dotmd-loader/dist/css/default.css'
import 'github-markdown-css/github-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import './assets/main.less'

Vue.use(DemoBlock)
Vue.use(Message)

Vue.config.productionTip = false

// Global setting for message plugin
Message.globals.options.className = 'my-messge'
// Message.globals.options.position = 'bottom-center'

const app = new Vue({
  render: h => h(App),
  router,
  data () {
    return {
      pkg: pkg
    }
  },
  mounted () {
    setTimeout(() => {
      this.$message({
        title: 'Hi !',
        message: 'Welcome to use this plug-in !',
        iconImg: 'https://avatars1.githubusercontent.com/u/11366654?s=40&v=4',
        duration: -1
      })
    }, 2000)
  }
}).$mount('#app')

window.app = app
