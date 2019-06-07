<template>
<transition name="m-message-fade" mode="in-out">
  <div class="m-message-wrapper"
    v-show="!closed"
    :style="{ width: wrapperWidth }"
    :class="wrapperClassName"
  >
    <component
      v-bind="$options.options"
      :is="component"
      :class="[type && 'm-message--' + type, className]"
      @mouseenter.native="clearTimer"
      @mouseleave.native="startTimer"
      :close-wrapper="close"
    >
      <template slot="icon">
        <img v-if="iconImg" :src="iconImg" class="m-message--icon"/>
        <icon v-else-if="type" :name="type" class="m-message--icon" />
      </template>
    </component>
  </div>
</transition>
</template>
<script>
import Icon from './icon'

export default {
  components: { Icon },
  data () {
    return {
      type: 'info',
      iconImg: '',
      component: this.$options.component,
      duration: 3000,
      autoClose: true,
      wrapperWidth: '',
      className: '',
      wrapperClassName: '',
      timer: null,
      closed: false,
      onClose: null
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
    close (fnKey) {
      this.closed = true
      this[fnKey || 'onClose']()
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    startTimer () {
      if (this.autoClose && this.duration > 0) {
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
    if (this.autoClose && this.duration > 0) {
      this.startTimer()
    }
  }
}
</script>
