import Message from './message.js'
import MessageComponent from './message.vue'

import './message.less'

Message.install = function (Vue, options) {
  if (options && options.name) {
    Vue.prototype[`$${options.name}`] = Message
  } else {
    Vue.prototype.$message = Message
  }
}

export const MMessage = MessageComponent
export default Message
