<template>
<svg viewBox="0 0 50 50" class="m-loading-icon"
  :class="{
    'm-loading-default': !type,
    'm-loading-wipe': type === 'wipe'
  }"
  :style="{
    width: width + 'px',
    height: width + 'px'
  }"
  >

  <circle v-if="bgColor" :stroke="bgColor" cx="25" cy="25" r="20" class="m-loading-icon-bg-path"
    :style="{
      stroke: bgColor
    }"
    ></circle>
  <circle cx="25" cy="25" r="20" class="m-loading-icon-active-path"
    :style="{
      stroke: color
    }"
    ></circle>

</svg>
</template>
<script>
export default {
  name: 'MLoading',
  props: {
    width: [String, Number],
    type: String,
    color: String,
    bgColor: {
      type: [String, Boolean],
      default: true
    }
  }
}
</script>
