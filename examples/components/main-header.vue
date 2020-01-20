<template>
  <div class="main-header">
    <div class="main-container clearfix">
      <div class="f-left"><navs :menus="navs"/></div>
      <div class="f-right"><navs :menus="outside" /></div>
    </div>
  </div>
</template>
<script>
import Navs from './navs'

export default {
  components: { Navs },
  data () {
    return {
      navs: [
        { label: 'Home', router: '/' },
        // { label: 'Live Demo', router: '/live-demo' },
        { label: 'Live Demo', router: '/docs' },
      ],
      outside: [
        { label: 'Repository', link: this.$root.pkg.github },
        { label: 'About', link: this.$root.pkg.website }
      ]
    }
  },
  created () {

  }
}
</script>
