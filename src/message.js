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
    Message.close(id, userOnClose)
  }
  const instance = new MessageConstructor({
    el: document.createElement('div'),
    data: options
  })

  instance.id = id
  msgContainer.appendChild(instance.$el)
  instance.show = true

  instances.push(instance)

  return instance
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

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

const types = ['info', 'success', 'error', 'warning', 'loading']

types.forEach(type => {
  Message[type] = function (options) {
    options = typeof options === 'string' ? {message: options} : options
    return Message({...options, type})
  }
})

export default Message
