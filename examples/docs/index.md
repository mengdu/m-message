# Message

````html demo:vue
<template>
  <div>
    <select class="m-input" v-model="type">
      <option value="">None</option>
      <option value="info">Info</option>
      <option value="success">Success</option>
      <option value="warning">Warning</option>
      <option value="error">Error</option>
      <option value="loading">Loading</option>
    </select>
    <select class="m-input" v-model="position">
      <option value="">None</option>
      <option value="top-left">top-left</option>
      <option value="top-center">top-center</option>
      <option value="top-right">top-right</option>
      <option value="center">center</option>
      <option value="bottom-left">bottom-left</option>
      <option value="bottom-center">bottom-center</option>
      <option value="bottom-right">bottom-right</option>
    </select>
    <select class="m-input" v-model="hasMask">
      <option :value="false">No-mask</option>
      <option :value="true">Has-mask</option>
    </select>
    <input v-model="msg" class="m-input" />
    <button @click="handleMessage" class="m-btn">Send</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: '',
      position: '',
      msg: 'This is a test message',
      hasMask: false
    }
  },
  methods: {
    handleMessage () {
      this.$message({
        type: this.type,
        message: this.msg,
        showClose: true,
        position: this.position,
        hasMask: this.hasMask
      })
    }
  }
}
</script>
````