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
      <!-- <readme></readme> -->
      <!-- <Doc/> -->
      <m-button @click="show">show</m-button>
    </main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from './components/footer'
import ForkLink from './components/fork-link'
// import Doc from './doc.md'
import Readme from '~/README.md'
import pkg from '~/package.json'

export default {
  name: 'App',
  components: {
    // Doc,
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
        message: 'this is a test.'
      })
    }
  }
}
</script>
