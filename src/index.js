import Message from './message.js'
import './message.less'

Message.install = function (Vue, options) {
  if (options && options.name) {
    Vue.prototype[`$${options.name}`] = Message
  } else {
    Vue.prototype.$message = Message
  }
}

export default Message
