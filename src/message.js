import MessageTemplate from './message-template'
import Vue from 'vue'
const MessageConstructor = Vue.extend(MessageTemplate)

const instances = []
let count = 1
const containers = {}
const globalsOptions = {}

const Message = function (options) {
  options = { ...globalsOptions, ...options }
  let userOnClose = options.onClose
  const position = options.position || 'top-center'
  const hasMask = options.hasMask || false
  const containerKey = position + (hasMask ? '-mask' : '')
  let containerEl = containers[containerKey]

  if (!containerEl) {
    containerEl = containers[containerKey] = document.createElement('div')
    containerEl.className = [
      'm-message-container',
      'is-' + position,
      hasMask ? 'has-mask' : ''
    ].filter(function (e) { return !!e }).join(' ')
    document.body.appendChild(containerEl)
  }

  if (options.zIndex) {
    containerEl.style.zIndex = options.zIndex
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
  instance.containerKey = containerKey

  // for position of bottom-*
  if (position.indexOf('bottom') === 0 && containerEl.firstChild) {
    containerEl.insertBefore(instance.$el, containerEl.firstChild)
  } else {
    containerEl.appendChild(instance.$el)
  }
  // 挂载后再设置显示才有过渡效果
  instance.show = true

  instances.push(instance)

  return instance
}

Message.close = function (id, userOnClose) {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      const { containerKey, hasMask } = instances[i]
      // 响应options.onClose
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances[i] = null
      instances.splice(i, 1)

      // 如果开启遮罩，300ms 后移除容器（不移除白屏时间太长）
      if (hasMask) {
        setTimeout(function () {
          const count = instances.filter(e => e.containerKey === containerKey).length
          if (count === 0 && containers[containerKey]) {
            containers[containerKey].remove()
            containers[containerKey] = null
          }
        }, 300)
      }
      break
    }
  }

  setTimeout(function () {
    // 当前没有消息后，移除容器
    if (instances.length === 0) {
      for (let type in containers) {
        if (containers[type]) {
          containers[type].remove()
          containers[type] = null
        }
      }
    }
  }, 3000)
}

Message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

// global options
Message.globals = {
  options: globalsOptions
}

const types = [ 'info', 'success', 'error', 'warning', 'loading' ]

types.forEach(type => {
  Message[type] = function (options) {
    options = typeof options === 'string' ? { message: options } : options
    return Message({ ...options, type })
  }
})

export default Message
