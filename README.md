# m-message

A message plugin base on Vue.

[中文文档](README-zh.md) | [Live Demo](https://mengdu.github.io/m-message/index.html)


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


# Message API

+ **Message(options)** Show a message
+ **Message.info(msg|options)** `Info` type message
+ **Message.success(msg|options)** `Success` type message
+ **Message.error(msg|options)** `Error` type message
+ **Message.warning(msg|options)** `Warning` type message
+ **Message.loading(msg|options)** `Loading` type message
+ **Message.closeAll()** Close all message
+ **Message.globals.options[key] = [value]** Global settings; see `options`

# options

|   Attribute    | Description    | Type      | Accepted Values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | Message options   | object | —  |    —   |
| options.type   |  Message type  | string | 'info', 'success', 'error', 'warning', 'loading'  |   info   |
| options.title   |  Message title  | string | —  |    ''   |
| options.message   |  Message content  | string | —  |    ''   |
| options.collapsable   |  Collapsable  | boolean | —  |   true   |
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
