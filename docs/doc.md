<span id="example"></span>
## 例子

:::demo 在线例子

```html
<select v-model="type" class="m-input">
  <option v-for="item in types" :key="item" :value="item">{{item}}</option>
</select>
<input type="text" v-model="message" class="m-input">
<m-button type="info" @click="handleShowMsg">显示消息</m-button>
<m-button type="danger" @click="handleCloseAll">关闭所有</m-button>
<script>
  export default {
    data () {
      return {
        types: [
          'info',
          'success',
          'error',
          'warning',
          'loading'
        ],
        type: '',
        message: 'This is a test.'
      }
    },
    methods: {
      handleShowMsg() {
        this.$message({
          message: this.message,
          type: this.type,
          showClose: true
        })
      },
      handleCloseAll () {
        this.$message.closeAll()
      },
      handleLoading () {
        let l = this.$message.loading('处理中...')
        setTimeout(function () {
          l.close()
        }, 3000)
      },
      handleCenterLoading () {
        let l = this.$message.loading({
          message: '居中显示...',
          position: 'center',
          hasMask: true
        })
        setTimeout(function () {
          l.close()
        }, 3000)
      }
    }
  }
</script>
```
:::


:::demo `loading` 类型信息并不会自动关闭，请主动调用关闭

```html
<m-button type="info" @click="handleLoading">Loading</m-button>
<m-button type="info" @click="handleCenterLoading">遮罩&居中显示</m-button>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleLoading () {
        let l = this.$message.loading('处理中...')
        setTimeout(function () {
          l.close()
        }, 3000)
      },
      handleCenterLoading () {
        let l = this.$message.loading({
          message: '居中显示...',
          position: 'center',
          hasMask: true
        })
        setTimeout(function () {
          l.close()
        }, 3000)
      }
    }
  }
</script>
```
:::