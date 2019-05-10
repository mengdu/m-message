<template>
<transition name="m-message-fade" mode="in-out">
  <div v-show="show" class="m-message-wrapper"
    :style="{
      zIndex: wrapperzIndex
    }"
    :class="{
      'm-message-center': align === 'center'
    }">
    <div
      :class="['m-message', type && 'm-message-' + type]"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      >
      <div class="m-message-wrap">
        <img v-if="iconImg" :src="iconImg" class="m-message-type-img"/>
        <icon v-else :name="type" class="m-message-type-img" />
        <div class="m-message-content">
          <span>{{message}}</span>
          <button class="m-message__close" @click="close" v-if="showClose"><span>×</span></button>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>
<script>
import Icon from './icon'

export default {
  components: { Icon },
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
