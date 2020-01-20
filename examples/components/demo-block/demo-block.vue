<template>
  <div class="m-demo-block">
    <div class="demo"><slot></slot></div>
    <div class="code" v-if="!params.hideCode"><slot name="code"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    params: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
