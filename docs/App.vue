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
        <li @click="handleMessage('success')"><icon name="success" class="status-icon"/> <span class="icon-type">Success</span></li>
        <li @click="handleMessage('error')"><icon name="error" class="status-icon"/> <span class="icon-type">Error</span></li>
        <li @click="handleMessage('warning')"><icon name="warning" class="status-icon"/> <span class="icon-type">Warning</span></li>
        <li @click="handleMessage('loading')"><icon name="loading" class="status-icon"/> <span class="icon-type">Loading</span></li>
      </ul>
    </main>
    <main class="doc-block">
      <m-message iconImg="https://avatars1.githubusercontent.com/u/11366654?s=40&v=4" content="Hello World !" title="This is message title. 测试标题" />
      <p></p>
      <m-message iconImg="https://avatars1.githubusercontent.com/u/11366654?s=40&v=4" content="Hello World !" closable :is-collapsed="false"/>
      <p></p>
      <div style="display: inline-block;">
        <m-message iconImg="https://avatars1.githubusercontent.com/u/11366654?s=40&v=4" content="你好，这是测试信息 ！" title="测试标题" closable :is-collapsed="false"/>
      </div>
      <p></p>
      <m-message title="将进酒 - 李白" closable>
        <icon name="info" class="m-message--icon" slot="icon" />
      君不见，黄河之水天上来，奔流到海不复回。 君不见，高堂明镜悲白发，朝如青丝暮成雪。
      人生得意须尽欢，莫使金樽空对月。 
      天生我材必有用，千金散尽还复来。 
      烹羊宰牛且为乐，会须一饮三百杯。 
      岑夫子，丹丘生，将进酒，杯莫停。 
      </m-message>
      <readme></readme>
      <Doc/>
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
import { truncate } from 'fs';

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
      position: 'top-center',
    }
  },
  computed: {
    repo () {
      return pkg.repository.url.replace(/git\+/, '')
    }
  },
  methods: {
    handleMessage (type) {
      this.$message({
        type: type,
        position: this.position,
        // duration: -1,
        message: type.replace(/^[a-z]/, (ch) => ch.toLocaleUpperCase()) + ' message !'
      })
    }
  },
  mounted () {
    setTimeout(() => {
      this.$message({
        message: 'Wellcome to here !',
        iconImg: 'https://avatars1.githubusercontent.com/u/11366654?s=40&v=4',
        duration: -1
      })
    }, 2000)
  }
}
</script>
