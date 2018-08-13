# m-message

Vue 的消息插件。

> 原理参考了element-ui的 [message](https://github.com/ElemeFE/element/blob/dev/packages/message/index.js) 组件的的实现，样式风格参考了 [ant-message](https://ant.design/components/message-cn/)

[English Docs](READEME-zh.md)

[Live Demo](https://mengdu.github.io/m-message/example/)


```js
import Message from 'vue-m-message'

Vue.use(Message) // will mount `Vue.prototype.$message`
```

```js
Vue.use(Message, {name: 'msg'}) // will mount `Vue.prototype.$msg`
```


# Message API

+ **Message(options)** 显示信息
+ **Massage.info(msg|options)** 普通信息
+ **Massage.success(msg|options)** 成功信息
+ **Massage.error(msg|options)** 错误信息
+ **Massage.warning(msg|options)** 警告信息
+ **Massage.loading(msg|options)** 加载信息


# options

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 消息配置对象   | object | —  |    —   |
| options.type   |  消息类型  | string | 'info', 'success', 'error', 'warning', 'loading'  |   info   |
| options.message   |  消息内容  | string | —  |    ''   |
| options.showClose   |  显示close按钮  | false/true | —  |   false   |
| options.onClose   |  关闭回调   | function | —  |    —   |
| options.duration   |  消息显示时长，单位ms；-1时不会自定关闭  | number | —  |   3000   |
| options.zIndex   |  堆叠顺序   | number | —  |    1010   |
| options.algin   |  位置设置   | string | center  |   空   |
