<template>
  <div><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MDemo',
  mounted () {
    console.log(this.$mmessage)
    // console.log(this.$msg)
  }
})
</script>

