# m-message

基于 Vue 的信息提示插件。


[English Docs](README.md) | [Live Demo](https://mengdu.github.io/m-message/index.html)



<div align="center">

![](./20190722111215.png)

![](./20190722111342.png)
</div>



```js
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

Vue.use(Message) // will mount `Vue.prototype.$message`
// or
Vue.use(Message, { name: 'msg' }) // will mount `Vue.prototype.$msg`
```

## Message API

+ **Message(options)** 显示信息
+ **Message.info(msg | options)** 普通信息
+ **Message.success(msg | options)** 成功信息
+ **Message.error(msg | options)** 错误信息
+ **Message.warning(msg | options)** 警告信息
+ **Message.loading(msg | options)** 加载信息
+ **Message.closeAll()** 清空所有消息
+ **Message.globals.options[key] = [value]** 全局默认设置，请看 `options`

## options

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 消息配置对象   | object | —  |    —   |
| options.type   |  消息类型  | string | 'info', 'success', 'error', 'warning', 'loading'  |   info   |
| options.title   |  消息标题  | string | —  |    ''   |
| options.message   |  消息内容  | string | —  |    ''   |
| options.collapsable   |  是否可折叠  | boolean | —  |   true   |
| options.isCollapsed   |  是否折叠消息内容  | boolean | —  |   false   |
| options.width   |  消息块宽度，默认自动宽  | string | —  |  ''  |
| options.showClose   |  显示close按钮  | boolean | false/true |   false   |
| options.className   |  消息块类名  | string | — |  — |
| options.wrapperClassName   |  包裹层类名  | string | — |  — |
| options.supportHTML   |  消息内容是否支持html  | boolean | — | false |
| options.onClose   |  关闭回调   | function | —  |    —   |
| options.duration   |  消息显示时长，单位ms；-1时不会自定关闭  | number | —  |   3000   |
| options.zIndex   |  堆叠顺序   | number | —  |    1010   |
| options.iconImg   | 图片图标url  | string | —  |   —   |
| options.hasMask   | 是否含有遮罩层  | boolean | —  |  false   |
| options.position   | 消息展示位置  | string | 'top-left', 'top-center', 'top-right', 'center', 'bottom-left', 'bottom-center', 'bottom-right' |
