<template>
  <div id="app">
    <fork-link :repo="repo" />
    <header>
      <img src="./assets/logo.png">
      <h1>{{pkg.name}} <span>{{pkg.version}}</span></h1>
      <p>{{pkg.description}}</p>
      <div class="text-center" style="padding: 15px;">
        <a :href="repo" target="_blank">
          <m-button type="info" size="large" round>
            <img src="https://avatars1.githubusercontent.com/u/11366654?s=40&v=4" class="user-img" alt="mengdu">
            Github
          </m-button>
        </a>
        &nbsp;
        <a href="#example"><m-button type="warning" size="large" plain round>Example</m-button></a>
      </div>
    </header>
    <main class="doc-block">
      <div>
        <select v-model="position" class="m-input">
          <option v-for="item in positions" :key="item" :value="item">{{item}}</option>
        </select>
        <m-button type="danger" @click="$message.closeAll()">CloseAll</m-button>
      </div>
      <p></p>
      <ul class="status-icons">
        <li @click="handleMessage('info')"><icon name="info" class="status-icon"/> <span class="icon-type" >Info</span></li>
        <li @click="handleMessage('success',{duration: -1})"><icon name="success" class="status-icon"/> <span class="icon-type">Success and persist</span></li>
        <li @click="handleMessage('error',{title: 'oops'})"><icon name="error" class="status-icon"/> <span class="icon-type">Error and more info</span></li>
        <li @click="handleMessage('warning')"><icon name="warning" class="status-icon"/> <span class="icon-type">Warning</span></li>
        <li @click="handleMessage('loading')"><icon name="loading" class="status-icon"/> <span class="icon-type">Loading</span></li>
      </ul>
      <p>notify, default not auto close</p>
      <ul class="status-icons">
        <li @click="handleNotify('info', {autoClose:true})"><icon name="info" class="status-icon"/> <span class="icon-type" >Info and auto close</span></li>
        <li @click="handleNotify('success', {title: null})"><icon name="success" class="status-icon"/> <span class="icon-type">Success without title</span></li>
        <li @click="handleNotify('error', {onOk: null})"><icon name="error" class="status-icon"/> <span class="icon-type">Error without ok button</span></li>
        <li @click="handleNotify('warning', {okText:'sure!', closeText:'thanks'})"><icon name="warning" class="status-icon"/> <span class="icon-type">Warning with custom button text</span></li>
        <li @click="handleNotify('loading')"><icon name="loading" class="status-icon"/> <span class="icon-type">Loading</span></li>
      </ul>
    </main>
    <main class="doc-block">
      <m-message :iconImg="iconImg" content="Hello World !" title="This is message title. 默认展开" />
      <p></p>
      <m-message :iconImg="iconImg" content="Hello World ! 没有折叠按钮"/>
      <p></p>
      <div style="display: inline-block;">
        <m-message :iconImg="iconImg" content="你好，这是测试信息 ！" title="折叠的" showClose fold/>
      </div>
      <p></p>
      <m-message title="将进酒 - 李白">
        <icon name="info" class="m-message--icon" slot="icon"/>
      君不见，黄河之水天上来，奔流到海不复回。 君不见，高堂明镜悲白发，朝如青丝暮成雪。
      人生得意须尽欢，莫使金樽空对月。
      天生我材必有用，千金散尽还复来。
      烹羊宰牛且为乐，会须一饮三百杯。
      岑夫子，丹丘生，将进酒，杯莫停。
      </m-message>
      <!-- <readme></readme> -->
      <!-- <Doc/> -->
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from './components/footer'
import ForkLink from './components/fork-link'
import Doc from './doc.md'
import Readme from '~/README.md'
import pkg from '~/package.json'
import Icon from '../src/icon'
import { MMessage } from '../src'

export default {
  name: 'App',
  components: {
    Doc,
    LayoutFooter,
    ForkLink,
    Readme,
    Icon,
    MMessage
  },
  data () {
    return {
      iconImg: 'https://avatars1.githubusercontent.com/u/11366654?s=40&v=4',
      pkg,
      positions: [
        'top-left',
        'top-center',
        'top-right',
        'center',
        'bottom-left',
        'bottom-center',
        'bottom-right'
      ],
      position: 'top-center'
    }
  },
  computed: {
    repo () {
      return pkg.repository.url.replace(/git\+/, '')
    }
  },
  methods: {
    handleMessage (type, option) {
      this.$message({
        type: type,
        position: this.position,
        content: type.replace(/^[a-z]/, (ch) => ch.toLocaleUpperCase()) + ' message !',
        ...option
      })
    },
    handleNotify (type, option) {
      this.$message.notify({
        type: type,
        iconImg: this.iconImg,
        title: 'Want a story?',
        position: this.position,
        onOk: this.onOk,
        onClose: this.onClose,
        content: 'Once upon a time, there is a long long stroy~',
        ...option
      })
    },
    onOk (close) {
      this.$message({
        type: 'success',
        position: 'top-center',
        content: 'wise choice!'
      })
    },
    onClose (close) {
      this.$message({
        type: 'warning',
        position: 'top-center',
        content: 'what a pity!'
      })
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.$message({
    //     message: 'Wellcome to here !',
    //     iconImg: 'https://avatars1.githubusercontent.com/u/11366654?s=40&v=4',
    //     duration: -1
    //   })
    // }, 2000)
  }
}
</script>
