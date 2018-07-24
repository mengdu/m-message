import Message from './message.js'
import './message.less'

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}

export default Message
