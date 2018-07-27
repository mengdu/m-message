import MessageTemplate from './message.vue'
import Vue from 'vue'
const MessageConstructor = Vue.extend(MessageTemplate)

const instances = []
let count = 1
let msgContainer = null

window.instances = instances
window.msgContainer = msgContainer

const Message = function (options) {
  let userOnClose = options.onClose
  if (!msgContainer) {
    msgContainer = document.createElement('div')
    msgContainer.className = 'm-message-container'
    document.body.appendChild(msgContainer)
  }
  const id = count++
  options.onClose = function () {
    console.log('close')
    Message.close(id, userOnClose)
  }
  const instance = new MessageConstructor({
    // el: document.createElement('div'),
    data: options
  })

  instance.id = id
  // instance.vm = instance.$mount()
  // document.body.appendChild(instance.vm.$el)
  // instance.vm.show = true

  instance.vm = instance.$mount()
  // document.body.appendChild(instance.vm.$el)
  msgContainer.appendChild(instance.vm.$el)
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
  setTimeout(function () {
    if (instances.length === 0 && msgContainer) {
      msgContainer.remove()
      msgContainer = null
    }
  }, 3000)
}

export default Message
