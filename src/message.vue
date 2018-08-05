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
      <img :src="typeImg" v-if="typeImg" class="m-message-type-img"/>
      {{message}}
      <button class="m-message__close" @click="close" v-if="showClose"><span>×</span></button>
    </div>
  </div>
</transition>
</template>
<script>
import infoImg from './assets/info.svg'
import errorImg from './assets/error.svg'
import successImg from './assets/success.svg'
import warningImg from './assets/warning.svg'
import loadingImg from './assets/loading.svg'

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
        warning: warningImg,
        loading: loadingImg
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
