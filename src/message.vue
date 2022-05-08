<script lang="ts">
import {
  defineComponent, reactive, onMounted, ref, onBeforeMount,
  Ref
} from 'vue'
import Icon from './icon'

function useTimeout(cb: () => void, time: number) {
  const t: Ref<number> = ref(0)
  t.value = setTimeout(cb, time)
  return {
    stop () {
      clearTimeout(t.value)
    }
  }
}

export default defineComponent({
  components: { Icon },
  name: 'm-message',
  emits: ['close', 'destroy', 'collapsed'],
  props: {
    id: String,
    type: {
      type: String,
      default: 'info'
    },
    title: String,
    message: String,
    iconURL: String,
    duration: {
      type: Number,
      default: 3000
    },
    isCollapsed: Boolean,
    collapsable: Boolean,
    supportHTML: Boolean,
    width: String,
    className: String,
    wrapperClassName: String,
    closable: Boolean,
    stopTimerOnHover: {
      type: Boolean,
      default: true
    }
  },
  setup (props, { expose, emit }) {
    const state = reactive({
      visible: true,
      collapsed: props.isCollapsed,
      timer: null
    })
    let stopTimer: () => void

    const startTimer = () => {
      if (props.duration < 0) return
      ;({stop: stopTimer} = useTimeout(() => {
        close()
      }, props.duration))
    }
    const clearTimer = () => {
      stopTimer?.()
    }

    const close = () => {
      state.visible = false
    }

    const triggerCollapse = () => {
      state.collapsed = !state.collapsed
      emit('collapsed', state.collapsed)
    }

    const handleClose = () => {
      state.visible = false
    }
    const handleClearTimer = () => {
      props.stopTimerOnHover && clearTimer()
    }

    const handleStartTimer = () => {
      props.stopTimerOnHover && startTimer()
    }

    onBeforeMount(() => {
      clearTimer()
    })
    onMounted(() => {
      startTimer()
    })

    expose({
      close
    })
    return {
      state,
      handleClearTimer,
      handleStartTimer,
      triggerCollapse,
      handleClose
    }
  }
})
</script>

<template>
  <transition name="m-message-fade" appear mode="in-out"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')">
    <div class="m-message-wrapper" v-if="state.visible"
      :id="id"
      :style="{
        width: width
      }"
      :class="wrapperClassName"
      >
      <div class="m-message"
        :class="className"
        @mouseenter="handleClearTimer"
        @mouseleave="handleStartTimer"
        >
        <div class="m-message-icons" v-if="iconURL || type">
          <img v-if="iconURL" :src="iconURL" class="m-message--icon"/>
          <icon v-else-if="type" :name="type" class="m-message--icon"/>
        </div>
        <div class="m-message-content">
          <div class="m-message--title" v-if="title || $slots.title"><slot name="title">{{ title }}</slot></div>
          <template v-if="supportHTML && message">
            <div class="m-message--description" v-if="!state.collapsed" v-html="message"></div>
          </template>
          <template v-else>
            <div class="m-message--description" v-if="!state.collapsed"><slot>{{ message }}</slot></div>
          </template>
        </div>
        <div class="m-message--control">
          <button class="m-message--button m-message--arrow-down"
            v-if="collapsable && (title || $slots.title)"
            :class="{
              'is-collapsed': state.collapsed
            }"
            @click="triggerCollapse">
            <svg viewBox="0 0 35 35" width="20" height="20" version="1.1" fill="currentColor">
              <path d="M9.4,13.9c-0.2,0.2-0.2,0.6,0,0.8l8.1,8.1l0,0l0,0l8.1-8.1c0.2-0.2,0.2-0.6,0-0.8l-1.3-1.3 c-0.2-0.2-0.6-0.2-0.8,0l-5.5,5.5c-0.2,0.2-0.6,0.2-0.8,0l-5.5-5.5c-0.2-0.2-0.6-0.2-0.8,0L9.4,13.9z"/>
            </svg>
          </button>
          <button class="m-message--button m-message--close"
            v-if="duration < 0 || closable"
            @click="handleClose">
            <svg viewBox="0 0 35 35" width="20" height="20" version="1.1" fill="currentColor">
              <path d="M19.5,17.5l5.1,5.1l-2,2l-5.1-5.1l-5.1,5.1l-2-2l5.1-5.1l-5.1-5.1l2-2l5.1,5.1l5.1-5.1l2,2L19.5,17.5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
