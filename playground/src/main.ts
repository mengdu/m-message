import { createApp } from 'vue'
import App from './App.vue'
import Demo from './Demo.vue'
import message, { MessageTypeOptions } from '../../src'

declare global {
  interface Window {
    message: typeof message
  }
}

window.message = message

const app = createApp(App)

app.component('m-demo', Demo)
app.use(message, {
  name: 'msg',
  defaultOptions: <MessageTypeOptions>{
    // supportHTML: true,
    // closable: true,
    // duration: -1
  }
})
app.mount('#app')
