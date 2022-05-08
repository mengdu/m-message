# vue-m-message

A message plugin base on Vue.

> v4.x version only supports Vue 3; If you use Vue 2, use v3.x instead.

![Preview](./preview.png)

[中文](README-zh.md) | [Live Demo](https://mengdu.github.io/m-message/index.html)

```bash
npm install vue-m-message

# Vue 2
# npm install vue-m-message@3
```

```js
import { createApp, h } from 'vue'
import Message from 'vue-m-message'
import 'vue-m-message/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(Message)
// or
app.use(Message, options: { name?: string, defaultOptions?: MessageTypeOptions })

// Message.info('Wellcome here !', { duration: -1, ctx: instance?.appContext })
// Message.info(h('m-demo', 'Wellcome here !'), { duration: -1 })
Message.info(() => h('div', [
  'Here is playground for ',
  h('a', { href: 'https://github.com/mengdu/m-message' },'Vue Message'),
  ' plugin.'
]), {
  title: 'Wellcome here !',
  duration: -1,
  iconURL: 'https://avatars.githubusercontent.com/u/11366654?s=40&v=4'
})
// Message.info(<m-demo>Wellcome here !</m-demo>, { duration: -1 })
// Message.info(() => <m-demo>Wellcome here !</m-demo>, { duration: -1 })

app.mount('#app')
```

## Message API

+ `Message(options: MessageOptions): MessageIntance` General prompt information
+ `Message.info(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Info prompt information
+ `Message.success(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Success prompt information
+ `Message.error(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Error prompt information
+ `Message.warning(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Warning prompt information
+ `Message.loading(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Loading prompt information
+ `Message.closeAll(): void` Clear all prompts
+ `Message.setDefault(options: MessageTypeOptions): void` Set default values


```ts
type MessageTypeOptions = Omit<MessageOptions, 'type' | 'message'>

interface MessageIntance {
  id: string
  close: () => void
}
```

### MessageOptions

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type   |  Message type icon  | string | '', 'info', 'success', 'error', 'warning', 'loading'  |   'info'   |
| iconURL   | Replace type icon with picture | string | —  |   —   |
| title   | Message title | string | —  |    ''   |
| message   | Message content | string | —  |    ''   |
| position   | Message display position | string | 'top-left', 'top-center', 'top-right', 'center', 'bottom-left', 'bottom-center', 'bottom-right' |
| duration   | Message display duration, in MS; It will not be automatically closed when -1 | number | —  |   3000   |
| width   | Message block width, auto width by default | string | —  |  ''  |
| className   | class name  | string | — |  — |
| wrapperClassName   | class name for wrapper | string | — |  — |
| zIndex   | z-index  | number | —  |   1010   |
| supportHTML   | Whether the message content supports HTML (only valid when the message is a string) | boolean | true/false | false |
| isCollapsed   | Collapse content  | boolean | true/false |   false   |
| collapsable   | Collapsable | boolean | true/false |   false   |
| closable  | Whether it can be closed (the close button is displayed; this attribute is invalid when `duration = - 1`) | boolean | true/false |  false   |
| hasMask   | Does it contain a mask | boolean | true/false |  false   |
| stopTimerOnHover   | Whether to recalculate the display duration when the mouse moves over | boolean | true/false |  true   |
| onClose   | Close callback | () => void | —  |    —   |
| onCollapsed   | Fold switch callback | (collapsed: boolean) => void | —  |   —   |

## License

Licensed as [MIT](./LICENSE).
