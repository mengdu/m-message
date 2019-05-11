<template>
<transition name="m-message-fade" mode="in-out">
  <div class="m-message-wrapper"
    v-show="show"
    :style="{
      zIndex: wrapperzIndex
    }"
    :class="{
      'm-message-center': align === 'center'
    }">
    <message
      :class="[type && 'm-message--' + type]"
      @mouseenter.native="clearTimer"
      @mouseleave.native="startTimer"
      :content="message"
      :closable="showClose"
      :is-collapsed="false"
      :close-handler="close"
      >
      <template slot="icon">
        <img v-if="iconImg" :src="iconImg" class="m-message--icon"/>
        <icon v-else :name="type" class="m-message--icon" />
      </template>
      </message>
  </div>
</transition>
</template>
<script>
import Message from './message.vue'
import Icon from './icon'

export default {
  components: { Icon, Message },
  data () {
    return {
      show: false,
      type: 'info',
      iconImg: '',
      message: '',
      duration: 3000,
      showClose: false,
      onClose: null,
      timer: null,
      closed: false,
      align: '',
      zIndex: ''
    }
  },
  computed: {
    wrapperzIndex () {
      return (this.align === 'center' && this.zIndex) ? this.zIndex : false
    }
  },
  watch: {
    closed (val) {
      if (val) {
        this.show = false
        this.$el.addEventListener('animationend', this.destroyElement)
      }
    }
  },
  methods: {
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      if (this.duration > 0 && this.type !== 'loading') {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    }
  },
  mounted () {
    if (this.type !== 'loading') {
      this.startTimer()
      if (this.duration <= 0) {
        this.showClose = true
      }
    }
  }
}
</script>
