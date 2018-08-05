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
      <readme></readme>
      <Doc/>
      <!-- <m-button @click="show">show</m-button>
      <m-button @click="$message({type: 'info', message: '提示信息'})" type="info">info</m-button>
      <m-button @click="$message({type: 'error', message: '提示信息'})" type="danger">error</m-button>
      <m-button @click="$message({type: 'success', message: '提示信息'})" type="success">success</m-button>
      <m-button @click="$message({type: 'warning', message: '提示信息'})" type="warning">warning</m-button>
      <m-button @click="loading" type="primary">loading</m-button>
      <m-button @click="handleDemo" type="primary">具有遮罩的提示</m-button> -->
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

export default {
  name: 'App',
  components: {
    Doc,
    LayoutFooter,
    ForkLink,
    Readme
  },
  data () {
    return {
      pkg,
      test: 'xxx'
    }
  },
  computed: {
    repo () {
      return pkg.repository.url.replace(/git\+/, '')
    }
  },
  methods: {
    show () {
      this.$message({
        type: 'success',
        duration: -1,
        message: 'this is a test.',
        zIndex: 2000
      })
    },
    loading () {
      this.$message({
        type: 'loading',
        message: 'Loading...',

      })
    },
    handleDemo () {
      let l = this.$message.loading({
        message: '请求处理中...',
        align: 'center'
      })

      setTimeout(function () {
        l.close()
      }, 5000)
    }
  }
}
</script>
