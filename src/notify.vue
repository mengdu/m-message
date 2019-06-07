<template>
  <div class="m-notify" v-show="visible">

    <div class="m-notify--title" v-if="title || $slots.title">
      <div class="m-notify-icons" v-if="iconImg || $slots.icon">
        <img :src="iconImg" v-if="iconImg" class="m-notify--icon"/>
        <slot name="icon" v-else></slot>
      </div>
      <span name="title">{{ title }}</span>
    </div>

    <div class="m-notify-content">
      <slot>{{ content }}</slot>
    </div>

    <div class="m-notify--control" v-if="onOk || onClose">
      <slot name="button"></slot>
      <button class="m-notify--button m-notify--ok"
        v-if="onOk"
        @click="ok">
        {{okBtnText}}
      </button>
      <button class="m-notify--button m-notify--close"
        @click="close">
        {{closeBtnText}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-notify',
  props: {
    iconImg: String,
    onOk: Function,
    onClose: Function,
    closeWrapper: Function,
    okText: String,
    closeText: String,
    title: String,
    content: String
  },
  data () {
    return {
      visible: true,
      okBtnText: this.okText || 'ok',
      closeBtnText: this.closeText || 'cancel'
    }
  },
  methods: {
    ok () {
      this.visible = false
      let doClose = () => {}
      // closeWrapper exist means component is wrapped by template, close will has animation
      if (typeof this.onOk === 'function') doClose = this.onOk
      if (typeof this.closeWrapper === 'function') doClose = this.closeWrapper
      doClose('onOk')
    },
    close () {
      this.visible = false
      let doClose = () => {}
      if (typeof this.onClose === 'function') doClose = this.onClose
      if (typeof this.closeWrapper === 'function') doClose = this.closeWrapper
      doClose()
    }
  }
}
</script>
