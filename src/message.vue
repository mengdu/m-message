<template>
<transition name="m-message-fade" mode="in-out">
  <div v-show="show"
    :class="['m-message', type && 'm-message-' + type]"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
    >
    {{message}}
    <button class="m-message__close" @click="close"><span>×</span></button>
  </div>
</transition>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      type: 'info',
      message: '',
      duration: 3000,
      showClose: false,
      onClose: null,
      timer: null,
      closed: false
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
      if (this.duration > 0) {
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
    this.startTimer()
  },
  beforeDestroy () {}
}
</script>
