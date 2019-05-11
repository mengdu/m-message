<template>
  <div class="m-message" v-show="visible">
    <div class="m-message-icons" v-if="iconImg || $slots.icon">
      <img :src="iconImg" v-if="iconImg" class="m-message--icon"/>
      <slot name="icon" v-else></slot>
    </div>
    <div class="m-message-content">
      <div class="m-message--title" v-if="title || $slots.title"><slot name="title">{{ title }}</slot></div>
      <div class="m-message--description" v-if="!collapsed"><slot>{{ content }}</slot></div>
    </div>
    <div class="m-message--control">
      <slot name="button"></slot>
      <button class="m-message--button m-message--arrow-down"
        v-if="title || $slots.title"
        :class="{
          'is-collapsed': collapsed
        }"
        @click="triggerCollapse">
        <svg viewBox="0 0 35 35" width="20" height="20" version="1.1" fill="currentColor">
            <path class="st0" d="M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"/>
          </svg>
      </button>
      <button class="m-message--button m-message--close"
        v-if="closable"
        @click="handleClose">
        <svg viewBox="0 0 35 35" width="20" height="20" version="1.1" fill="currentColor">
          <path d="M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-message',
  props: {
    iconImg: String,
    closable: Boolean,
    closeHandler: Function,
    title: String,
    content: String,
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: true,
      collapsed: this.isCollapsed
    }
  },
  methods: {
    triggerCollapse () {
      this.collapsed = !this.collapsed
    },
    close () {
      this.visible = false
    },
    handleClose () {
      if (typeof this.closeHandler === 'function') this.closeHandler(this.close)
      else this.close()
    }
  }
}
</script>
