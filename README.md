# m-message

A message plugin for vue.

> Refer to the implementation of ElementUI [message](https://github.com/ElemeFE/element/blob/dev/packages/message/index.js) component.
> Style reference [ant-message](https://ant.design/components/message-cn/) component

[中文文档](README-zh.md)

[Live Demo](https://mengdu.github.io/m-message/example/)



```js
import Message from 'vue-m-message'

Vue.use(Message) // will mount `Vue.prototype.$message`
```

```js
Vue.use(Message, {name: 'msg'}) // will mount `Vue.prototype.$msg`
```


# Message API

+ **Message(options)** Show a message
+ **Massage.info(msg|options)** `Info` type message
+ **Massage.success(msg|options)** `Success` type message
+ **Massage.error(msg|options)** `Error` type message
+ **Massage.warning(msg|options)** `Warning` type message
+ **Massage.loading(msg|options)** `Loading` type message


# options

|   Attribute    | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | message options   | object | —  |    —   |
| options.type   |  message type  | string | 'info', 'success', 'error', 'warning', 'loading'  |   info   |
| options.message   |  message content  | string | —  |    ''   |
| options.showClose   |  show close button  | false/true | —  |   false   |
| options.onClose   |  close callback function   | function | —  |    —   |
| options.duration   |  message display duration, unit ms, -1 not closed  | number | —  |   3000   |
| options.zIndex   |  z-index   | number | —  |   1010   |
| options.align   |  show position   | string | center  |   空   |
| options.iconImg   | Img icon URL  | string | —  |   —   |
