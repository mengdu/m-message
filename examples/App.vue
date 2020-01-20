<template>
  <div id="app">
    <MainHeader />
    <div class="main-container"><router-view /></div>
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from './components/main-header'
import MainFooter from './components/main-footer'

export default {
  name: 'app',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>
