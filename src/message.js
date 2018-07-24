import MessageTemplate from './message.vue'
import Vue from 'vue'
const MessageConstructor = Vue.extend(MessageTemplate)

const instances = []
let count = 1

const Message = function (options) {
  let userOnClose = options.onClose

  const instance = new MessageConstructor({
    // el: document.createElement('div'),
    data () {
      return {
        ...options
      }
    }
  })

  instance.id = count++

  options.onClose = function () {
    Message.close(instance.id, userOnClose)
  }

  // instance.vm = instance.$mount()
  // document.body.appendChild(instance.vm.$el)
  // instance.vm.show = true

  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.show = true
  instance.dom = instance.vm.$el

  instances.push(instance)

  return instance.vm
}

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

export default Message
