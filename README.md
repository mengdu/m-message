# m-message

A message plugin base on Vue.

[中文文档](README-zh.md) | [Live Demo](https://mengdu.github.io/m-message/example/)


<div align="center">

![](./20190722111215.png)

![](./20190722111342.png)
</div>



```js
import Message from 'vue-m-message'

Vue.use(Message) // will mount `Vue.prototype.$message`
// or
Vue.use(Message, { name: 'msg' }) // will mount `Vue.prototype.$msg`
```


# Message API

+ **Message(options)** Show a message
+ **Massage.info(msg|options)** `Info` type message
+ **Massage.success(msg|options)** `Success` type message
+ **Massage.error(msg|options)** `Error` type message
+ **Massage.warning(msg|options)** `Warning` type message
+ **Massage.loading(msg|options)** `Loading` type message
+ **Message.closeAll()** Close all message

# options

|   Attribute    | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | Message options   | object | —  |    —   |
| options.type   |  Message type  | string | 'info', 'success', 'error', 'warning', 'loading'  |   info   |
| options.title   |  Message title  | string | —  |    ''   |
| options.message   |  Message content  | string | —  |    ''   |
| options.isCollapsed   |  Folding message  | boolean | —  |   false   |
| options.width   |  Message block width; default auto width  | string | —  |  ''  |
| options.className   |  Class name for message block  | string | — |  — |
| options.wrapperClassName   |  Class name form wrapper  | string | — |  — |
| options.supportHTML   |  Message support HTML  | boolean | — | false |
| options.showClose   |  Show close button  | false/true | —  |   false   |
| options.onClose   |  Close callback function   | function | —  |    —   |
| options.duration   |  Message display duration, unit ms, -1 not closed  | number | —  |   3000   |
| options.zIndex   |  z-index   | number | —  |   1010   |
| options.iconImg   | Img icon URL  | string | —  |   —   |
| options.hasMask   | Has mask wrapper  | boolean | —  |  false   |
| options.position   | Message display position   | string | 'top-left', 'top-center', 'top-right', 'center', 'bottom-left', 'bottom-center', 'bottom-right' |