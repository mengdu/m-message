import MessageComponent from './message.vue'
import { createVNode, render, isVNode } from 'vue'
import type { AppContext, VNode } from 'vue'

type ContentType = string | VNode | (() => VNode)
export interface MessageOptions {
  type?: '' | 'info' | 'success' | 'warning' | 'error' | 'loading'
  title?: string
  message?: ContentType
  iconURL?: string
  duration?: number
  zIndex?: number,
  isCollapsed?: boolean
  collapsable?: boolean
  supportHTML?: boolean
  hasMask?: boolean
  position?: '' | 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  width?: string
  className?: string
  wrapperClassName?: string
  closable?: boolean
  stopTimerOnHover?: boolean
  onClose?: () => void
  onCollapsed?: (collapsed: boolean) => void
  ctx?: AppContext
}

export type MessageTypeOptions = Omit<MessageOptions, 'type' | 'message'>
export interface MessageIntance {
  id: string
  close: () => void
}

export type MessageFn = (message: ContentType, options?: MessageTypeOptions) => MessageIntance
export interface Message {
  (options: MessageOptions): MessageIntance
  info: MessageFn
  success: MessageFn
  error: MessageFn
  warning: MessageFn
  loading: MessageFn
  closeAll: () => void
  setDefault: (options: MessageTypeOptions) => void
  _context?: AppContext | null
}

const instances: { id: string, close: () => void }[] = []
let seed = 0
const containers: {[key: string]: { el: HTMLElement, count: number }} = {}
let globalsOptions: MessageOptions = {}
const defaultOptions: MessageOptions = {
  stopTimerOnHover: true,
  duration: 3000
}

const message: Message = (options: MessageOptions) => {
  const id = 'm-message-' + seed++
  const props = {
    ...defaultOptions,
    ...globalsOptions,
    ...options,
    id
  }
  delete props.hasMask
  delete props.position
  delete props.zIndex

  const position = options.position || 'top-center'
  const hasMask = options.hasMask || false
  const containerKey = position + (hasMask ? '-mask' : '')
  let container = containers[containerKey]

  if (!container) {
    container = containers[containerKey] = {
      el: document.createElement('div'),
      count: 1
    }
    container.el.className = [
      'm-message-container',
      'is-' + position,
      hasMask ? 'has-mask' : ''
    ].filter(function (e) { return !!e }).join(' ')
    document.body.appendChild(container.el)
  } else {
    container.count++
  }

  if (options.zIndex) {
    container.el.style.zIndex = String(options.zIndex)
  }

  let children = null
  if (isVNode(options.message)) {
    children = { default: () => options.message }
    props.message = ''
  } else if (typeof options.message === 'function') {
    children = { default: options.message }
    props.message = ''
  }

  const vm = createVNode(MessageComponent, props, children)
  const div = document.createElement('div')

  vm.appContext = options.ctx || message._context || null
  vm.props!.onClose = options.onClose
  vm.props!.onDestroy = () => {
    container.count--
    if (container.count === 0) {
      delete containers[containerKey]
      container.el.remove()
    }
    render(null, div)
  }

  render(vm, div)

  // for position of bottom-*
  if (position.indexOf('bottom') === 0 && container.el.firstChild) {
    container.el.insertBefore(div.firstElementChild!, container.el.firstChild)
  } else {
    container.el.appendChild(div.firstElementChild!)
  }

  const instance = {
    id,
    close () {
      vm?.component?.exposed?.close()
    }
  }

  instances.push(instance)
  return instance
}

message.success = (msg: ContentType, options?: MessageTypeOptions) => message({ ...options, type: 'success', message: msg })
message.info = (msg: ContentType, options?: MessageTypeOptions) => message({ ...options, type: 'info', message: msg })
message.warning = (msg: ContentType, options?: MessageTypeOptions) => message({ ...options, type: 'warning', message: msg })
message.error = (msg: ContentType, options?: MessageTypeOptions) => message({ ...options, type: 'error', message: msg })
message.loading = (msg: ContentType, options?: MessageTypeOptions) => message({ ...options, type: 'loading', message: msg })

message.closeAll = function () {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

// global options
message.setDefault = (opts) => {
  globalsOptions = { ...opts }
}

export default message
