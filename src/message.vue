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
      <img :src="typeImg" v-if="typeImg && type !== 'loading'" class="m-message-type-img"/>
      <loading width="22" type="wipe" v-if="type === 'loading'"></loading>
      {{message}}
      <button class="m-message__close" @click="close" v-if="showClose"><span>×</span></button>
    </div>
  </div>
</transition>
</template>
<script>
import infoImg from './assets/info.png'
import errorImg from './assets/error.png'
import successImg from './assets/success.png'
import warningImg from './assets/warning.png'
import Loading from './loading'

export default {
  components: {
    Loading
  },
  data () {
    return {
      show: false,
      type: 'info',
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
    typeImg () {
      let m = {
        info: infoImg,
        error: errorImg,
        success: successImg,
        warning: warningImg
      }
      return m[this.type]
    },
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
