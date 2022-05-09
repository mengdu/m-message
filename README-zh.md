# vue-m-message

基于 Vue 的信息提示插件。

> v4.x 版本仅支持 Vue 3；如果你使用 Vue 2 请使用 v3.x 的版本。

![Preview](./preview.png)

[English](README.md) | [Live Demo](https://mengdu.github.io/m-message/index.html)

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

+ `Message(options: MessageOptions): MessageIntance` 通用提示信息
+ `Message.info(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Info 提示信息
+ `Message.success(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Success 成功提示信息
+ `Message.error(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Error 错误提示信息
+ `Message.warning(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Warning 警告提示信息
+ `Message.loading(message: string | VNode | (() => VNode), options?: MessageTypeOptions): MessageIntance` Loading 加载提示信息
+ `Message.closeAll(): void` 清空所有提示信息
+ `Message.setDefault(options: MessageTypeOptions): void` 设置默认值


```ts
type MessageTypeOptions = Omit<MessageOptions, 'type' | 'message'>

interface MessageIntance {
  id: string
  close: () => void
}
```

### MessageOptions

| 属性      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type   | 消息类型图标 | string | '', 'info', 'success', 'error', 'warning', 'loading'  |   'info'   |
| iconURL   | 使用图片替换类型图标 | string | —  |   —   |
| title   | 消息标题 | string | —  |    ''   |
| message   | 消息内容 | string | —  |    ''   |
| position   | 消息展示位置 | string | 'top-left', 'top-center', 'top-right', 'center', 'bottom-left', 'bottom-center', 'bottom-right' |
| duration   | 消息显示时长，单位ms；当 `-1` 时需要手动关闭 | number | —  |   3000   |
| width   | 消息块宽度，默认自动宽 | string | —  |  ''  |
| className   | 消息块类名 | string | — |  — |
| wrapperClassName   | 包裹层类名 | string | — |  — |
| zIndex   | 堆叠顺序 | number | —  |   1010   |
| supportHTML   | 消息内容是否支持html（message 为字符串时才有效） | boolean | true/false | false |
| isCollapsed   | 是否折叠内容 | boolean | true/false |   false   |
| collapsable   | 是否可折叠 | boolean | true/false |   false   |
| closable  | 是否可以关闭 | boolean | true/false |  false   |
| hasMask   | 是否含有遮罩层 | boolean | true/false |  false   |
| stopTimerOnHover   | 当鼠标移过是否重新计算显示时长 | boolean | true/false |  true   |
| onClose   | 关闭回调 | () => void | —  |    —   |
| onCollapsed   | 折叠切换回调 | (collapsed: boolean) => void | —  |   —   |

## License

Licensed as [MIT](./LICENSE).
