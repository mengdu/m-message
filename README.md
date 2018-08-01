# m-message

消息通知组件

> 原理参考了element-ui的 [message](https://github.com/ElemeFE/element/blob/dev/packages/message/index.js) 组件的的实现，样式风格参考了 [ant-message](https://ant.design/components/message-cn/)


<!-- ```ls
npm install -S 
``` -->

<!-- ```js
import Message from ''
``` -->

# Message API

+ **Message(options)** 显示信息
+ **Massage.info(msg|options)** 


# options

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| options   | 消息配置对象   | object | —  |    —   |
| options.message   |  —   | string | —  |    —   |
| options.type   |  —   | string | 'info', 'success', 'error', 'warning', 'loading'  |    —   |
| options.onClose   |  —   | function | —  |    —   |
| options.duration   |  —   | number | —  |    —   |
| options.ZIndex   |  —   | number | —  |    —   |
| options.algin   |  —   | string | —  |    —   |
