<script setup lang="tsx">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { getCurrentInstance, reactive, h } from 'vue'
import message, { MessageOptions } from '../../src'

const myIconUrl = 'https://avatars.githubusercontent.com/u/11366654?s=40&v=4'
const githubUrl = 'https://github.com/mengdu/m-message'
const instance = getCurrentInstance()

// message.info('Wellcome here !', { duration: -1, ctx: instance?.appContext })
// message.info(h('m-demo', 'Wellcome here !'), { duration: -1 })
message.info(() => h('div', [
  'Here is playground for ',
  h('a', { href: githubUrl },'Vue Message'),
  ' plugin.'
]), {
  title: 'Wellcome here !',
  duration: -1,
  iconURL: myIconUrl
})
// message.info(<m-demo>Wellcome here !</m-demo>, { duration: -1 })
// message.info(() => <m-demo>Wellcome here !</m-demo>, { duration: -1 })

const state: any = reactive<MessageOptions>({
  title: '',
  message: 'Hi <b>Boy(Girl)</b>! This is content !',
  type: 'info',
  // width: '350px',
  iconURL: '',
  position: '',
  hasMask: false,
  isCollapsed: false,
  collapsable: false,
  closable: true,
  stopTimerOnHover: true,
  supportHTML: false,
  duration: 3000,
  zIndex: 0,
  className: 'test',
  wrapperClassName: 'wtest',
  onClose () {
    console.log('close')
  },
  onCollapsed (collapsed) {
    console.log('collapsed:', collapsed)
  }
})

const handleMessage = () => {
  const msg = message({ ...state })
  console.log(msg)
}
</script>

<template>
  <div class="box">
    <div><strong>Vue Message Playground</strong></div><br/>
    <table>
      <thead><td width="80"></td><td></td></thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>
            <select class="m-input" v-model="state.type">
              <option value="">None</option>
              <option value="info">Info</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
              <option value="loading">Loading</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td><input v-model="state.title" class="m-input" placeholder="Title"/></td>
        </tr>
        <tr>
          <td>Message</td>
          <td><textarea v-model="state.message" placeholder="Message"></textarea></td>
        </tr>
        <tr>
          <td>Icon URL</td>
          <td>
            <input v-model="state.iconURL" class="m-input" placeholder="Icon URL"/>
            <label>
              <input type="checkbox" @click="state.iconURL = state.iconURL ? '' : myIconUrl"> Use imgage
            </label>
          </td>
        </tr>
        <tr>
          <td>ClassName</td>
          <td><input v-model="state.className" class="m-input" placeholder="ClassName"/></td>
        </tr>
        <tr>
          <td>WrapperClassName</td>
          <td><input v-model="state.wrapperClassName" class="m-input" placeholder="WrapperClassName"/></td>
        </tr>
        <tr>
          <td>zIndex</td>
          <td><input v-model.number="state.zIndex" type="number" class="m-input" placeholder="zIndex"/></td>
        </tr>
        <tr>
          <td>Position</td>
          <td>
            <select class="m-input" v-model="state.position">
              <option value="">None</option>
              <option value="top-left">top-left</option>
              <option value="top-center">top-center</option>
              <option value="top-right">top-right</option>
              <option value="center">center</option>
              <option value="bottom-left">bottom-left</option>
              <option value="bottom-center">bottom-center</option>
              <option value="bottom-right">bottom-right</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Duration</td>
          <td><input v-model.number="state.duration" type="range" :min="-1" :max="5000" class="m-input" placeholder="Duration"/>&nbsp;{{state.duration}}ms</td>
        </tr>
        <tr>
          <td>Mask</td>
          <td><label><input type="checkbox" v-model="state.hasMask" /> hasMask</label></td>
        </tr>
        <tr>
          <td>IsCollapsed</td>
          <td><label><input type="checkbox" v-model="state.isCollapsed" /> IsCollapsed</label></td>
        </tr>
        <tr>
          <td>Collapsable</td>
          <td><label><input type="checkbox" v-model="state.collapsable" /> Collapsable</label></td>
        </tr>
        <tr>
          <td>Closable</td>
          <td><label><input type="checkbox" v-model="state.closable" /> Closable</label></td>
        </tr>
        <tr>
          <td>SupportHTML</td>
          <td><label><input type="checkbox" v-model="state.supportHTML" /> SupportHTML</label></td>
        </tr>
        <tr>
          <td>StopTimerOnHover</td>
          <td><label><input type="checkbox" v-model="state.stopTimerOnHover" /> StopTimerOnHover</label></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <p></p>
            <button @click="handleMessage" class="m-btn">Show Message</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p>See: <a :href="githubUrl" target="_blank">{{githubUrl}}</a></p>
  </div>
</template>

<style lang="less">
body {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  font-size: 15px;
  color: #121212;
  background-color: #07a56a;
  background-image: url(./assets/logo.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 400px 400px;
  padding: 15px;

  &::after {
    content: "A message plugin for Vue 3 A message plugin for Vue 3";
    position: absolute;
    font-size: 10rem;
    color: rgba(0, 0, 0, 0.05);
    padding: 50px;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
.box {
  background: #fff;
  border-radius: 5px;
  max-width: 400px;
  padding: 15px;
}
</style>
