<template>
  <div class="m-message">
    <div class="m-message--icon">
      <img v-if="iconImg" :src="iconImg" class="m-message-icon-img"/>
      <slot name="icon" v-else></slot>
    </div>
    <div class="m-message--content">
      <div class="m-message--title" v-if="title">{{ title }}</div>
      {{content}}
    </div>
    <div class="m-message--control">
      <button class="m-message--button m-message--arrow-dowm">
        <svg viewBox="0 0 35 35" width="19" height="19" version="1.1" fill="currentColor">
            <path class="st0" d="M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"/>
          </svg>
      </button>
      <button class="m-message--button m-message--close" @click="handleClose" v-if="canClose">
        <svg viewBox="0 0 35 35" width="19" height="19" version="1.1" fill="currentColor">
          <path d="M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iconImg: String,
    canClose: Boolean,
    closeHandler: Function,
    title: String,
    content: String
  },
  methods: {
    handleClose () {
      if (typeof this.closeHandler === 'function') this.closeHandler()
    }
  }
}
</script>
